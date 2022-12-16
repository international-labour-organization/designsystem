export interface TextareaProps {
  /**
   * The Textarea's onChange callback.
   */
  callback?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;

  /**
   * Specify an optional className to be added to your Textarea.
   */
  className?: string;

  /**
   * Is the Textarea disabled?
   */
  disabled?: boolean;

  /**
   * Does the Textarea have an error?
   */
  error?: string;

  /**
   * The Textarea's helper text
   */
  helper?: string;

  /**
   * The Textarea's id attribute
   */
  id?: string;

  /**
   * Does this Textarea have a label?
   */
  label: string;

  /**
   * The Textarea's maxlength
   */
  maxlength?: number;

  /**
   * The Textarea's minlength
   */
  minlength?: number;

  /**
   * The Textarea's name attribute
   */
  name?: Required<string>;

  /**
   * Specify an optional className to be added to your Textarea component.
   */
  placeholder?: string;

  /**
   * Specify whether this Textarea is required
   */
  required?: boolean;

  /**
   * Specify whether this Textarea employs browser-based spellcheck
   */
  spellcheck?: boolean;

  /**
   * Does this Textarea have a tooltip?
   */
  tooltip?: string;

  type?: never;
}
