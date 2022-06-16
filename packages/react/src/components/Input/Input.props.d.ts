export interface InputProps {
  /**
   * The input's onChange callback.
   */
  callback: function;

  /**
   * Is the input disabled?
   */
  disabled?: boolean;

  /**
   * The input's id attribute
   */
  id?: string;

  /**
   * The input's name attribute
   */
  name?: Required<string>;

  /**
   * Specify an optional className to be added to your Input component.
   */
  placeholder?: string;

  /**
   * The input's type.
   */
  type: Required<string>;
}
