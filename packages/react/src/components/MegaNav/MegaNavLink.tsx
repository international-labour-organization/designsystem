import { useContext, useId, useRef } from "react";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";
import { prefix } from "../../utils";

import {
  MegaNavItemContext,
  MegaNavLinksContext,
  useMegaNavConfig,
} from "./internals/utils/context";
import { MegaNavLinkProps } from "./MegaNav.props";

const baseClass = `${prefix}--mega-nav-links`;

const MegaNavLink = ({ href, label, target, children }: MegaNavLinkProps) => {
  const { linkComponent: Link } = useMegaNavConfig();
  // Outside an Item or Links the link renders without being collected
  const registerLink = useContext(MegaNavItemContext)?.registerLink;
  const links = useContext(MegaNavLinksContext);
  const key = useId();
  const ref = useRef<HTMLLIElement>(null);

  useIsomorphicLayoutEffect(() => {
    const group = links?.group;
    if (!registerLink || !group) return;
    return registerLink(
      key,
      { href, label, target, group, title: links?.title },
      ref.current
    );
  }, [registerLink, links, key, href, label, target]);

  return (
    <li ref={ref} className={`${baseClass}__item`}>
      <Link className={`${baseClass}__link`} href={href} target={target}>
        {children ?? label}
      </Link>
    </li>
  );
};

export { MegaNavLink };
