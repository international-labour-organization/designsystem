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

  /**
   * Specify the default active tab
   */
  defaultActiveTab?: number;

  /**
   * Allows you to override the default tab behaviour and set the active tab programatically
   */
  activeTab?: number;
}

export interface TabItem {
  icon?: IconProps;
  label: string;
  content: ReactNode;
}
