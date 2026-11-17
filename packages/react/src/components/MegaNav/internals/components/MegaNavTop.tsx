import classNames from "classnames";
import { ReactNode } from "react";

import { prefix } from "../../../../utils";
import { LanguageToggle } from "../../../LanguageToggle";

import { MegaNavPieceProps, MegaNavProps } from "../../MegaNav.props";
import { useMegaNavConfig, useMegaNavStatus } from "../utils/context";

type MegaNavBrandingLinkProps = {
  branding: MegaNavProps["branding"];
  children: ReactNode;
};

const MegaNavBrandingLink = ({
  branding,
  children,
}: MegaNavBrandingLinkProps) => {
  const { linkComponent: Link } = useMegaNavConfig();

  if (!branding.href) return <>{children}</>;

  return (
    <Link href={branding.href} aria-label={branding.label}>
      {children}
    </Link>
  );
};

const MegaNavTop = ({ className }: MegaNavPieceProps) => {
  const { branding, widgets } = useMegaNavConfig();
  const { isClient } = useMegaNavStatus();
  const baseClass = `${prefix}--mega-nav`;
  const containerClass = `${baseClass}__container`;

  return (
    <div className={classNames(`${baseClass}__top`, className)}>
      <div className={classNames(`${baseClass}__widgets`, containerClass)}>
        <span className={`${baseClass}__widgets-corner`} />
        <span className={`${baseClass}__widgets-bar`}>
          {widgets?.language && isClient && (
            <LanguageToggle theme="dark-blue" {...widgets.language} />
          )}
        </span>
      </div>
      {branding && (
        <div className={classNames(`${baseClass}__branding`, containerClass)}>
          <div className={`${baseClass}__branding-logo`}>
            <MegaNavBrandingLink branding={branding}>
              {branding.logo.main}
            </MegaNavBrandingLink>
          </div>
          {branding.tag && (
            <div className={`${baseClass}__branding-tag`}>
              <p className={`${baseClass}__branding-tag__main`}>
                {branding.tag.main}
              </p>
              {branding.tag.sub && (
                <span className={`${baseClass}__branding-tag__sub`}>
                  {branding.tag.sub}
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { MegaNavBrandingLink, MegaNavTop };
