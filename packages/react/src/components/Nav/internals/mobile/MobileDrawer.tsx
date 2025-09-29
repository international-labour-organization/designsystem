import { ReactNode, useId } from "react";
import { useGlobalSettings } from "../../../../hooks";
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

  className?: string;
};

const MobileDrawer = ({
  isOpen,
  onClose,
  header,
  widgets,
  children,
  className,
}: MobileDrawerProps) => {
  const { prefix } = useGlobalSettings();
  const id = useId();

  const baseClass = `${prefix}--nav-mobile-drawer`;

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      id={`${baseClass}__${id}`}
      className={classNames(baseClass, className, {
        [`${baseClass}--open`]: isOpen,
      })}
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
