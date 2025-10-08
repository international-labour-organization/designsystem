import { useRef, useCallback, useEffect, RefCallback } from "react";

interface FocusTrapOptions {
  isActive: boolean;
  onEscape?: () => void;
  onReturnFocus?: () => void;
  autoFocus?: boolean;
  restoreFocus?: boolean;
}

const FOCUSABLE_SELECTORS = [
  "a[href]:not([disabled])",
  "button:not([disabled])",
  "textarea:not([disabled])",
  'input[type="text"]:not([disabled])',
  'input[type="radio"]:not([disabled])',
  'input[type="checkbox"]:not([disabled])',
  'input[type="search"]:not([disabled])',
  'input[type="submit"]:not([disabled])',
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"]):not([disabled])',
];

function useFocusTrap<T extends HTMLElement>(
  options: FocusTrapOptions
): RefCallback<T> {
  const {
    isActive,
    onEscape,
    onReturnFocus,
    autoFocus = true,
    restoreFocus = true,
  } = options;

  const containerRef = useRef<HTMLElement | null>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

  const getFocusableElements = useCallback((): HTMLElement[] => {
    if (!containerRef.current) return [];

    const nodes = containerRef.current.querySelectorAll(
      FOCUSABLE_SELECTORS.join(",")
    );
    const elements = Array.from(nodes).filter((item: HTMLElement) => {
      return (
        item.style.display !== "none" &&
        item.style.visibility !== "hidden" &&
        item.offsetParent !== null
      );
    }) as HTMLElement[];

    const uniqueElements = Array.from(new Set(elements));

    return uniqueElements;
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isActive || !containerRef.current) return;

      const { key, shiftKey } = event;

      if (key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        if (onEscape) onEscape();

        return;
      }

      if (key === "Tab") {
        const focusableElements = getFocusableElements();

        if (focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements.at(0);
        const lastElement = focusableElements.at(-1);
        const activeElement = document.activeElement as HTMLElement;

        if (shiftKey) {
          if (
            activeElement === firstElement ||
            !focusableElements.includes(activeElement)
          ) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (
            activeElement === lastElement ||
            !focusableElements.includes(activeElement)
          ) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      }
    },
    [isActive, onEscape, getFocusableElements]
  );

  const setupFocusTrap = useCallback(() => {
    if (!isActive || !containerRef.current) return;

    if (restoreFocus && document.activeElement) {
      previouslyFocusedElementRef.current =
        document.activeElement as HTMLElement;
    }

    focusableElementsRef.current = getFocusableElements();

    if (autoFocus && focusableElementsRef.current.length > 0) {
      focusableElementsRef.current[0]?.focus();
    }

    document.addEventListener("keydown", handleKeyDown, true);
  }, [isActive, autoFocus, restoreFocus, getFocusableElements, handleKeyDown]);

  const cleanupFocusTrap = useCallback(() => {
    document.removeEventListener("keydown", handleKeyDown, true);

    if (restoreFocus && previouslyFocusedElementRef.current) {
      setTimeout(() => {
        if (previouslyFocusedElementRef.current) {
          previouslyFocusedElementRef.current.focus();
          previouslyFocusedElementRef.current = null;
        }
      }, 0);
    }

    if (onReturnFocus) onReturnFocus();
  }, [handleKeyDown, restoreFocus, onReturnFocus]);

  useEffect(() => {
    if (isActive) {
      setupFocusTrap();
    } else {
      cleanupFocusTrap();
    }

    return () => {
      cleanupFocusTrap();
    };
  }, [isActive, setupFocusTrap, cleanupFocusTrap]);

  const refCallback: RefCallback<HTMLElement> = useCallback(
    (element) => {
      containerRef.current = element;

      if (element && isActive) {
        setTimeout(setupFocusTrap, 0);
      }
    },
    [isActive, setupFocusTrap]
  );

  return refCallback;
}

export default useFocusTrap;
export type { FocusTrapOptions };
