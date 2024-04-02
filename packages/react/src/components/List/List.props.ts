import { ReactElement } from "react";
import { ListItemProps } from "./ListItem.props";

export interface ListProps {
  /**
   * Specify the content of your List.
   */
  children?: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];

  /**
   * Declare ordered, unordered or unstyled
   */
  ordered?: "unordered" | "ordered" | "unstyled";

  /**
   * Declare horizontal or default
   */
  alignment?: "default" | "horizontal";

  /**
   * Specify an optional title
   */
  title?: string;

  /**
   * Specify an optional className to be added to your accordion.
   */
  className?: string;
}
