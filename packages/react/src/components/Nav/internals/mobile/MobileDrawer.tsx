import { ReactNode, useId } from "react";
import { useFocusTrap, useGlobalSettings } from "../../../../hooks";
import { createPortal } from "react-dom";
import classNames from "classnames";

type MobileDrawerProps = {
  /**
   * Whether the drawer is open or not
   */
  isOpen: boolean;

  /**
   * The handler to call when the drawer is closed
   */
  onClose?: () => void;

  /**
   * The Header part of the drawer
   */
  header: ReactNode;

  /**
   * The Widgets part of the drawer
   */
  widgets: ReactNode;

  /**
   * The Main content
   */
  children: ReactNode;

  /**
   * Whether any nested menu is open
   */
  isNestedOpen?: boolean;

  className?: string;
};

const MobileDrawer = ({
  isOpen,
  onClose,
  header,
  widgets,
  children,
  className,
  isNestedOpen = false,
}: MobileDrawerProps) => {
  const { prefix } = useGlobalSettings();
  const id = useId();
  const focusTrapRef = useFocusTrap<HTMLDivElement>({
    isActive: isOpen && !isNestedOpen,
    onEscape: () => {
      if (onClose) {
        onClose();
      }
    },
  });

  const baseClass = `${prefix}--nav-mobile-drawer`;

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      id={`${baseClass}__${id}`}
      className={classNames(baseClass, className, {
        [`${baseClass}--open`]: isOpen,
      })}
      ref={focusTrapRef}
      aria-hidden={!isOpen}
      aria-modal="true"
      role="dialog"
      tabIndex={isOpen ? -1 : undefined}
    >
      <div className={`${baseClass}__header`}>
        <div className={`${baseClass}__header-main`}>{header}</div>
        <button
          className={`${baseClass}__header-close`}
          onClick={onClose}
          aria-label="Close navigation"
        >
          <span className={`${baseClass}__header-close__icon`}></span>
        </button>
      </div>
      <div className={`${baseClass}__container`}>
        <div className={`${baseClass}__widgets`}>{widgets}</div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export { MobileDrawer };
