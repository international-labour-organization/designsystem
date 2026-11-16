import { prefix } from "../../utils";

import { MegaNavLinksProps } from "./MegaNav.props";

const MegaNavLinks = ({ title, children }: MegaNavLinksProps) => {
  const baseClass = `${prefix}--mega-nav-links`;

  return (
    <div className={baseClass} data-meganav-role="links">
      {title && <p className={`${baseClass}__title`}>{title}</p>}
      <ul className={`${baseClass}__list`}>{children}</ul>
    </div>
  );
};

export { MegaNavLinks };
