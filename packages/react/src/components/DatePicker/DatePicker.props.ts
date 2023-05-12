import { FormFieldProps } from "../../types";

export interface DatePickerProps extends FormFieldProps<HTMLInputElement> {
  /**
   * The input's onChange callback.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, picker?: string) => any;

  /**
   * The input's id attribute
   */
  id: string;

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
   * The input's name attribute
   */
  name?: string;

  /**
   * Specify an optional className to be added to your DatePicker component.
   */
  placeholder?: string;

  /**
   * Renders the input right-to-left
   */
  rtl?: boolean;
}
