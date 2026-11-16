import { forwardRef } from "react";

import { asPart } from "./internals/utils/parts";
import { MegaNavProps } from "./MegaNav.props";
import { MegaNavColumn } from "./MegaNavColumn";
import { MegaNavItem } from "./MegaNavItem";
import { MegaNavLink } from "./MegaNavLink";
import { MegaNavLinks } from "./MegaNavLinks";
import { MegaNavMain } from "./MegaNavMain";
import {
  MegaNavBar,
  MegaNavBurger,
  MegaNavDrawer,
  MegaNavMenu,
  MegaNavSearch,
  MegaNavTop,
} from "./MegaNavPieces";
import { MegaNavRoot } from "./MegaNavRoot";

const MegaNavDefault = forwardRef<HTMLElement, MegaNavProps>(
  ({ children, ...props }, ref) => (
    <MegaNavRoot {...props} ref={ref} as="header" items={children}>
      <MegaNavTop />
      <MegaNavBar>
        <MegaNavMenu />
        <MegaNavSearch />
        <MegaNavBurger />
      </MegaNavBar>
      <MegaNavDrawer />
    </MegaNavRoot>
  )
);

MegaNavDefault.displayName = "MegaNav";

const MegaNav = Object.assign(MegaNavDefault, {
  Item: asPart("item", MegaNavItem),
  Column: asPart("column", MegaNavColumn),
  Main: asPart("main", MegaNavMain),
  Links: asPart("links", MegaNavLinks),
  Link: asPart("link", MegaNavLink),
  Root: MegaNavRoot,
  Top: MegaNavTop,
  Bar: MegaNavBar,
  Menu: MegaNavMenu,
  Search: MegaNavSearch,
  Burger: MegaNavBurger,
  Drawer: MegaNavDrawer,
});

export { MegaNav };
