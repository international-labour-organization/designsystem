import { useGlobalSettings } from "../../../hooks";
import { SubsiteNavProps } from "..";
import { useState } from "react";
import { CompactMenuList } from "./CompactMenuList";
import { CompactDrawer } from "./CompactDrawer";

type CompactNavigationProps = {
  /**
   * Whether the navigation is open or not
   */
  isOpen: boolean;

  /**
   * The handler to call when the navigation is clicked
   */
  onClose?: () => void;

  navigationProps: Omit<SubsiteNavProps, "type">;
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
  const [isLanguageOpen] = useState(false);

  const baseClass = `${prefix}--nav-compact`;
  // const isNested = isMoreOpen || isLanguageOpen;
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
            >
              <span className={`${baseClass}__widgets-search__label`}>
                {widgets.search.label}
              </span>
              <span className={`${baseClass}__widgets-search__icon`}></span>
            </a>
          )}
          {widgets?.link && (
            <a
              className={`${baseClass}__widgets-link`}
              href={widgets.link.handler as string}
            >
              {widgets.link.label}
            </a>
          )}
        </div>
      }
    >
      <CompactMenuList menu={facadeItems} />
      <button
        className={`${baseClass}__more`}
        onClick={() => setIsMoreOpen(true)}
      >
        {labels.more}
        <span className={`${baseClass}__more__icon`} />
      </button>
      <CompactDrawer
        className={`${baseClass}__nested`}
        header={
          <button
            className={`${baseClass}__nested__header`}
            onClick={() => setIsMoreOpen(false)}
          >
            <span className={`${baseClass}__nested__header__icon`} />
            {labels.backToMenu}
          </button>
        }
        widgets={
          <span className={`${baseClass}__nested__title`}>{labels.more}</span>
        }
        isOpen={isMoreOpen}
        onClose={() => setIsMoreOpen(false)}
      >
        <CompactMenuList menu={moreItems} />
      </CompactDrawer>
    </CompactDrawer>
  );
};

export { CompactNavigation };
