import { RefObject, useState } from "react";

import useIsomorphicLayoutEffect from "../../../../hooks/useIsomorphicLayoutEffect";

function usePanelOffset(
  navRef: RefObject<HTMLElement>,
  panelId: string | undefined,
  layoutKey: unknown
) {
  const [offset, setOffset] = useState<number>();

  useIsomorphicLayoutEffect(() => {
    const nav = navRef.current;
    const panel = panelId && document.getElementById(panelId);
    const item = panel && panel.closest("li");
    if (!nav || !panel || !item) return;

    const position = () => {
      const styles = getComputedStyle(nav);
      const isRtl = styles.direction === "rtl";
      const paddingStart = parseFloat(
        isRtl ? styles.paddingRight : styles.paddingLeft
      );
      const paddingEnd = parseFloat(
        isRtl ? styles.paddingLeft : styles.paddingRight
      );
      const navRect = nav.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const start = isRtl
        ? navRect.right - itemRect.right
        : itemRect.left - navRect.left;
      const max = navRect.width - paddingEnd - panel.offsetWidth;

      setOffset(Math.max(paddingStart, Math.min(start, max)));
    };

    position();
    window.addEventListener("resize", position);
    return () => window.removeEventListener("resize", position);
  }, [navRef, panelId, layoutKey]);

  return offset;
}

export { usePanelOffset };
