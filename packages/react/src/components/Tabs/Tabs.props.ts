import { ReactNode } from "react";
import { IconProps } from "../Icon/Icon.props";
import { ThemeTypes } from "../../types";

export interface TabsProps {
  /**
   * Specify the items inside a tab
   */
  items: TabItem[];

  /**
   * Specify the theme for the tabs
   */
  theme?: ThemeTypes;
}

export interface TabItem {
  icon?: IconProps;
  label: string;
  content: ReactNode;
}
