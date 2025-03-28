import {
  FormFieldProps,
  TextInputTypes,
  LabelledFormFieldProps,
} from "../../types";
export interface TextInputProps extends FormFieldProps<HTMLInputElement> {
  /**
   * Optional pattern attribute for phone numbers, zip codes, etc.
   */
  pattern?: string;

  /**
   * Specify an optional className to be added to your Input component.
   */
  placeholder?: string;

  /**
   * The input's type.
   */
  type: TextInputTypes;

  value?: string;
}

export type LabelledTextInputProps = LabelledFormFieldProps<TextInputProps>;
