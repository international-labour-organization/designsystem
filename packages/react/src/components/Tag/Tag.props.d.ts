import { ReactNode } from "react";
import { tagTypes } from "../../types";

export interface TagProps {
  /**
   * Callback to event;
   */
  callback?: function;

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
   * Specify a tag type
   */
  type?: tagTypes;

  /**
   * Specify an optional url to be added to your Tag.
   */
  url?: string;
}
