import { FormFieldProps, LabelledFormFieldProps } from "../../types";
export interface NumberPickerProps extends FormFieldProps<HTMLInputElement> {
  /**
   * The placeholder text when the input is empty.
   */
  placeholder?: string;

  /**
   * The minimum value of the input.
   */
  min?: number;

  /**
   * The maximum value of the input.
   * */
  max?: number;

  /**
   * The step value of the input.
   * */
  step?: number;

  /**
   * The value of the input.
   */
  value?: number;
}

export type LabelledNumberPickerProps =
  LabelledFormFieldProps<NumberPickerProps>;
