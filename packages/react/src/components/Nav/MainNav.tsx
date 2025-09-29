import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import classNames from "classnames";

import { useGlobalSettings, useOutsideClick } from "../../hooks";
import { useNavSetup } from "./internals/hooks/useNavSetup";
import { MainNavProps } from "./Navigation.props";
import { LanguageToggle } from "../LanguageToggle";
import { NavigationDropdown } from "./internals/NavigationDropdown";
import { NavigationMenuGrid } from "./internals/NavigationMenuGrid";
import { MobileNavigation } from "./internals/mobile/MobileNavigation";
import { NavigationMenu } from "./internals/NavigationMenu";
import { SearchField } from "../SearchField";

const MainNav = forwardRef<HTMLElement, MainNavProps>(
  ({ branding, menu: { items, labels }, widgets }, ref) => {
    const { prefix } = useGlobalSettings();
    const {
      menu: { facade: facadeItems, more: moreItems },
      more: [isMoreOpen, setIsMoreOpen],
      mobile: [isCompactOpen, setIsCompactOpen],
      isDesktop: isAboveXL,
      ref: headerRef,
      isClient,
    } = useNavSetup({ menu: items, split: { desktop: 5, mobile: 5 } });
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchButtonRef = useRef<HTMLButtonElement>(null);
    const searchDropdownRef = useRef<HTMLDivElement>(null);

    useOutsideClick(searchButtonRef, () => {
      if (isSearchOpen) {
        setIsSearchOpen(false);
      }
    }, [searchDropdownRef]);
    useImperativeHandle(ref, () => headerRef.current as HTMLElement);

    const baseClass = `${prefix}--main-nav`;

    return (
      <header ref={headerRef} className={baseClass}>
        <div className={classNames(`${baseClass}-bg--dark`)}>
          <div
            className={classNames(
              `${baseClass}__widgets`,
              `${baseClass}__container`
            )}
          >
            <span className={`${baseClass}__widgets-bar-corner`}></span>
            <span className={`${baseClass}__widgets-bar`}>
              {widgets?.language && isClient && (
                <LanguageToggle
                  className={`${baseClass}__widgets-bar__language`}
                  hideIcon={!isAboveXL}
                  {...widgets.language}
                />
              )}
            </span>
          </div>
        </div>

        <div className={classNames(`${baseClass}-bg--dark`)}>
          <div
            className={classNames(
              `${baseClass}__branding`,
              `${baseClass}__container`
            )}
          >
            <div className={`${baseClass}__branding-main`}>
              <div
                className={`${baseClass}__branding-main__logo`}
                onClick={branding?.onClick}
                role="button"
                aria-label="Branding"
                tabIndex={0}
              >
                {branding.logo.main}
              </div>
            </div>
            <div className={`${baseClass}__branding-tag`}>
              <h4 className={`${baseClass}__branding-tag__main`}>
                {branding.tag?.main}
              </h4>
              {branding.tag?.sub && (
                <span className={`${baseClass}__branding-tag__sub`}>
                  {branding.tag?.sub}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className={classNames(`${baseClass}-bg--darker`)}>
          <nav
            className={classNames(
              `${baseClass}__nav`,
              `${baseClass}__container`
            )}
          >
            <div className={`${baseClass}__nav-mobile`}>
              <div
                className={`${baseClass}__nav-mobile__logo`}
                onClick={branding?.onClick}
                role="button"
                aria-label="Branding"
                tabIndex={0}
              >
                {branding.logo.mobile}
              </div>
            </div>
            {facadeItems && (
              <NavigationMenu
                light
                className={`${baseClass}__nav-menu`}
                menu={facadeItems}
                more={
                  moreItems.length
                    ? {
                        label: labels.more,
                        onClick: () => {
                          if (isSearchOpen) setIsSearchOpen(false);
                          setIsMoreOpen(!isMoreOpen);
                        },
                        isOpen: isMoreOpen,
                      }
                    : undefined
                }
              />
            )}
            {widgets?.search && (
              <button
                className={`${baseClass}__nav-search`}
                ref={searchButtonRef}
                onClick={() => {
                  if (isMoreOpen) setIsMoreOpen(false);

                  setIsSearchOpen(!isSearchOpen);
                }}
              >
                <span className={`${baseClass}__nav-search__icon`} />
              </button>
            )}
            <button
              className={`${baseClass}__nav-burger`}
              aria-label="Toggle navigation"
              aria-expanded={isCompactOpen}
              onClick={() => setIsCompactOpen(!isCompactOpen)}
            >
              <span className={`${baseClass}__nav-burger__icon`} />
            </button>
          </nav>
        </div>
        {moreItems && isClient && (
          <NavigationDropdown isOpen={isMoreOpen} navRef={headerRef}>
            <NavigationMenuGrid menu={moreItems} />
          </NavigationDropdown>
        )}
        <NavigationDropdown
          ref={searchDropdownRef}
          isOpen={isSearchOpen}
          navRef={headerRef}
          className={`${baseClass}__nav-search-dropdown`}
        >
          {widgets.search.field ? (
            <SearchField {...widgets.search.field} />
          ) : (
            widgets.search.component
          )}
        </NavigationDropdown>
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

export { MainNav };
