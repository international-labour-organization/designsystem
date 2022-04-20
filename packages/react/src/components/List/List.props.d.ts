import { MouseEvent } from "react";
export { default as ListItem } from "./ListItem";

export interface ListProps {
  /**
   * Specify the content of your List.
   */
  children: ReactElement<ListItem> | Array<ReactElement<ListItem>>;

  /**
   * Declare ordered or not
   */
  ordered?: boolean;

  /**
   * Declare horizontal or not
   */
   horizontal?: boolean;

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
}
