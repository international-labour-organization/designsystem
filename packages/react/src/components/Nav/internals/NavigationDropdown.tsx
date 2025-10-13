import {
  useRef,
  memo,
  useEffect,
  RefObject,
  useCallback,
  forwardRef,
  useImperativeHandle,
  HTMLAttributes,
} from "react";
import { createPortal } from "react-dom";
import {
  useGlobalSettings,
  useOutsideClick,
  useFocusTrap,
} from "../../../hooks";
import classNames from "classnames";
import mergeRefs from "merge-refs";

type NavigationDropdownProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Whether the dropdown is open
   */
  isOpen: boolean;

  /**
   * Callback function to be called when the dropdown is closed
   */
  onClose?: () => void;

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
>(({ isOpen, className, navRef, children, onClose, ...props }, ref) => {
  const { prefix } = useGlobalSettings();
  const focusTrapRef = useFocusTrap<HTMLDivElement>({
    isActive: isOpen,
    onEscape: onClose,
  });

  const wrapperRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => wrapperRef.current!, []);
  useOutsideClick(
    wrapperRef,
    () => {
      if (isOpen && onClose) {
        onClose();
      }
    },
    {
      exceptions: [document.querySelector(`[aria-controls="${props.id}"]`)!],
    }
  );

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
      ref={mergeRefs(focusTrapRef, wrapperRef)}
      className={classNames(
        {
          [baseClass]: true,
          [`${baseClass}--open`]: isOpen,
        },
        className
      )}
      aria-hidden={!isOpen}
      role="menu"
      {...props}
    >
      <div className={`${baseClass}__container`}>{children}</div>
    </div>,
    document.body
  );
});

const NavigationDropdown = memo(NavigationDropdownBare);

export { NavigationDropdown };
