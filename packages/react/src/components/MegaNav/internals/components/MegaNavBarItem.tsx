import classNames from "classnames";
import { MouseEvent, PointerEvent, useRef } from "react";

import { prefix } from "../../../../utils";

import { MegaNavIds } from "../hooks/useIds";
import { useOpenState } from "../hooks/useOpenState";
import { useMegaNav } from "../utils/context";
import { ParsedItem } from "../utils/parser";

type MegaNavBarItemProps = {
  item: ParsedItem;
  isOpen: boolean;

  /**
   * Moved under "More", still rendered for measuring
   */
  isHidden: boolean;
  offset?: number;
  ids: MegaNavIds;
  toggleLabel: string;
  onToggle: (id: string) => void;
  hoverHandlers: ReturnType<typeof useOpenState>["hoverHandlers"];
};

const MegaNavBarItem = ({
  item,
  isOpen,
  isHidden,
  offset,
  ids,
  toggleLabel,
  onToggle,
  hoverHandlers,
}: MegaNavBarItemProps) => {
  const { linkComponent: Link } = useMegaNav();
  const pointerType = useRef("mouse");

  const baseClass = `${prefix}--mega-nav`;
  const panelClass = `${prefix}--mega-nav-panel`;
  const hasPanel = item.panel.length > 0 && !isHidden;

  const handleClick = (event: MouseEvent) => {
    // On touch, the first tap opens the panel. Keyboard clicks have no detail
    if (
      hasPanel &&
      !isOpen &&
      event.detail > 0 &&
      pointerType.current === "touch"
    ) {
      event.preventDefault();
      onToggle(item.id);
    }
  };

  return (
    <li
      className={classNames(`${baseClass}__item`, {
        [`${baseClass}__item--open`]: isOpen,
        [`${baseClass}__item--hidden`]: isHidden,
      })}
      aria-hidden={isHidden || undefined}
      data-meganav-item
      {...(hasPanel ? hoverHandlers(item.id) : {})}
    >
      <Link
        className={`${baseClass}__link`}
        href={item.href}
        onPointerDown={(event: PointerEvent) => {
          pointerType.current = event.pointerType;
        }}
        onClick={handleClick}
      >
        {item.label}
      </Link>
      {hasPanel && (
        <>
          <button
            type="button"
            id={ids.toggle(item.id)}
            className={`${baseClass}__toggle`}
            aria-label={toggleLabel}
            aria-expanded={isOpen}
            aria-controls={ids.panel(item.id)}
            onClick={() => onToggle(item.id)}
          >
            <span className={`${baseClass}__toggle-icon`} />
          </button>
          <div
            id={ids.panel(item.id)}
            className={classNames(
              panelClass,
              `${panelClass}--columns-${item.panel.length}`
            )}
            style={isOpen ? { insetInlineStart: offset } : undefined}
            hidden={!isOpen}
          >
            {item.panel}
          </div>
        </>
      )}
    </li>
  );
};

export { MegaNavBarItem };
