import { ReactNode } from "react";
import { TagTypes } from "../../types";

export interface TagProps {
  /**
   * Callback to event;
   */
  callback?: (e: React.MouseEvent<HTMLButtonElement>) => unknown;

  /**
   * Specify the label for the tag
   */
  children?: ReactNode;

  /**
   * The tag's unique id.
   */
  id: string;

  /**
   * Specify an optional className to be added to your Tag.
   */
  className?: string;

  /**
   * Specify a tag type
   */
  type?: TagTypes;

  /**
   * Specify an optional url to be added to your Tag.
   */
  url?: string;
}
