import { useCallback, useEffect, useRef, useState } from "react";

import useIsomorphicLayoutEffect from "../../../../hooks/useIsomorphicLayoutEffect";

interface UseOverflowArgs {
  count: number;
  gap: number;
  enabled: boolean;
}

function getItems(list: HTMLUListElement | null) {
  return Array.from(
    list?.querySelectorAll<HTMLElement>(":scope > [data-meganav-item]") ?? []
  );
}

function useOverflow({ count, gap, enabled }: UseOverflowArgs) {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const moreRef = useRef<HTMLLIElement>(null);
  const [visibleCount, setVisibleCount] = useState(count);

  const measure = useCallback(() => {
    const container = containerRef.current;
    // Not laid out: hidden, or no layout engine (jsdom)
    if (!enabled || !container?.clientWidth) return;

    const widths = getItems(listRef.current).map((item) => item.offsetWidth);
    const available = container.clientWidth - gap;
    const total = widths.reduce((sum, width) => sum + width, 0);

    if (total <= available) {
      setVisibleCount(count);
      return;
    }

    let used = moreRef.current?.offsetWidth ?? 0;
    let fitting = 0;
    for (const width of widths) {
      if (used + width > available) break;
      used += width;
      fitting++;
    }
    setVisibleCount(fitting);
  }, [count, gap, enabled]);

  useIsomorphicLayoutEffect(measure, [measure]);

  useEffect(() => {
    if (!enabled || !containerRef.current) return;
    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => measure());
    observer.observe(containerRef.current);
    for (const item of getItems(listRef.current)) observer.observe(item);

    return () => observer.disconnect();
  }, [enabled, measure]);

  return {
    containerRef,
    listRef,
    moreRef,
    visibleCount: enabled ? visibleCount : count,
  };
}

export { useOverflow };
