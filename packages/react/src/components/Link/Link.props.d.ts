import { ReactNode, MouseEvent } from "react";
import { linkTypes } from "../../types";

export interface LinkProps {
  /**
   * Specify the content of your Link.
   */
  children: ReactNode;

  /**
   * Specify the label for the link
   */
  label?: html;

  /**
   * Specify the url for the link's href
   */
  url?: string;

  /**
   * Specify an optional className to be added to your Link.
   */
  theme?: linkTypes;

  /**
   * Specify an optional className to be added to your Link.
   */
  className?: string;
}
