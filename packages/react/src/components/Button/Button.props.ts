import React, { ReactNode } from "react";
import {
  ButtonFunctions,
  ButtonTypes,
  PositionTypes,
  SizeTypes,
} from "../../types";

export interface ButtonProps {
  /**
   * Specify the callback of your Button.
   */
  callback?: (e: React.MouseEvent<Element, MouseEvent>) => unknown;

  /**
   * Specify the content of your Button.
   */
  children?: ReactNode;

  /**
   * Specify an optional className to be added to your Button.
   */
  className?: string;

  /**
   * Specify the name for the Button.
   */
  name?: string;

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
  iconPosition?: PositionTypes;

  /**
   * Does this button display an icon only?
   */
  icononly?: boolean;

  /**
   * Specify which function the button performs
   */
  kind?: ButtonFunctions;

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
  size?: SizeTypes;

  /**
   * Specify the target for when Button is really a link
   */
  target?: string;

  /**
   * Specify an optional className to be added to your Button.
   */
  type?: ButtonTypes;

  /**
   * Specify the url for the Button's href
   */
  url?: string;

  /**
   * Inline styles to be applied to the rendered element
   */
  style?: React.CSSProperties;
}
