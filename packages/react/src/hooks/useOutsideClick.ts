import { useEffect } from "react";

function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T>,
  onClickOutside: () => void,
  exceptions: React.RefObject<HTMLElement>[] = []
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (ref.current?.contains(target)) {
        return;
      }

      const isClickInException = exceptions.some((exception) =>
        exception.current?.contains(target)
      );

      if (!isClickInException) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside, exceptions]);
}

export default useOutsideClick;
