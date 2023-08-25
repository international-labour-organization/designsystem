import { FormFieldProps } from "../../types";
import { LabelledFormFieldProps } from "../FormControl/FormControl.props";
export interface NumberPickerProps extends FormFieldProps<HTMLInputElement> {
  /**
   * The placeholder text when the input is empty.
   */
  placeholder?: string;
}

export type LabelledNumberPickerProps =
  LabelledFormFieldProps<NumberPickerProps>;
