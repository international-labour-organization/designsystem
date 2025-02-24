import { useRef, memo, useEffect, RefObject } from "react";
import { createPortal } from "react-dom";
import { useGlobalSettings } from "../../hooks";
import classNames from "classnames";
import React from "react";

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

const NavigationDropdownBare = ({
  isOpen,
  className,
  navRef,
  children,
}: NavigationDropdownProps) => {
  const { prefix } = useGlobalSettings();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const baseClass = `${prefix}--nav-dropdown`;

  useEffect(() => {
    function update() {
      if (!wrapperRef?.current || !navRef?.current) {
        return;
      }
      const navRect = navRef.current.getBoundingClientRect();
      wrapperRef.current.style.top = `${navRect.bottom}px`;
      wrapperRef.current.style.width = `${navRect.width}px`;
    }

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, [navRef]);

  return createPortal(
    <div
      ref={wrapperRef}
      className={classNames({
        [baseClass]: true,
        [`${baseClass}--open`]: isOpen,
        className,
      })}
    >
      <div className={`${baseClass}__container`}>{children}</div>
    </div>,
    document.body
  );
};

const NavigationDropdown = memo(NavigationDropdownBare);

export { NavigationDropdown };
