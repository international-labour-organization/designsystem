import classNames from "classnames";
import { MouseEvent, PointerEvent, useRef } from "react";

import { prefix } from "../../utils";

import {
  useMegaNavConfig,
  useMegaNavItem,
  useMegaNavItemStatus,
} from "./internals/utils/context";
import { MegaNavTriggerProps } from "./MegaNav.props";

const baseClass = `${prefix}--mega-nav`;

const MegaNavTrigger = ({ className, children }: MegaNavTriggerProps) => {
  const {
    ids,
    labels,
    toggle,
    hoverHandlers,
    linkComponent: Link,
  } = useMegaNavConfig();
  const { id, label, href } = useMegaNavItem();
  const { isOpen, isHidden } = useMegaNavItemStatus();
  const pointerType = useRef("mouse");
  const hover = isHidden ? {} : hoverHandlers(id);

  if (children != null) {
    return (
      <button
        type="button"
        id={ids.toggle(id)}
        className={classNames(`${baseClass}__trigger`, className)}
        aria-expanded={isOpen}
        aria-controls={ids.panel(id)}
        onClick={() => toggle(id)}
        {...hover}
      >
        {children}
      </button>
    );
  }

  const handleClick = (event: MouseEvent) => {
    // On touch, the first tap opens the panel. Keyboard clicks have no detail
    if (!isOpen && event.detail > 0 && pointerType.current === "touch") {
      event.preventDefault();
      toggle(id);
    }
  };

  return (
    <>
      <Link
        className={classNames(`${baseClass}__link`, className)}
        href={href}
        onPointerDown={(event: PointerEvent) => {
          pointerType.current = event.pointerType;
        }}
        onClick={handleClick}
        {...hover}
      >
        {label}
      </Link>
      {!isHidden && (
        <button
          type="button"
          id={ids.toggle(id)}
          className={`${baseClass}__toggle`}
          aria-label={labels.toggle(label)}
          aria-expanded={isOpen}
          aria-controls={ids.panel(id)}
          onClick={() => toggle(id)}
          {...hover}
        >
          <span className={`${baseClass}__toggle-icon`} />
        </button>
      )}
    </>
  );
};

export { MegaNavTrigger };
