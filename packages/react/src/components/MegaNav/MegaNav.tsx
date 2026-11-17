import { forwardRef } from "react";

import { MegaNavProps } from "./MegaNav.props";
import { MegaNavColumn } from "./MegaNavColumn";
import { MegaNavItem } from "./MegaNavItem";
import { MegaNavLink } from "./MegaNavLink";
import { MegaNavLinks } from "./MegaNavLinks";
import { MegaNavPanel } from "./MegaNavPanel";
import {
  MegaNavBar,
  MegaNavBurger,
  MegaNavContainer,
  MegaNavDrawer,
  MegaNavMenu,
  MegaNavSearch,
  MegaNavTop,
} from "./MegaNavPieces";
import { MegaNavRoot } from "./MegaNavRoot";
import { MegaNavTrigger } from "./MegaNavTrigger";

const MegaNavDefault = forwardRef<HTMLElement, MegaNavProps>(
  ({ children, ...props }, ref) => (
    <MegaNavRoot {...props} ref={ref} as="header">
      <MegaNavTop />
      <MegaNavBar>
        <MegaNavMenu>{children}</MegaNavMenu>
        <MegaNavSearch />
        <MegaNavBurger />
      </MegaNavBar>
      <MegaNavDrawer />
    </MegaNavRoot>
  )
);

MegaNavDefault.displayName = "MegaNav";

const MegaNav = Object.assign(MegaNavDefault, {
  Root: MegaNavRoot,
  Top: MegaNavTop,
  Bar: MegaNavBar,
  Menu: MegaNavMenu,
  Item: MegaNavItem,
  Trigger: MegaNavTrigger,
  Panel: MegaNavPanel,
  Column: MegaNavColumn,
  Links: MegaNavLinks,
  Link: MegaNavLink,
  Search: MegaNavSearch,
  Burger: MegaNavBurger,
  Drawer: MegaNavDrawer,
  Container: MegaNavContainer,
});

export { MegaNav };
