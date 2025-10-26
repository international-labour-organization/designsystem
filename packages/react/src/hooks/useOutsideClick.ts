import { useEffect } from "react";

function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T>,
  onClickOutside: () => void,
  config: {
    exceptions?: (React.RefObject<HTMLElement> | HTMLElement | Element)[];
  }
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (ref.current?.contains(target)) {
        return;
      }

      if (!config.exceptions || !config.exceptions.length) {
        return;
      }

      const isClickInException = config.exceptions
        .filter(Boolean)
        .some((exception) => {
          if (
            exception instanceof HTMLElement ||
            exception instanceof Element
          ) {
            return exception.contains(target);
          }
          return exception.current?.contains(target);
        });

      if (!isClickInException) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside, config.exceptions]);
}

export default useOutsideClick;
