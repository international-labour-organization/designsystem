import { useCallback, useState } from "react";

import { useGlobalSettings } from "../../../hooks";
import { CompactMenuList } from "./CompactMenuList";
import { CompactDrawer } from "./CompactDrawer";
import { CompactLanguageList } from "./CompactLanguageList";
import { NavigationLink } from "../NavigationLink";
import { SubsiteNavCoreProps } from "../Navigation.props";

type CompactNavigationProps = {
  /**
   * Whether the navigation is open or not
   */
  isOpen: boolean;

  /**
   * The handler to call when the navigation is clicked
   */
  onClose?: () => void;

  navigationProps: Omit<SubsiteNavCoreProps, "type">;
};

const CompactNavigation = ({
  isOpen,
  navigationProps: {
    branding,
    menu: { items, labels },
    widgets,
  },
  onClose,
}: CompactNavigationProps) => {
  const { prefix } = useGlobalSettings();

  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const closeNested = useCallback(() => {
    setIsMoreOpen(false);
    setIsLanguageOpen(false);
  }, []);

  const baseClass = `${prefix}--nav-compact`;
  const isNested = isMoreOpen || isLanguageOpen;
  const facadeItems = items.slice(0, 5);
  const moreItems = items.slice(5);

  return (
    <CompactDrawer
      isOpen={isOpen}
      onClose={onClose}
      header={
        <div className={`${baseClass}__branding`}>
          <div className={`${baseClass}__logo`}>
            {branding.compactLogo || branding.logo}
          </div>
          <h3 className={`${baseClass}__name`}>{branding.name}</h3>
        </div>
      }
      widgets={
        <div className={`${baseClass}__widgets`}>
          {widgets?.search && (
            <a
              className={`${baseClass}__widgets-search`}
              href={widgets.search.url}
              aria-label="Search"
            >
              <span className={`${baseClass}__widgets-search__label`}>
                {widgets.search.label}
              </span>
              <span className={`${baseClass}__widgets-search__icon`} />
            </a>
          )}
          {widgets?.link && (
            <NavigationLink
              className={`${baseClass}__widgets-link`}
              href={widgets.link.href}
              aria-label={widgets.link.label}
              label={widgets.link.label}
            />
          )}
          {widgets?.language && (
            <button
              className={`${baseClass}__widgets-language`}
              onClick={() => setIsLanguageOpen(true)}
              aria-expanded={isLanguageOpen}
              aria-controls="language-list"
              aria-label="Select language"
            >
              <span className={`${baseClass}__widgets-language__label`}>
                {widgets.language.label}: {widgets.language.language}
              </span>
              <span className={`${baseClass}__widgets-language__icon`} />
            </button>
          )}
        </div>
      }
    >
      <CompactMenuList menu={facadeItems} />
      <button
        className={`${baseClass}__more`}
        onClick={() => setIsMoreOpen(true)}
        aria-expanded={isMoreOpen}
        aria-controls="more-items"
        aria-label="More items"
      >
        {labels.more}
        <span className={`${baseClass}__more__icon`} />
      </button>
      <CompactDrawer
        className={`${baseClass}__nested`}
        header={
          <button
            className={`${baseClass}__nested__header`}
            onClick={closeNested}
            aria-label="Back to menu"
          >
            <span className={`${baseClass}__nested__header__icon`} />
            {labels.backToMenu}
          </button>
        }
        widgets={
          <span className={`${baseClass}__nested__title`}>
            {isMoreOpen ? labels.more : widgets?.language?.label}
          </span>
        }
        isOpen={isNested}
        onClose={closeNested}
        aria-modal="true"
      >
        {isMoreOpen ? (
          <CompactMenuList menu={moreItems} id="more-items" />
        ) : (
          <CompactLanguageList
            selected={widgets?.language?.language || ""}
            options={widgets?.language?.options}
            id="language-list"
          />
        )}
      </CompactDrawer>
    </CompactDrawer>
  );
};

export { CompactNavigation };
