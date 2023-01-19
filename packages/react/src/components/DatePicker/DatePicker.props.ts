export interface DatePickerProps {
  /**
   * The input's onChange callback.
   */
  callback?: (e: React.ChangeEvent<HTMLInputElement>, picker?: string) => any;

  /**
   * Specify an optional className to be added to your input.
   */
  className?: string;

  /**
   * Is the input disabled?
   */
  disabled?: boolean;

  /**
   * If this is a range, the data for the second field
   */
  enddata?: DatePickerProps;

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
  tooltip?: string;
}
