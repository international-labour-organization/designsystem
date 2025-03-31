import { ReactNode } from "react";
import { IconProps } from "../Icon/Icon.props";
import { ThemeTypes } from "../../types";

export interface TabsProps {
  /**
   * Specify the items inside a tab
   */
  items: TabItem[];

  /**
   * Give the component a `light` or `dark` theme
   */
  theme?: ThemeTypes;
  
  /**
   * Add an optional className to the Tabs
   */
  className?: string;
}

export interface TabItem {
  icon?: IconProps;
  label: string;
  content: ReactNode;
}
