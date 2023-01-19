export interface FileUploadProps {
  /**
   * The FileUpload's onChange callback.
   */
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => any;

  /**
   * Specify an optional className to be added to your FileUpload.
   */
  className?: string;

  /**
   * Is the FileUpload disabled?
   */
  disabled?: boolean;

  /**
   * Does the FileUpload have an error?
   */
  error?: string | false;

  /**
   * The FileUpload's helper text
   */
  helper: string | false;

  /**
   * The FileUpload's id attribute
   */
  id?: string;

  /**
   * Does this FileUpload have a label?
   */
  label: string;

  /**
   * Should the FileUpload allow multiple uploads?
   */
  multiple?: boolean;

  /**
   * The FileUpload's name attribute
   */
  name?: Required<string>;

  /**
   * Specify an optional className to be added to your FileUpload component.
   */
  placeholder?: string;

  /**
   * Specify whether this FileUpload is required
   */
  required?: boolean;

  /**
   * Does this FileUpload have a tooltip?
   */
  tooltip?: string;
}
