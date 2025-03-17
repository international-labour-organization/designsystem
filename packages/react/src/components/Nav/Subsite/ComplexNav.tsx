import { forwardRef, useImperativeHandle } from "react";
import classNames from "classnames";

import { useGlobalSettings } from "../../../hooks";
import { NavigationDropdown } from "../NavigationDropdown";
import { NavigationMenuGrid } from "../NavigationMenuGrid";
import { LanguageToggle } from "../../LanguageToggle";
import { MobileNavigation } from "../mobile/MobileNavigation";
import { ComplexNavProps } from "../Navigation.props";
import { NavigationLink } from "../NavigationLink";
import { useNavSetup } from "../useNavSetup";
import { NavigationMenu } from "../NavigationMenu";

const ComplexNav = forwardRef<HTMLElement, ComplexNavProps>(
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
    } = useNavSetup({ menu: items, split: { desktop: 6, mobile: 5 } });

    useImperativeHandle(ref, () => headerRef.current as HTMLElement);

    const baseClass = `${prefix}--subsite-nav-complex`;
    return (
      <header ref={headerRef} className={baseClass}>
        <div className={classNames(`${baseClass}-bg--light`)}>
          <div
            className={classNames(
              `${baseClass}__widgets`,
              `${baseClass}__container`
            )}
          >
            <span className={`${baseClass}__widgets-bar-corner`}></span>
            <span className={`${baseClass}__widgets-bar`}>
              {widgets?.link && (
                <NavigationLink
                  href={widgets.link.href}
                  label={widgets.link.label}
                  className={`${baseClass}__widgets-bar__link`}
                />
              )}
              {widgets?.language && isClient && (
                <LanguageToggle
                  className={`${baseClass}__widgets-bar__language`}
                  {...widgets.language}
                  hideIcon={!isAboveXL}
                />
              )}
            </span>
          </div>
        </div>

        <div className={classNames(`${baseClass}-bg--light`)}>
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
              <h3 className={`${baseClass}__branding-main__name`}>
                {branding.name}
              </h3>
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
        <div className={classNames(`${baseClass}-bg--dark`)}>
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
              <h3 className={`${baseClass}__nav-mobile__name`}>
                {branding.name}
              </h3>
            </div>
            {facadeItems && (
              <NavigationMenu
                className={`${baseClass}__nav-menu`}
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
            )}
            {widgets?.search && (
              <a
                className={`${baseClass}__nav-search`}
                href={widgets.search.url}
                aria-label={widgets.search.label}
              >
                <span className={`${baseClass}__nav-search__icon`} />
              </a>
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

export { ComplexNav };
