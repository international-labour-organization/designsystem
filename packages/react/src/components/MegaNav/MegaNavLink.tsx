import { prefix } from "../../utils";

import { useMegaNav } from "./internals/utils/context";
import { MegaNavLinkProps } from "./MegaNav.props";

const MegaNavLink = ({ href, target, children }: MegaNavLinkProps) => {
  const { linkComponent: Link } = useMegaNav();
  const baseClass = `${prefix}--mega-nav-links`;

  return (
    <li className={`${baseClass}__item`}>
      <Link className={`${baseClass}__link`} href={href} target={target}>
        {children}
      </Link>
    </li>
  );
};

export { MegaNavLink };
