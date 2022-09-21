import { ReactNode } from "react";
import { buttonFunctions, buttonTypes } from "../../types";

export interface ButtonProps {
  /**
   * Specify the callback of your Button.
   */
  callback?: function;

  /**
   * Specify the content of your Button.
   */
  children?: ReactNode;

  /**
   * Specify an optional className to be added to your Button.
   */
  className?: string;

  /**
   * Specify whether or not the button is disabled.
   */
  disabled?: boolean;

  /**
   * Specify the icon for the Button
   */
  icon?: string;

  /**
   * Specify the icon for the Button
   */
  iconPosition?: positionTypes;

  /**
   * Does this button display an icon only?
   */
  icononly?: boolean;

  /**
   * Specify which function the button performs
   */
  kind?: buttonFunctions;

  /**
   * Specify the label for the Button
   */
  label?: string;

  /**
   * Does this button open a modal?
   */
  opensmodal?: boolean;

  /**
   * Specify an optional className to be added to your Button.
   */
  size?: sizeTypes;

  /**
   * Specify the target for when Button is really a link
   */
  target?: string;

  /**
   * Specify an optional className to be added to your Button.
   */
  type?: buttonTypes;

  /**
   * Specify the url for the Button's href
   */
  url?: string;
}
