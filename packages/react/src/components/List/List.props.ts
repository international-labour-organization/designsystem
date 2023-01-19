import { ReactElement } from "react";
import { HeadingLevel, ListAlignment, ListOrder } from "../../types";
import { ListItemProps } from "./ListItem.props";

export interface ListProps {
  /**
   * Specify the content of your List.
   */
  children?: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];

  /**
   * Declare ordered, unordered or unstyled
   */
  ordered?: ListOrder;

  /**
   * Declare horizontal or default
   */
  alignment?: ListAlignment;

  /**
   * Specify an optional title
   */
  title?: string;

  /**
   * Specify an optional className to be added to your accordion.
   */
  className?: string;
}

export interface ListContextProps {
  activeItems: string[];
  alignment?: ListAlignment;
  ordered?: ListOrder;
  headingLevel?: HeadingLevel;
}
