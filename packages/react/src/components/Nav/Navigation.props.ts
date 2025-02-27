import { ElementType, ReactNode } from "react";
import { LanguageToggleProps } from "../LanguageToggle";

export interface NavigationLinkProps {
  href?: string;

  target?: string;

  className?: string;

  label: ReactNode;

  isActive?: boolean;

  /**
   * The component to render the link
   */
  component?: ElementType;
}

enum SubsiteNavTypes {
  Compact = "compact",
  Complex = "complex",
}

interface SubsiteNavBranding {
  /**
   * The branding to display in the SubsiteNav like a primary logo
   */
  logo: ReactNode;

  /**
   * The branding to display in the SubsiteNav like a secondary logo, if not provided, the primary logo will be used
   */
  compactLogo?: ReactNode;

  /**
   * The site or product name
   */
  name: string;

  /**
   * The handler to call when the branding is clicked
   */
  onClick?: () => void;
}

export interface SubsiteNavCoreProps {
  branding: {
    /**
     * The branding to display in the SubsiteNav like a primary logo
     */
    logo: ReactNode;

    /**
     * The branding to display in the SubsiteNav like a secondary logo, if not provided, the primary logo will be used
     */
    compactLogo?: ReactNode;

    /**
     * The site or product name
     */
    name: string;

    /**
     * The handler to call when the branding is clicked
     */
    onClick?: () => void;
  };

  /**
   * The menu configuration
   */
  menu: {
    /**
     * The navigation items to display
     */
    items: NavigationLinkProps[];

    labels: {
      /**
       * The label to display for the more button
       */
      more?: string;

      /**
       * The label to display for the back to menu button
       */
      backToMenu?: string;
    };
  };

  /**
   * The widgets to display in the SubsiteNav
   */
  widgets?: {
    /**
     * The link inside the widget bar
     */
    link?: NavigationLinkProps;

    /**
     * The language toggler pros
     */
    language?: LanguageToggleProps & {
      /**
       * The label to display for the language toggle, used for mobile
       */
      label: string;
    };

    /**
     * The search bar props
     */
    search?: {
      type: "redirect"; // | "input";
      url: string;

      /**
       * The label to display for the search bar
       */
      label?: string;
    };
  };
}

export interface CompactNavProps {
  /**
   * The type of SubsiteNav to render
   */
  type?: "compact";

  props: SubsiteNavCoreProps;
}

export interface ComplexNavProps {
  /**
   * The type of SubsiteNav to render
   */
  type?: "complex";

  props: SubsiteNavCoreProps & {
    menu: {
      // The tagline
      tag?: {
        main: string;
        sub?: string;
      };
    };
  };
}

export type SubsiteNavProps = CompactNavProps | ComplexNavProps;
