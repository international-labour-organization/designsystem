import { ReactNode, useState } from "react";

import { prefix } from "../../../../utils";
import { MobileDrawer } from "../../../Nav/internals/mobile/MobileDrawer";
import { MobileLanguageList } from "../../../Nav/internals/mobile/MobileLanguageList";

import {
  MegaNavLabels,
  MegaNavProps,
  MegaNavRootProps,
} from "../../MegaNav.props";
import { useMegaNav } from "../utils/context";
import { ParsedItem } from "../utils/parser";
import { MegaNavSearchWidget } from "./MegaNavSearch";

const menuClass = `${prefix}--nav-mobile-menu`;

type MobileLinkProps = {
  href: string;
  target?: string;
  children: ReactNode;
};

const MobileLink = ({ href, target, children }: MobileLinkProps) => {
  const { linkComponent: Link } = useMegaNav();

  return (
    <li className={`${menuClass}__item`}>
      <Link className={`${menuClass}__link`} href={href} target={target}>
        {children}
      </Link>
    </li>
  );
};

type MegaNavMobileProps = {
  isOpen: boolean;
  onClose: () => void;
  items: ParsedItem[];
  branding: MegaNavRootProps["branding"];
  widgets: MegaNavProps["widgets"];
  labels: Required<MegaNavLabels>;
};

const MegaNavMobile = ({
  isOpen,
  onClose,
  items,
  branding,
  widgets,
  labels,
}: MegaNavMobileProps) => {
  const [nested, setNested] = useState<string | null>(null);

  const baseClass = `${prefix}--nav-mobile`;
  const nestedItem = items.find((item) => item.id === nested);
  const closeNested = () => setNested(null);
  const close = () => {
    setNested(null);
    onClose();
  };

  return (
    <MobileDrawer
      isOpen={isOpen}
      isNestedOpen={!!nested}
      onClose={close}
      closeLabel={labels.close}
      header={
        <div className={`${baseClass}__branding`}>
          <div className={`${baseClass}__logo`}>
            {branding?.logo.drawer || branding?.logo.main}
          </div>
        </div>
      }
      widgets={
        <div className={`${baseClass}__widgets`}>
          {widgets?.search && (
            <div className={`${baseClass}__widgets-search-input`}>
              <MegaNavSearchWidget search={widgets.search} />
            </div>
          )}
          {widgets?.language && (
            <button
              type="button"
              className={`${baseClass}__widgets-language`}
              onClick={() => setNested("language")}
              aria-expanded={nested === "language"}
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
      <ul className={menuClass}>
        {items.map((item) =>
          item.links.length > 0 ? (
            <li key={item.id}>
              <button
                type="button"
                className={`${baseClass}__more`}
                onClick={() => setNested(item.id)}
                aria-expanded={nested === item.id}
              >
                {item.label}
                <span className={`${baseClass}__more__icon`} />
              </button>
            </li>
          ) : (
            <MobileLink key={item.id} href={item.href}>
              {item.label}
            </MobileLink>
          )
        )}
      </ul>
      <MobileDrawer
        className={`${baseClass}__nested`}
        isOpen={!!nested}
        onClose={closeNested}
        closeLabel={labels.close}
        header={
          <button
            type="button"
            className={`${baseClass}__nested__header`}
            onClick={closeNested}
          >
            <span className={`${baseClass}__nested__header__icon`} />
            {labels.back}
          </button>
        }
        widgets={
          <span className={`${baseClass}__nested__title`}>
            {nested === "language"
              ? widgets?.language?.label
              : nestedItem?.label}
          </span>
        }
      >
        {nested === "language" && widgets?.language && (
          <MobileLanguageList
            selected={widgets.language.language}
            options={widgets.language.options}
          />
        )}
        {nestedItem && (
          <>
            <ul className={menuClass}>
              <MobileLink href={nestedItem.href}>{labels.overview}</MobileLink>
            </ul>
            {nestedItem.links.map((group, index) => (
              <ul key={index} className={menuClass}>
                {group.map((link, linkIndex) => (
                  <MobileLink
                    key={linkIndex}
                    href={link.href}
                    target={link.target}
                  >
                    {link.label}
                  </MobileLink>
                ))}
              </ul>
            ))}
          </>
        )}
      </MobileDrawer>
    </MobileDrawer>
  );
};

export { MegaNavMobile };
