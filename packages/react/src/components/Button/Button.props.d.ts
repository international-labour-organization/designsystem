import { ReactNode, MouseEvent } from "react";
import { buttonTypes } from "../../types";

export interface ButtonProps {
  /**
   * Specify the callback of your Button.
   */
  callback: function;

  /**
   * Specify the content of your Button.
   */
  children: ReactNode;

  /**
   * Specify an optional className to be added to your Button.
   */
  className?: string;

  /**
   * Specify the icon for the Button
   */
  icon?: string;

  /**
   * Specify the icon for the Button
   */
  iconPosition?: positionTypes;

  /**
   * Specify the label for the Button
   */
  label?: string;

  /**
   * Specify an optional className to be added to your Button.
   */
  size?: sizeTypes;

  /**
   * Specify an optional className to be added to your Button.
   */
  type?: buttonTypes;

  /**
   * Specify the url for the Button's href
   */
  url?: string;
}
