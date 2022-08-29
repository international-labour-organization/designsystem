export interface CheckboxProps {
  /**
   * The checkbox's onChange callback.
   */
  callback: function;

  /**
   * Specify an optional className to be added to your checkbox.
   */
  className?: string;

  /**
   * Is the checkbox disabled?
   */
  disabled?: boolean;

  /**
   * Does the checkbox have an error?
   */
  error?: string | false;

  /**
   * Is this checkbox part of a group?
   */
  grouped?: boolean;

  /**
   * The checkbox's helper text
   */
  helper: string | false;

  /**
   * The checkbox's id attribute
   */
  id?: string;

  /**
   * Does this checkbox have a label?
   */
  label: string;

  /**
   * The checkbox's name attribute
   */
  name?: Required<string>;

  /**
   * Specify whether this checkbox is required
   */
  required?: boolean;

  /**
   * Does this checkbox have a tooltip?
   */
  tooltip?: string;

  /**
   * The input's type.
   */
  type?: "checkbox";
}
