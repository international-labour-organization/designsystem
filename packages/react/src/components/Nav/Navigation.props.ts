import { ElementType, ReactNode } from "react";

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
