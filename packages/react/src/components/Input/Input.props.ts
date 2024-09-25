import { TextInputTypes } from "../../types";

export interface InputProps {
  /**
   * The input's onChange callback.
   */
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => unknown;

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
   * The input's helper text
   */
  helper?: string | false;

  /**
   * The input's id attribute
   */
  id?: string;

  /**
   * Does this input have a label?
   */
  label?: string;

  /**
   * The input's name attribute
   */
  name?: Required<string>;

  /**
   * Specify an optional className to be added to your Input component.
   */
  placeholder?: string;

  /**
   * Specify whether this input is required
   */
  required?: boolean;

  /**
   * Does this Input have a tooltip?
   */
  tooltip?: string;

  /**
   * The input's type.
   */
  type: TextInputTypes;

  value: string;
}
