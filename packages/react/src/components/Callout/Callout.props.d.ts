import { ReactNode } from "react";
import { calloutTypes } from "../../types";

export interface CalloutProps {
  /**
   * Describe the type of callout
   */
  alert?: calloutTypes;

  /**
   * Specify an optional button label
   */
  buttonLabel?: string;

  /**
   * Specify the callback of your Button.
   */
  callback?: function;

  /**
   * Specify an optional className to be added to your RichText.
   */
  className?: string;

  /**
   * Specify the html content
   */
  children?: ReactNode;

  /**
   * Specify if callout is collapsible
   */
  isCollapsible?: boolean;

  /**
   * Specify if callout is open (only important for collapsible items)
   */
  isOpen?: boolean;

  /**
   * Specify the callout title
   */
  title?: string;

  /**
   * Specify the open label
   */
  toggleOpenLabel?: string;

  /**
   * Specify the open label
   */
  toggleClosedLabel?: string;
}
