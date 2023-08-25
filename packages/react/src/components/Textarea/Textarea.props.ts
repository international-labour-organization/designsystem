import { FormFieldProps } from "../../types";
import { LabelledFormFieldProps } from "../FormControl/FormControl.props";
export interface TextareaProps extends FormFieldProps<HTMLTextAreaElement> {
  /**
   * The Textarea's onChange callback.
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;

  /**
   * Activate automatic spelling correction and processing of text substitutions
   **/
  autocorrect?: "on" | "off";

  /**
   *  The id of the form element the Textarea belongs to if it's not nested inside the form.
   **/
  form?: string;

  /**
   * The Textarea's maxlength
   */
  maxlength?: number;

  /**
   * The Textarea's minlength
   */
  minlength?: number;

  /**
   * Specify an optional className to be added to your Textarea component.
   */
  placeholder?: string;

  /**
   * Specifies whether the textarea is subject to spellchecking by the underlying browser/OS
   **/
  spellcheck?: boolean | "default";

  /**
   *  How the control should wrap the value for submission.
   **/
  wrap?: "hard" | "soft" | "off";
}

export type LabelledTextareaProps = LabelledFormFieldProps<TextareaProps>;
