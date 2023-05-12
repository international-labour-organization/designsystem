import { FormFieldProps } from "../../types";

export interface NumberPickerProps extends FormFieldProps<HTMLInputElement> {
  /**
   * The placeholder text when the input is empty.
   */
  placeholder?: string;
}
