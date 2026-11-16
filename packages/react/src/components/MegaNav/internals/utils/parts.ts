import { isValidElement, ReactElement, ReactNode } from "react";

import {
  MegaNavColumnProps,
  MegaNavItemProps,
  MegaNavLinkProps,
  MegaNavLinksProps,
  MegaNavMainProps,
} from "../../MegaNav.props";

interface PartProps {
  item: MegaNavItemProps;
  main: MegaNavMainProps;
  column: MegaNavColumnProps;
  links: MegaNavLinksProps;
  link: MegaNavLinkProps;
}

type Part = keyof PartProps;

// Symbol.for is shared across copies of the package, unlike component identity
const PART = Symbol.for("@ilo-org/react/mega-nav-part");

function asPart<C extends object>(part: Part, component: C): C {
  return Object.assign(component, { [PART]: part });
}

function isPart<P extends Part>(
  node: ReactNode,
  part: P
): node is ReactElement<PartProps[P]> {
  return (
    isValidElement(node) && (node.type as { [PART]?: Part })[PART] === part
  );
}

export { asPart, isPart };
