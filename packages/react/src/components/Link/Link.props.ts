import { ReactNode } from "react";
import { LinkTypes } from "../../types";

export interface LinkProps {
  /**
   * Specify the content of your Link.
   */
  children: ReactNode;

  /**
   * Specify the label for the link
   */
  label?: string;

  /**
   * Specify the url for the link's href
   */
  url?: string;

  /**
   * Specify the target for the link
   */
  target?: string;

  /**
   * Specify an optional className to be added to your Link.
   */
  theme?: LinkTypes;

  /**
   * Specify an optional className to be added to your Link.
   */
  className?: string;

  /**
   * Inline styles to be applied to the rendered element
   */
  style?: React.CSSProperties;
}
