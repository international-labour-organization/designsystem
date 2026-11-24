import { ElementType, ReactNode } from "react";

import { LanguageToggleProps } from "../LanguageToggle";
import { SearchFieldProps } from "../SearchField/SearchField.props";

export interface MegaNavLabels {
  /**
   * Accessible name of the navigation landmark
   */
  nav?: string;

  /**
   * Label of the "More" button holding the items that don't fit the bar
   */
  more?: string;

  /**
   * Accessible name of the burger button
   */
  menu?: string;

  /**
   * Label of the back button in the mobile drawer
   */
  back?: string;

  /**
   * Accessible name of the close buttons
   */
  close?: string;

  /**
   * Label of the link to the item's own page in the mobile drawer
   */
  overview?: string;

  /**
   * Accessible name of the search button
   */
  search?: string;

  /**
   * Accessible name of the button that toggles an item's panel
   */
  toggle?: (label: string) => string;
}

/**
 * A SearchField built from its props, or any search component
 */
export type MegaNavSearchConfig =
  | { field: SearchFieldProps; component?: never }
  | { field?: never; component: ReactNode };

interface MegaNavConfig {
  branding?: {
    /**
     * Where the logo links to
     */
    href?: string;

    /**
     * Accessible name of the logo link
     */
    label?: string;

    logo: {
      /**
       * The logo displayed on desktop
       */
      main: ReactNode;

      /**
       * The logo displayed in the mobile bar
       */
      mobile?: ReactNode;

      /**
       * The logo displayed in the mobile drawer
       */
      drawer?: ReactNode;
    };

    /**
     * The tagline displayed next to the logo on desktop
     */
    tag?: {
      main: string;
      sub?: string;
    };
  };

  widgets?: {
    /**
     * The language toggle, label is used in the mobile drawer
     */
    language?: LanguageToggleProps & {
      label: string;
    };

    /**
     * The search field, rendered in a panel on desktop and inline in the mobile drawer
     */
    search?: MegaNavSearchConfig;
  };

  /**
   * The labels used by the navigation
   */
  labels?: MegaNavLabels;

  /**
   * The component used to render every link, e.g. a router link
   */
  linkComponent?: ElementType;

  /**
   * The delay in ms before a panel opens or closes on hover, 100 and 300 by
   * default. Moving to another item while a panel is open doesn't wait
   */
  hoverDelay?: {
    open?: number;
    close?: number;
  };

  className?: string;
}

export interface MegaNavProps extends MegaNavConfig {
  branding: NonNullable<MegaNavConfig["branding"]>;

  /**
   * The navigation items, MegaNav.Item, rendered in MegaNav.Menu
   */
  children: ReactNode;
}

export interface MegaNavRootProps extends MegaNavConfig {
  /**
   * The element rendered around the pieces, "div" by default
   */
  as?: ElementType;

  /**
   * The pieces (MegaNav.Top, Bar, Menu, Search, Burger, Drawer) and any other
   * content
   */
  children: ReactNode;
}

export interface MegaNavPieceProps {
  className?: string;
}

export interface MegaNavContainerProps extends MegaNavPieceProps {
  /**
   * Content of your own, aligned with the bar and the panels
   */
  children: ReactNode;
}

export interface MegaNavBarProps extends MegaNavPieceProps {
  /**
   * Where the branding logo is shown in the bar: below desktop only ("mobile",
   * the default), on every screen ("always"), or not at all ("none")
   */
  logo?: "mobile" | "always" | "none";

  /**
   * Usually MegaNav.Menu, MegaNav.Search and MegaNav.Burger, plus any other content
   */
  children: ReactNode;
}

export interface MegaNavMenuProps extends MegaNavPieceProps {
  /**
   * The navigation items, MegaNav.Item
   */
  children: ReactNode;
}

export interface MegaNavItemProps {
  /**
   * Id to address the item with toggle() and open. Made from the label by
   * default; "more" and "search" are reserved
   */
  id?: string;

  /**
   * The item's name, shown by the default trigger, under "More" and on mobile
   */
  label: string;

  /**
   * The item's own page, its link under "More" and its overview on mobile
   */
  href: string;

  className?: string;

  /**
   * Usually MegaNav.Trigger and MegaNav.Panel. Without children the item is a
   * plain link. The MegaNav.Links inside are collected for "More" and mobile
   */
  children?: ReactNode;
}

export interface MegaNavTriggerProps {
  className?: string;

  /**
   * Content of a custom trigger button. Without it, the item's label as a
   * link and a toggle button
   */
  children?: ReactNode;
}

export interface MegaNavPanelProps {
  className?: string;

  /**
   * MegaNav.Column, up to three (two below xl), or any markup of your own
   */
  children: ReactNode;
}

export interface MegaNavColumnProps {
  className?: string;

  /**
   * Any content, e.g. MegaNav.Links, an introduction to the section or a
   * PromoCard
   */
  children: ReactNode;
}

export interface MegaNavLinksProps {
  /**
   * Shown on desktop and under "More"
   */
  title?: string;

  className?: string;

  /**
   * MegaNav.Link
   */
  children: ReactNode;
}

export interface MegaNavLinkProps {
  href: string;

  /**
   * The link's text, also used under "More" and on mobile
   */
  label: string;

  target?: string;

  /**
   * Content shown in the panel instead of the label, such as a badge
   */
  children?: ReactNode;
}
