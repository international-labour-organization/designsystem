import { FormFieldProps } from "../../types";
import { LabelledFormFieldProps } from "../../types";
export interface NumberPickerProps extends FormFieldProps<HTMLInputElement> {
  /**
   * The placeholder text when the input is empty.
   */
  placeholder?: string;
}

export type LabelledNumberPickerProps =
  LabelledFormFieldProps<NumberPickerProps>;
