import { LinkListThemes } from "../../types";

export interface LinkProps {
  /**
   * Specify if this link should indent and have a triangle icon
   */
  indented?: boolean;

  /**
   * Specify the label for this link
   */
  label?: Required<string>;

  /**
   * Specify the url for this link
   */
  url?: Required<string>;
}

export interface LinkGroupProps {
  /**
   * Specify an optional headline for this link group
   */
  headline?: string;

  /**
   * Specify the links to be displayed in this link group
   */
  links?: Required<Array<LinkProps>>;
}

export interface LinkListProps {
  /**
   * Specify an optional className to be added to your Link List component.
   */
  className?: string;

  /**
   * Specify a headline for the the Link List
   */
  headline?: Required<string>;

  /**
   * Specify the links to be displayed in the Link List
   */
  linkgroup?: Required<Array<LinkGroupProps>>;

  /**
   * Specify the theme for the Link List
   */
  theme?: Required<LinkListThemes>;
}
