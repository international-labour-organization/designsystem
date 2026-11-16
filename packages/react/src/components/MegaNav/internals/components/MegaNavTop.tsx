import classNames from "classnames";
import { ReactNode } from "react";

import { prefix } from "../../../../utils";
import { LanguageToggle } from "../../../LanguageToggle";

import { MegaNavProps } from "../../MegaNav.props";
import { useMegaNav } from "../utils/context";

type MegaNavBrandingLinkProps = {
  branding: MegaNavProps["branding"];
  children: ReactNode;
};

const MegaNavBrandingLink = ({
  branding,
  children,
}: MegaNavBrandingLinkProps) => {
  const { linkComponent: Link } = useMegaNav();

  if (!branding.href) return <>{children}</>;

  return (
    <Link href={branding.href} aria-label={branding.label}>
      {children}
    </Link>
  );
};

type MegaNavTopProps = Pick<MegaNavProps, "branding" | "widgets"> & {
  isClient: boolean;
};

const MegaNavTop = ({ branding, widgets, isClient }: MegaNavTopProps) => {
  const baseClass = `${prefix}--mega-nav`;
  const containerClass = `${baseClass}__container`;

  return (
    <div className={`${baseClass}__top`}>
      <div className={classNames(`${baseClass}__widgets`, containerClass)}>
        <span className={`${baseClass}__widgets-corner`} />
        <span className={`${baseClass}__widgets-bar`}>
          {widgets?.language && isClient && (
            <LanguageToggle theme="dark-blue" {...widgets.language} />
          )}
        </span>
      </div>
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
    </div>
  );
};

export { MegaNavBrandingLink, MegaNavTop };
