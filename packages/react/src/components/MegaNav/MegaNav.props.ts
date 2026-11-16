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
   * The navigation items, MegaNav.Item
   */
  children: ReactNode;
}

export interface MegaNavRootProps extends MegaNavConfig {
  /**
   * The navigation items, MegaNav.Item
   */
  items: ReactNode;

  /**
   * The element rendered around the pieces, "div" by default
   */
  as?: ElementType;

  /**
   * The pieces (MegaNav.Top, Bar, Menu, Search, Burger, Drawer) and any other content
   */
  children: ReactNode;
}

export interface MegaNavPieceProps {
  className?: string;
}

export interface MegaNavBarProps extends MegaNavPieceProps {
  /**
   * Usually MegaNav.Menu, MegaNav.Search and MegaNav.Burger, plus any other content
   */
  children: ReactNode;
}

export interface MegaNavItemProps {
  /**
   * Optional stable id, used for the panel ids
   */
  id?: string;

  label: string;

  href: string;

  /**
   * MegaNav.Main and up to two MegaNav.Column, in any order.
   * Without children the item is a plain link. Without MegaNav.Main it's a
   * plain link in "More" and on mobile
   */
  children?: ReactNode;
}

export interface MegaNavColumnProps {
  className?: string;

  /**
   * Any content, e.g. an introduction to the section or a PromoCard
   */
  children: ReactNode;
}

export interface MegaNavMainProps {
  /**
   * MegaNav.Links and any other component. On mobile only the MegaNav.Links
   * written directly in it are shown
   */
  children: ReactNode;
}

export interface MegaNavLinksProps {
  title?: string;

  /**
   * MegaNav.Link
   */
  children: ReactNode;
}

export interface MegaNavLinkProps {
  href: string;

  target?: string;

  children: ReactNode;
}
