import classNames from "classnames";
import { Ref, useRef, useState } from "react";

import { prefix } from "../../../../utils";

import { usePanelOffset } from "../hooks/usePanelOffset";
import { MegaNavCollectedItem } from "../utils/collection";
import { useMegaNavConfig, useMegaNavStatus } from "../utils/context";

type MegaNavMoreProps = {
  items: MegaNavCollectedItem[];
  itemRef: Ref<HTMLLIElement>;
};

const MegaNavMore = ({ items, itemRef }: MegaNavMoreProps) => {
  const { ids, labels, toggle, linkComponent: Link } = useMegaNavConfig();
  const { open } = useMegaNavStatus();
  const panelRef = useRef<HTMLDivElement>(null);
  const isOpen = open === "more";
  const style = usePanelOffset(panelRef, isOpen, items.length);
  const label = labels.more;
  const [selected, setSelected] = useState<string | null>(null);

  const baseClass = `${prefix}--mega-nav`;
  const moreClass = `${prefix}--mega-nav-more`;
  const linksClass = `${prefix}--mega-nav-links`;
  const hasItems = items.length > 0;
  const withLinks = items.filter((item) => item.groups.length > 0);
  const selectedItem =
    withLinks.find((item) => item.id === selected) ?? withLinks[0];

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
        onClick={() => toggle("more")}
      >
        {label}
        <span className={`${baseClass}__more-icon`} />
      </button>
      {hasItems && (
        <div
          ref={panelRef}
          id={ids.panel("more")}
          className={classNames(`${prefix}--mega-nav-panel`, moreClass)}
          style={style}
          hidden={!isOpen}
        >
          <div className={`${moreClass}__items`}>
            <p className={`${moreClass}__title`}>{label}</p>
            <ul className={`${moreClass}__list`}>
              {items.map((item) => (
                <li key={item.id}>
                  {item.groups.length > 0 ? (
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
          {selectedItem && (
            <div
              id={ids.panel("more-main")}
              className={classNames(
                `${moreClass}__main`,
                `${prefix}--mega-nav-column`
              )}
            >
              {selectedItem.groups.map((group, index) => (
                <div key={index} className={linksClass}>
                  {group.title && (
                    <p className={`${linksClass}__title`}>{group.title}</p>
                  )}
                  <ul className={`${linksClass}__list`}>
                    {group.links.map((link) => (
                      <li key={link.href} className={`${linksClass}__item`}>
                        <Link
                          className={`${linksClass}__link`}
                          href={link.href}
                          target={link.target}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export { MegaNavMore };
