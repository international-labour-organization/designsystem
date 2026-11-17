import {
  PointerEvent,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface UseOpenStateArgs {
  rootRef: RefObject<HTMLElement>;
  toggleId: (id: string) => string;
  openDelay: number;
  closeDelay: number;
}

function useOpenState({
  rootRef,
  toggleId,
  openDelay,
  closeDelay,
}: UseOpenStateArgs) {
  const [open, setOpen] = useState<string | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>();
  const openedByHover = useRef(false);
  // Read by the hover handlers, so they stay the same while open changes
  const openRef = useRef(open);
  openRef.current = open;

  const close = useCallback(() => setOpen(null), []);

  const toggle = useCallback((id: string) => {
    clearTimeout(hoverTimer.current);
    openedByHover.current = false;
    setOpen((current) => (current === id ? null : id));
  }, []);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: globalThis.PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(null);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (rootRef.current?.contains(document.activeElement)) {
        document.getElementById(toggleId(open))?.focus();
      }
      setOpen(null);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, rootRef, toggleId]);

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  const hoverHandlers = useCallback(
    (id: string) => ({
      onPointerEnter: (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;

        clearTimeout(hoverTimer.current);
        if (openRef.current === id) return;

        const show = () => {
          openedByHover.current = true;
          setOpen(id);
        };

        if (openRef.current) show();
        else hoverTimer.current = setTimeout(show, openDelay);
      },
      onPointerLeave: (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;

        clearTimeout(hoverTimer.current);
        // An entry opened with a click stays open until it's closed
        if (!openedByHover.current) return;

        hoverTimer.current = setTimeout(() => {
          setOpen((current) => (current === id ? null : current));
        }, closeDelay);
      },
    }),
    [openDelay, closeDelay]
  );

  return useMemo(
    () => ({ open, toggle, close, hoverHandlers }),
    [open, toggle, close, hoverHandlers]
  );
}

export { useOpenState };
