export interface RadioProps {
  /**
   * The Radio's onChange callback.
   */
  callback: function;

  /**
   * Specify an optional className to be added to your Radio.
   */
  className?: string;

  /**
   * Is the Radio disabled?
   */
  disabled?: boolean;

  /**
   * Does the Radio have an error?
   */
  error?: string | false;

  /**
   * The Radio's helper text
   */
  helper: string | false;

  /**
   * The Radio's id attribute
   */
  id?: string;

  /**
   * Does this Radio have a label?
   */
  label: string;

  /**
   * The Radio's name attribute
   */
  name?: Required<string>;

  /**
   * Specify whether this Radio is required
   */
  required?: boolean;

  /**
   * Does this Radio have a tooltip?
   */
  tooltip: string | false;

  /**
   * The Radio's value attribute
   */
  value?: Required<string>;

  /**
   * The input's type.
   */
  type?: "radio";
}
