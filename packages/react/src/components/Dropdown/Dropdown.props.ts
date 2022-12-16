export interface OptionProps {
  /**
   * Is this option disabled?
   */
  disabled?: boolean;

  /**
   * The option's label
   */
  label: Required<string>;

  /**
   * The option's value
   */
  value?: Required<string>;
}

export interface DropdownProps {
  /**
   * Should the Dropdown allow default browser autocomplete functionality?
   * Ideally this would be boolean but for some reason React expects a string. So: "true" if true.
   */
  autocomplete: string;

  /**
   * The Dropdown's onChange callback.
   */
  callback?: (e: React.ChangeEvent<HTMLSelectElement>) => any;

  /**
   * Specify an optional className to be added to your Profile component.
   */
  className?: string;

  /**
   * Is the Dropdown disabled?
   */
  disabled?: boolean;

  /**
   * Does the Dropdown have an error?
   */
  error?: string | false;

  /**
   * The Dropdown's helper text
   */
  helper: string | false;

  /**
   * The Dropdown's id attribute
   */
  id?: string;

  /**
   * The Dropdown's label
   */
  label: string;

  /**
   * The Dropdown's name attribute
   */
  name?: Required<string>;

  /**
   * The Dropdown's options
   */
  options?: Required<Array<OptionProps>>;

  /**
   * Is a selection required?
   */
  required?: boolean;

  /**
   * Does this Dropdown have a tooltip?
   */
  tooltip?: string;

  /**
   * The Dropdown's default selection; should match one of the values in `options`
   */
  value: string;
}
