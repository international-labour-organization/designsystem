import { ReactNode } from "react";

export interface TagProps {
  /**
   * Callback to onButtonClick event;
   */
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>, i: any) => void;

  /**
   * Specify the label for the tag
   */
  children: ReactNode;

  /**
   * The tag's unique id.
   */
  id: string;

  /**
   * Specify an optional className to be added to your Tag.
   */
  className?: string;

  /**
   * Specify an optional url to be added to your Tag.
   */
  url?: string;
}
