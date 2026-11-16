import classNames from "classnames";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { useBreakpoint } from "../../hooks";
import { prefix } from "../../utils";

import { MegaNavBarItem } from "./internals/components/MegaNavBarItem";
import { MegaNavMobile } from "./internals/components/MegaNavMobile";
import { MegaNavMore } from "./internals/components/MegaNavMore";
import { MegaNavSearch } from "./internals/components/MegaNavSearch";
import {
  MegaNavBrandingLink,
  MegaNavTop,
} from "./internals/components/MegaNavTop";
import { useIds } from "./internals/hooks/useIds";
import { useOpenState } from "./internals/hooks/useOpenState";
import { useOverflow } from "./internals/hooks/useOverflow";
import { usePanelOffset } from "./internals/hooks/usePanelOffset";
import { MegaNavContext } from "./internals/utils/context";
import { parseItems } from "./internals/utils/parser";
import { asPart } from "./internals/utils/parts";
import { MegaNavLabels, MegaNavProps } from "./MegaNav.props";
import { MegaNavColumn } from "./MegaNavColumn";
import { MegaNavItem } from "./MegaNavItem";
import { MegaNavLink } from "./MegaNavLink";
import { MegaNavLinks } from "./MegaNavLinks";
import { MegaNavMain } from "./MegaNavMain";

const DEFAULT_LABELS: Required<MegaNavLabels> = {
  nav: "Main",
  more: "More",
  menu: "Open navigation",
  back: "Menu home",
  close: "Close navigation",
  overview: "Overview",
  search: "Search",
  toggle: (label) => `${label} submenu`,
};

// Space in px kept free between the last item and the search button
const MORE_GAP = 128;

const DESKTOP_BREAKPOINTS = ["lg", "xl", "xxl"];

const MegaNavRoot = forwardRef<HTMLElement, MegaNavProps>(
  (
    {
      branding,
      widgets,
      labels: customLabels,
      linkComponent = "a",
      hoverDelay,
      className,
      children,
    },
    ref
  ) => {
    const { breakpoint } = useBreakpoint();
    const ids = useIds();
    const headerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useImperativeHandle(ref, () => headerRef.current as HTMLElement);

    const labels = { ...DEFAULT_LABELS, ...customLabels };
    const isDesktop = DESKTOP_BREAKPOINTS.includes(breakpoint ?? "xl");

    const items = useMemo(() => parseItems(children), [children]);

    const { open, toggle, close, hoverHandlers } = useOpenState({
      rootRef: headerRef,
      toggleId: ids.toggle,
      delay: {
        open: hoverDelay?.open ?? 100,
        close: hoverDelay?.close ?? 300,
      },
    });

    const { containerRef, listRef, moreRef, visibleCount } = useOverflow({
      count: items.length,
      gap: MORE_GAP,
      enabled: isDesktop && isClient,
    });

    const overflowItems = items.slice(visibleCount);

    // An item that moved under "More" can't stay open in the bar
    const openItem = items
      .slice(0, visibleCount)
      .find((item) => item.id === open && item.panel.length > 0);
    const panelOffset = usePanelOffset(
      navRef,
      openItem && ids.panel(openItem.id),
      visibleCount
    );

    const context = useMemo(() => ({ linkComponent }), [linkComponent]);

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
      close();
      setIsDrawerOpen(false);
    }, [isDesktop, close]);

    const baseClass = `${prefix}--mega-nav`;

    return (
      <MegaNavContext.Provider value={context}>
        <header ref={headerRef} className={classNames(baseClass, className)}>
          <MegaNavTop
            branding={branding}
            widgets={widgets}
            isClient={isClient}
          />

          <div className={`${baseClass}__bar`}>
            <nav
              ref={navRef}
              className={classNames(
                `${baseClass}__nav`,
                `${baseClass}__container`
              )}
              aria-label={labels.nav}
            >
              <div className={`${baseClass}__mobile-logo`}>
                <MegaNavBrandingLink branding={branding}>
                  {branding.logo.mobile || branding.logo.main}
                </MegaNavBrandingLink>
              </div>

              <div className={`${baseClass}__menu`} ref={containerRef}>
                <ul className={`${baseClass}__list`} ref={listRef}>
                  {items.map((item, index) => (
                    <MegaNavBarItem
                      key={item.id}
                      item={item}
                      isOpen={item === openItem}
                      isHidden={index >= visibleCount}
                      offset={panelOffset}
                      ids={ids}
                      toggleLabel={labels.toggle(item.label)}
                      onToggle={toggle}
                      hoverHandlers={hoverHandlers}
                    />
                  ))}
                  <MegaNavMore
                    itemRef={moreRef}
                    items={overflowItems}
                    isOpen={open === "more"}
                    label={labels.more}
                    ids={ids}
                    onToggle={toggle}
                  />
                </ul>
              </div>

              {widgets?.search && (
                <MegaNavSearch
                  search={widgets.search}
                  isOpen={open === "search"}
                  label={labels.search}
                  ids={ids}
                  onToggle={toggle}
                />
              )}

              <button
                type="button"
                className={`${baseClass}__burger`}
                aria-label={labels.menu}
                aria-expanded={isDrawerOpen}
                onClick={() => setIsDrawerOpen(true)}
              >
                <span className={`${baseClass}__burger-icon`} />
              </button>
            </nav>
          </div>

          {isClient && !isDesktop && (
            <MegaNavMobile
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              items={items}
              branding={branding}
              widgets={widgets}
              labels={labels}
            />
          )}
        </header>
      </MegaNavContext.Provider>
    );
  }
);

MegaNavRoot.displayName = "MegaNav";

const MegaNav = Object.assign(MegaNavRoot, {
  Item: asPart("item", MegaNavItem),
  Column: asPart("column", MegaNavColumn),
  Main: asPart("main", MegaNavMain),
  Links: asPart("links", MegaNavLinks),
  Link: asPart("link", MegaNavLink),
});

export { MegaNav };
