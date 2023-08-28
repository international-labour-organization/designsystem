import { FormFieldProps } from "../../types";
import { LabelledFormFieldProps } from "../../types";

export interface DatePickerProps extends FormFieldProps<HTMLInputElement> {
  /**
   * The input's onChange callback.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, picker?: string) => any;

  /**
   * The latest date to accept
   */
  max?: string | number;

  /**
   * The earliest date to accept.
   */
  min?: string | number;

  /**
   * The granularity of the date picker
   */
  step?: number | "any";

  /**
   * Specify an optional className to be added to your DatePicker component.
   */
  placeholder?: string;
}

export type LabelledDatePickerProps = LabelledFormFieldProps<DatePickerProps>;
