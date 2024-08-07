import { ReactNode } from "react";

export interface ListItemProps {
  /**
   * Specify the id of the List item.
   */
  id: string;

  /**
   * Specify the content of your Button.
   */
  children: ReactNode;

  /**
   * Specify an optional className to be added to your Button.
   */
  className?: string;
}
