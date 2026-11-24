import classNames from "classnames";
import { useId, useMemo, useRef } from "react";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";
import { prefix } from "../../utils";

import {
  MegaNavCollectedGroup,
  MegaNavRegisteredLink,
  useRegistry,
  toId,
} from "./internals/utils/collection";
import {
  MegaNavItemContext,
  MegaNavItemStatusContext,
  useMegaNavConfig,
  useMegaNavMenu,
  useMegaNavStatus,
} from "./internals/utils/context";
import { MegaNavItemProps } from "./MegaNav.props";

const baseClass = `${prefix}--mega-nav`;

const MegaNavItem = ({
  id,
  label,
  href,
  className,
  children,
}: MegaNavItemProps) => {
  const { registerItem, linkComponent: Link } = useMegaNavConfig();
  const { open } = useMegaNavStatus();
  const { hiddenKeys } = useMegaNavMenu();
  const key = useId();
  const ref = useRef<HTMLLIElement>(null);
  const [linkEntries, registerLink] = useRegistry<MegaNavRegisteredLink>();

  const itemId = id ?? (toId(label) || key);
  const groups = useMemo(() => {
    const byGroup = new Map<string, MegaNavCollectedGroup>();

    for (const { value } of linkEntries) {
      const { group, title, ...link } = value;
      const current = byGroup.get(group);
      if (current) current.links.push(link);
      else byGroup.set(group, { title, links: [link] });
    }

    return Array.from(byGroup.values());
  }, [linkEntries]);

  useIsomorphicLayoutEffect(
    () => registerItem(key, { id: itemId, label, href, groups }, ref.current),
    [registerItem, key, itemId, label, href, groups]
  );

  const isHidden = hiddenKeys.has(key);
  const isOpen = open === itemId && !isHidden;

  const item = useMemo(
    () => ({ id: itemId, label, href, registerLink }),
    [itemId, label, href, registerLink]
  );
  const status = useMemo(() => ({ isOpen, isHidden }), [isOpen, isHidden]);

  return (
    <MegaNavItemContext.Provider value={item}>
      <MegaNavItemStatusContext.Provider value={status}>
        <li
          ref={ref}
          className={classNames(`${baseClass}__item`, className, {
            [`${baseClass}__item--open`]: isOpen,
            [`${baseClass}__item--hidden`]: isHidden,
          })}
          aria-hidden={isHidden || undefined}
          data-meganav-item
        >
          {children ?? (
            <Link className={`${baseClass}__link`} href={href}>
              {label}
            </Link>
          )}
        </li>
      </MegaNavItemStatusContext.Provider>
    </MegaNavItemContext.Provider>
  );
};

export { MegaNavItem };
