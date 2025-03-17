import { forwardRef, useImperativeHandle } from "react";

import { useGlobalSettings } from "../../../hooks";
import { NavigationDropdown } from "../NavigationDropdown";
import { NavigationMenuGrid } from "../NavigationMenuGrid";
import { LanguageToggle } from "../../LanguageToggle";
import { MobileNavigation } from "../mobile/MobileNavigation";
import { CompactNavProps } from "../Navigation.props";
import { NavigationLink } from "../NavigationLink";
import { useNavSetup } from "../useNavSetup";
import { NavigationMenu } from "../NavigationMenu";

const CompactNav = forwardRef<HTMLElement, CompactNavProps>(
  (
    {
      props: {
        branding,
        menu: { items, labels },
        widgets,
      },
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const {
      menu: { facade: facadeItems, more: moreItems },
      more: [isMoreOpen, setIsMoreOpen],
      mobile: [isCompactOpen, setIsCompactOpen],
      isDesktop: isAboveXL,
      ref: headerRef,
      isClient,
    } = useNavSetup({ menu: items, split: { desktop: 4, mobile: 2 } });

    useImperativeHandle(ref, () => headerRef.current as HTMLElement);

    const baseClass = `${prefix}--subsite-nav-compact`;

    return (
      <header ref={headerRef} className={baseClass}>
        <div className={`${baseClass}__container`}>
          <nav className={`${baseClass}__nav`}>
            <div
              className={`${baseClass}__branding`}
              onClick={branding?.onClick}
              role="button"
              aria-label="Branding"
              tabIndex={0}
            >
              <div className={`${baseClass}__branding-logo`}>
                {branding.logo.main}
              </div>
              <h3 className={`${baseClass}__branding-name`}>{branding.name}</h3>
            </div>
            <NavigationMenu
              className={`${baseClass}__menu`}
              menu={facadeItems}
              more={
                moreItems.length
                  ? {
                      label: labels.more,
                      onClick: () => setIsMoreOpen(!isMoreOpen),
                      isOpen: isMoreOpen,
                    }
                  : undefined
              }
            />
          </nav>
          {widgets && (
            <div className={`${baseClass}__widget-bar`}>
              <span className={`${baseClass}__widget-bar-corner`}></span>
              <div className={`${baseClass}__widget-bar-content`}>
                {widgets.link && (
                  <NavigationLink
                    className={`${baseClass}__widget-bar-link`}
                    href={widgets.link.href}
                    label={widgets.link.label}
                  />
                )}
                {widgets.language && isClient && (
                  <div className={`${baseClass}__widget-bar-language`}>
                    <LanguageToggle
                      theme="dark"
                      {...widgets.language}
                      hideIcon={!isAboveXL}
                    />
                  </div>
                )}
                {widgets.search && (
                  <NavigationLink
                    href={widgets.search.url}
                    className={`${baseClass}__widget-bar-search`}
                    label={""}
                    aria-label={widgets.search.label}
                  />
                )}
              </div>
            </div>
          )}
          <button
            className={`${baseClass}__burger`}
            aria-label="Toggle navigation"
            aria-expanded={isCompactOpen}
            onClick={() => setIsCompactOpen(!isCompactOpen)}
          >
            <span className={`${baseClass}__burger-icon`}></span>
          </button>
        </div>
        {moreItems && isClient && (
          <NavigationDropdown isOpen={isMoreOpen} navRef={headerRef}>
            <NavigationMenuGrid menu={moreItems} />
          </NavigationDropdown>
        )}
        {isClient && (
          <MobileNavigation
            isOpen={isCompactOpen}
            onClose={() => {
              setIsCompactOpen(false);
            }}
            navigationProps={{
              widgets,
              branding,
              menu: {
                items,
                labels,
              },
            }}
          />
        )}
      </header>
    );
  }
);

export { CompactNav };
