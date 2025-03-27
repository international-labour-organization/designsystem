import { FormFieldProps, LabelledFormFieldProps } from "../../types";

export interface OptionProps {
  /**
   * Is this option disabled?
   */
  disabled?: boolean;

  /**
   * The option's label
   */
  label: string;

  /**
   * The option's value
   */
  value?: string;
}

export interface DropdownProps extends FormFieldProps<HTMLSelectElement> {
  /**
   * A string providing a hint for a user agent's autocomplete feature.
   */
  autocomplete?: string;

  /**
   * The form element to associate the Dropdown with if it's not nested in a form element.
   */
  form?: string;

  /**
   * Indicates that multiple options can be selected from the list.
   */
  multiple?: boolean;

  /**
   * The Dropdown's options
   */
  options?: OptionProps[];

  /**
   * Number of rows in the list that should be visible at one time. Corresponds to the select element's size attribute.
   */
  selectSize?: number;

  /**
   * The Dropdown's default selection; should match one of the values in `options`
   */
  value?: string;

  /**
   * The default value of the select element
   */
  defaultValue?: string;
}

export type LabelledDropdownProps = LabelledFormFieldProps<DropdownProps>;
