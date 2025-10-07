import {
  useRef,
  memo,
  useEffect,
  RefObject,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";
import { useGlobalSettings } from "../../../hooks";
import classNames from "classnames";

type NavigationDropdownProps = {
  /**
   * Whether the dropdown is open
   */
  isOpen: boolean;

  /**
   * The ref to the navigation element
   */
  navRef: RefObject<HTMLElement>;

  className?: string;

  /**
   * The children to render in the dropdown
   */
  children?: React.ReactNode;
};

const NavigationDropdownBare = forwardRef<
  HTMLDivElement,
  NavigationDropdownProps
>(({ isOpen, className, navRef, children }, ref) => {
  const { prefix } = useGlobalSettings();

  const wrapperRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => wrapperRef.current!, []);

  const baseClass = `${prefix}--nav-dropdown`;

  const updatePosition = useCallback(() => {
    if (!wrapperRef?.current || !navRef?.current) {
      return;
    }
    const navRect = navRef.current.getBoundingClientRect();
    wrapperRef.current.style.top = `${navRect.bottom}px`;
    wrapperRef.current.style.width = `${navRect.width}px`;
  }, [navRef]);

  useEffect(() => {
    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [updatePosition]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={wrapperRef}
      className={classNames(
        {
          [baseClass]: true,
          [`${baseClass}--open`]: isOpen,
        },
        className
      )}
    >
      <div className={`${baseClass}__container`}>{children}</div>
    </div>,
    document.body
  );
});

const NavigationDropdown = memo(NavigationDropdownBare);

export { NavigationDropdown };
