import { ReactNode } from "react";
import { IconProps } from "../Icon/Icon.props";
export interface TabsProps {
  /**
   * Specify the items inside a tab
   */
  items: Required<Array<TabItem>>;
}

export interface TabItem {
  icon?: IconProps;
  label: Required<string>;
  content: Required<ReactNode>;
}
