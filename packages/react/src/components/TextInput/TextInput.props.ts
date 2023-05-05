import { InputTypes } from "../../types";

export interface TextInputProps {
  /**
   * The input's onChange callback.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;

  /**
   * Specify an optional className to be added to your input.
   */
  className?: string;

  /**
   * Is the input disabled?
   */
  disabled?: boolean;

  /**
   * Does the input have an error?
   */
  error?: string | false;

  /**
   * The input's id attribute
   */
  id: string;

  /**
   * The input's name attribute
   */
  name?: string;

  /**
   * Optional pattern attribute for phone numbers, zip codes, etc.
   */

  pattern?: string;

  /**
   * Specify an optional className to be added to your Input component.
   */
  placeholder?: string;

  /**
   * Specify whether this input is required
   */
  required?: boolean;

  /**
   * Inline styles for the input
   */
  style?: React.CSSProperties;

  /**
   * The input's type.
   */
  type: InputTypes;
}
