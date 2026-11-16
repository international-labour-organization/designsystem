import {
  PointerEvent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface UseOpenStateArgs {
  rootRef: RefObject<HTMLElement>;
  toggleId: (id: string) => string;
  delay: {
    open: number;
    close: number;
  };
}

function useOpenState({ rootRef, toggleId, delay }: UseOpenStateArgs) {
  const [open, setOpen] = useState<string | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>();
  const openedByHover = useRef(false);

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

  const hoverHandlers = (id: string) => ({
    onPointerEnter: (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      clearTimeout(hoverTimer.current);
      const show = () => {
        openedByHover.current = true;
        setOpen(id);
      };

      if (open) show();
      else hoverTimer.current = setTimeout(show, delay.open);
    },
    onPointerLeave: (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      clearTimeout(hoverTimer.current);
      // An entry opened with a click stays open until it's closed
      if (!openedByHover.current) return;

      hoverTimer.current = setTimeout(() => {
        setOpen((current) => (current === id ? null : current));
      }, delay.close);
    },
  });

  return { open, toggle, close, hoverHandlers };
}

export { useOpenState };
