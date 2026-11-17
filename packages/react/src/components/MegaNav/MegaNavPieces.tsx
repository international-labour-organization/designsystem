import classNames from "classnames";
import { useMemo } from "react";

import { prefix } from "../../utils";

import { MegaNavMobile } from "./internals/components/MegaNavMobile";
import { MegaNavMore } from "./internals/components/MegaNavMore";
import { MegaNavSearch } from "./internals/components/MegaNavSearch";
import {
  MegaNavBrandingLink,
  MegaNavTop,
} from "./internals/components/MegaNavTop";
import { useOverflow } from "./internals/hooks/useOverflow";
import {
  MegaNavMenuContext,
  useMegaNavConfig,
  useMegaNavStatus,
} from "./internals/utils/context";
import {
  MegaNavBarProps,
  MegaNavContainerProps,
  MegaNavMenuProps,
  MegaNavPieceProps,
} from "./MegaNav.props";

const baseClass = `${prefix}--mega-nav`;

const MegaNavContainer = ({ className, children }: MegaNavContainerProps) => (
  <div className={classNames(`${baseClass}__container`, className)}>
    {children}
  </div>
);

const MegaNavBar = ({
  className,
  logo = "mobile",
  children,
}: MegaNavBarProps) => {
  const { branding } = useMegaNavConfig();

  return (
    <div className={classNames(`${baseClass}__bar`, className)}>
      <div
        className={classNames(`${baseClass}__nav`, `${baseClass}__container`)}
      >
        {branding && logo !== "none" && (
          <div
            className={classNames(`${baseClass}__mobile-logo`, {
              [`${baseClass}__mobile-logo--always`]: logo === "always",
            })}
          >
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

const MegaNavMenu = ({ className, children }: MegaNavMenuProps) => {
  const { labels } = useMegaNavConfig();
  const { items, itemKeys, isDesktop, isClient } = useMegaNavStatus();

  const { containerRef, listRef, moreRef, visibleCount } = useOverflow({
    count: items.length,
    enabled: isDesktop && isClient,
  });

  const menu = useMemo(
    () => ({ hiddenKeys: new Set(itemKeys.slice(visibleCount)) }),
    [itemKeys, visibleCount]
  );

  return (
    <nav
      ref={containerRef}
      className={classNames(`${baseClass}__menu`, className)}
      aria-label={labels.nav}
    >
      <ul className={`${baseClass}__list`} ref={listRef}>
        <MegaNavMenuContext.Provider value={menu}>
          {children}
        </MegaNavMenuContext.Provider>
        <MegaNavMore itemRef={moreRef} items={items.slice(visibleCount)} />
      </ul>
    </nav>
  );
};

const MegaNavBurger = ({ className }: MegaNavPieceProps) => {
  const { labels, setDrawerOpen } = useMegaNavConfig();
  const { isDrawerOpen } = useMegaNavStatus();

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

const MegaNavDrawer = ({ className }: MegaNavPieceProps) => {
  const { setDrawerOpen } = useMegaNavConfig();
  const { items, isDesktop, isClient, isDrawerOpen } = useMegaNavStatus();

  if (!isClient || isDesktop) return null;

  return (
    <MegaNavMobile
      className={className}
      isOpen={isDrawerOpen}
      onClose={() => setDrawerOpen(false)}
      items={items}
    />
  );
};

export {
  MegaNavBar,
  MegaNavBurger,
  MegaNavContainer,
  MegaNavDrawer,
  MegaNavMenu,
  MegaNavSearch,
  MegaNavTop,
};
