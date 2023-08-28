import { FormFieldProps } from "../../types";
import { LabelledFormFieldProps } from "../../types";

export interface FileUploadProps extends FormFieldProps<HTMLInputElement> {
  /**
   * The placeholder for the input
   */
  placeholder?: string;

  /**
   * Can the user upload more than one file?
   */
  multiple?: boolean;
}

export type LabelledFileUploadProps = LabelledFormFieldProps<FileUploadProps>;
