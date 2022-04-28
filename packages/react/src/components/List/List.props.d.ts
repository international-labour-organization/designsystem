export { default as ListItem } from "./ListItem";
import { listAlignment, listOrder } from "../../types";

export interface ListProps {
  /**
   * Specify the content of your List.
   */
  children: ReactElement<ListItem> | Array<ReactElement<ListItem>>;

  /**
   * Declare ordered, unordered or unstyled
   */
  ordered?: listOrder;

  /**
   * Declare horizontal or default
   */
  alignment?: listAlignment;

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
  alignment?: listAlignment;
  ordered?: listOrder;
  headingLevel?: headingLevel;
}
