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
  component: Required<string>;
  componentData: Required<any>;
}
