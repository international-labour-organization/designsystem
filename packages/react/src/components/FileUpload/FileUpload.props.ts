import { FormFieldProps, LabelledFormFieldProps } from "../../types";

export interface FileUploadProps extends FormFieldProps<HTMLInputElement> {
  /**
   * The placeholder for the input
   */
  placeholder?: string;

  /**
   * The accept attribute for the input
   */
  accept?: string;

  /**
   * Can the user upload more than one file?
   */
  multiple?: boolean;
}

export type LabelledFileUploadProps = LabelledFormFieldProps<FileUploadProps>;
