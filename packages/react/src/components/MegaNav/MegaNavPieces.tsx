import classNames from "classnames";

import { prefix } from "../../utils";

import { MegaNavBarItem } from "./internals/components/MegaNavBarItem";
import { MegaNavMobile } from "./internals/components/MegaNavMobile";
import { MegaNavMore } from "./internals/components/MegaNavMore";
import { MegaNavSearchPanel } from "./internals/components/MegaNavSearch";
import {
  MegaNavBrandingLink,
  MegaNavTopContent,
} from "./internals/components/MegaNavTop";
import { useOverflow } from "./internals/hooks/useOverflow";
import { usePanelOffset } from "./internals/hooks/usePanelOffset";
import { useMegaNav } from "./internals/utils/context";
import { MegaNavBarProps, MegaNavPieceProps } from "./MegaNav.props";

const baseClass = `${prefix}--mega-nav`;

// Space in px kept free between the last item and the search button
const MORE_GAP = 128;

const MegaNavTop = ({ className }: MegaNavPieceProps) => {
  const { branding, widgets, isClient } = useMegaNav();

  return (
    <MegaNavTopContent
      className={className}
      branding={branding}
      widgets={widgets}
      isClient={isClient}
    />
  );
};

const MegaNavBar = ({ className, children }: MegaNavBarProps) => {
  const { branding } = useMegaNav();

  return (
    <div className={classNames(`${baseClass}__bar`, className)}>
      <div
        className={classNames(`${baseClass}__nav`, `${baseClass}__container`)}
      >
        {branding && (
          <div className={`${baseClass}__mobile-logo`}>
            <MegaNavBrandingLink branding={branding}>
              {branding.logo.mobile || branding.logo.main}
            </MegaNavBrandingLink>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

const MegaNavMenu = ({ className }: MegaNavPieceProps) => {
  const {
    items,
    open,
    toggle,
    hoverHandlers,
    ids,
    labels,
    isDesktop,
    isClient,
  } = useMegaNav();

  const { containerRef, listRef, moreRef, visibleCount } = useOverflow({
    count: items.length,
    gap: MORE_GAP,
    enabled: isDesktop && isClient,
  });

  // An item that moved under "More" can't stay open in the bar
  const openItem = items
    .slice(0, visibleCount)
    .find((item) => item.id === open && item.panel.length > 0);
  const offset = usePanelOffset(
    openItem && ids.panel(openItem.id),
    visibleCount
  );

  return (
    <nav
      ref={containerRef}
      className={classNames(`${baseClass}__menu`, className)}
      aria-label={labels.nav}
    >
      <ul className={`${baseClass}__list`} ref={listRef}>
        {items.map((item, index) => (
          <MegaNavBarItem
            key={item.id}
            item={item}
            isOpen={item === openItem}
            isHidden={index >= visibleCount}
            offset={offset}
            ids={ids}
            toggleLabel={labels.toggle(item.label)}
            onToggle={toggle}
            hoverHandlers={hoverHandlers}
          />
        ))}
        <MegaNavMore
          itemRef={moreRef}
          items={items.slice(visibleCount)}
          isOpen={open === "more"}
          label={labels.more}
          ids={ids}
          onToggle={toggle}
        />
      </ul>
    </nav>
  );
};

const MegaNavSearch = ({ className }: MegaNavPieceProps) => {
  const { widgets, open, toggle, ids, labels } = useMegaNav();

  if (!widgets?.search) return null;

  return (
    <MegaNavSearchPanel
      className={className}
      search={widgets.search}
      isOpen={open === "search"}
      label={labels.search}
      ids={ids}
      onToggle={toggle}
    />
  );
};

const MegaNavBurger = ({ className }: MegaNavPieceProps) => {
  const { labels, isDrawerOpen, setDrawerOpen } = useMegaNav();

  return (
    <button
      type="button"
      className={classNames(`${baseClass}__burger`, className)}
      aria-label={labels.menu}
      aria-expanded={isDrawerOpen}
      onClick={() => setDrawerOpen(true)}
    >
      <span className={`${baseClass}__burger-icon`} />
    </button>
  );
};

const MegaNavDrawer = () => {
  const {
    items,
    branding,
    widgets,
    labels,
    isDesktop,
    isClient,
    isDrawerOpen,
    setDrawerOpen,
  } = useMegaNav();

  if (!isClient || isDesktop) return null;

  return (
    <MegaNavMobile
      isOpen={isDrawerOpen}
      onClose={() => setDrawerOpen(false)}
      items={items}
      branding={branding}
      widgets={widgets}
      labels={labels}
    />
  );
};

export {
  MegaNavBar,
  MegaNavBurger,
  MegaNavDrawer,
  MegaNavMenu,
  MegaNavSearch,
  MegaNavTop,
};
