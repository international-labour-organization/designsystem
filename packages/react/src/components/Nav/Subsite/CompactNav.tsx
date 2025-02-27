import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { useBreakpoint, useGlobalSettings } from "../../../hooks";
import classNames from "classnames";
import { NavigationDropdown } from "../NavigationDropdown";
import { NavigationMenuGrid } from "../NavigationMenuGrid";
import { LanguageToggle } from "../../LanguageToggle";
import { CompactNavigation } from "../compact/CompactNavigation";
import { CompactNavProps } from "../Navigation.props";
import { NavigationLink } from "../NavigationLink";

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
    const { breakpoint } = useBreakpoint();
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isCompactOpen, setIsCompactOpen] = useState(false);

    const headerRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => headerRef.current as HTMLElement);

    useEffect(() => {
      const target = document.querySelector<HTMLDivElement>(
        `#ilo--language-toggle--context-menu`
      );
      if (!target) return;
    }, []);

    const baseClass = `${prefix}--subsite-nav-compact`;

    const isAboveXL = ["xl", "xxl"].includes(breakpoint || "md");
    const sliceIndex = isAboveXL ? 4 : 2;
    const facadeItems = items.slice(0, sliceIndex);
    const moreItems = items.slice(sliceIndex);

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
                {branding.logo}
              </div>
              <h3 className={`${baseClass}__branding-name`}>{branding.name}</h3>
            </div>
            <ul className={`${baseClass}__menu`}>
              {facadeItems.map((item) => (
                <li
                  key={item.label?.toString()}
                  className={`${baseClass}__menu-item`}
                >
                  <NavigationLink
                    {...item}
                    className={classNames({
                      [`${baseClass}__menu-link`]: true,
                      [`${baseClass}__menu-link--active`]: item.isActive,
                      [item.className || ""]: item.className,
                    })}
                  />
                </li>
              ))}
            </ul>
            {moreItems.length > 0 && (
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={classNames({
                  [`${baseClass}__menu-more`]: true,
                  [`${baseClass}__menu-more--open`]: isMoreOpen,
                })}
                aria-expanded={isMoreOpen}
                aria-haspopup="menu"
              >
                {labels.more}
                <span className={`${baseClass}__menu-more-icon`}></span>
              </button>
            )}
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
                {widgets.language && (
                  <div className={`${baseClass}__widget-bar-language`}>
                    <LanguageToggle
                      theme="dark"
                      {...widgets.language}
                      hideIcon={!isAboveXL}
                    >
                      Item 1
                    </LanguageToggle>
                  </div>
                )}
                {widgets.search && (
                  <NavigationLink
                    href={widgets.search.url}
                    className={`${baseClass}__widget-bar-search`}
                    label={widgets.search.label}
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
        <NavigationDropdown isOpen={isMoreOpen} navRef={headerRef}>
          <NavigationMenuGrid menu={moreItems} />
        </NavigationDropdown>
        <CompactNavigation
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
      </header>
    );
  }
);

export { CompactNav };
