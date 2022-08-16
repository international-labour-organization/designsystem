import { datePickerTypes } from "../../types";

export interface DatePickerProps {
  /**
   * The input's onChange callback.
   */
  callback: function;

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
  helper: string | false;

  /**
   * The input's id attribute
   */
  id?: string;

  /**
   * Does this input have a label?
   */
  label: string;

  /**
   * The input's name attribute
   */
  name?: Required<string>;

  /**
   * Specify an optional className to be added to your DatePicker component.
   */
  placeholder?: string;

  /**
   * Specify whether this is a date range
   */
  range?: boolean;

  /**
   * Specify whether this input is required
   */
  required?: boolean;

  /**
   * Does this DatePicker have a tooltip?
   */
  tooltip: string | false;
}
