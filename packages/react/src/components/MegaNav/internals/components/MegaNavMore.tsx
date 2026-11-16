import classNames from "classnames";
import { Ref, useState } from "react";

import { prefix } from "../../../../utils";

import { MegaNavIds } from "../hooks/useIds";
import { useMegaNav } from "../utils/context";
import { ParsedItem } from "../utils/parser";

type MegaNavMoreProps = {
  items: ParsedItem[];
  isOpen: boolean;
  label: string;
  ids: MegaNavIds;
  onToggle: (id: string) => void;

  /**
   * Always rendered so its width can be measured
   */
  itemRef: Ref<HTMLLIElement>;
};

const MegaNavMore = ({
  items,
  isOpen,
  label,
  ids,
  onToggle,
  itemRef,
}: MegaNavMoreProps) => {
  const { linkComponent: Link } = useMegaNav();
  const [selected, setSelected] = useState<string | null>(null);

  const baseClass = `${prefix}--mega-nav`;
  const moreClass = `${prefix}--mega-nav-more`;
  const hasItems = items.length > 0;
  const withMain = items.filter((item) => item.main);
  const selectedItem =
    withMain.find((item) => item.id === selected) ?? withMain[0];

  return (
    <li
      ref={itemRef}
      className={classNames(`${baseClass}__item`, `${baseClass}__item--more`, {
        [`${baseClass}__item--hidden`]: !hasItems,
        [`${baseClass}__item--open`]: isOpen,
      })}
      aria-hidden={!hasItems || undefined}
    >
      <button
        type="button"
        id={ids.toggle("more")}
        className={`${baseClass}__more`}
        aria-expanded={isOpen}
        aria-controls={ids.panel("more")}
        onClick={() => onToggle("more")}
      >
        {label}
        <span className={`${baseClass}__more-icon`} />
      </button>
      {hasItems && (
        <div
          id={ids.panel("more")}
          className={classNames(`${prefix}--mega-nav-panel`, moreClass)}
          hidden={!isOpen}
        >
          <div className={`${moreClass}__items`}>
            <p className={`${moreClass}__title`}>{label}</p>
            <ul className={`${moreClass}__list`}>
              {items.map((item) => (
                <li key={item.id}>
                  {item.main ? (
                    <button
                      type="button"
                      className={classNames(`${moreClass}__entry`, {
                        [`${moreClass}__entry--selected`]:
                          item === selectedItem,
                      })}
                      aria-expanded={item === selectedItem}
                      aria-controls={ids.panel("more-main")}
                      onClick={() => setSelected(item.id)}
                    >
                      {item.label}
                      <span className={`${moreClass}__entry-icon`} />
                    </button>
                  ) : (
                    <Link className={`${moreClass}__entry`} href={item.href}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div id={ids.panel("more-main")} className={`${moreClass}__main`}>
            {selectedItem?.main}
          </div>
        </div>
      )}
    </li>
  );
};

export { MegaNavMore };
