import { CSSProperties, RefObject, useState } from "react";

import useIsomorphicLayoutEffect from "../../../../hooks/useIsomorphicLayoutEffect";

/**
 * Aligns an open panel under its item, kept inside the bar
 */
function usePanelOffset(
  panelRef: RefObject<HTMLElement>,
  isOpen: boolean,
  layoutKey?: unknown
) {
  const [offset, setOffset] = useState<number>();

  useIsomorphicLayoutEffect(() => {
    const panel = panelRef.current;
    const bar = panel?.offsetParent;
    const item = panel?.closest("li");
    if (!isOpen || !panel || !(bar instanceof HTMLElement) || !item) return;

    const position = () => {
      const styles = getComputedStyle(bar);
      const isRtl = styles.direction === "rtl";
      const paddingStart = parseFloat(
        isRtl ? styles.paddingRight : styles.paddingLeft
      );
      const paddingEnd = parseFloat(
        isRtl ? styles.paddingLeft : styles.paddingRight
      );
      const barRect = bar.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const start = isRtl
        ? barRect.right - itemRect.right
        : itemRect.left - barRect.left;
      const max = barRect.width - paddingEnd - panel.offsetWidth;

      setOffset(Math.max(paddingStart, Math.min(start, max)));
    };

    position();
    window.addEventListener("resize", position);
    return () => window.removeEventListener("resize", position);
  }, [panelRef, isOpen, layoutKey]);

  return isOpen && offset !== undefined
    ? ({ "--ilo-mega-nav-panel-offset": `${offset}px` } as CSSProperties)
    : undefined;
}

export { usePanelOffset };
