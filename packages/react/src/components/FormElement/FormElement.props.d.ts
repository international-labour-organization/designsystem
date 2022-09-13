import { inputTypes, fieldTypes } from "../../types";

export interface FormElementProps {
  /**
   * Specify the content of your FormElement.
   */
  children: ReactElement<Input> | ReactElement<Select> | ReactElement<Textarea>;

  /**
   * Specify an optional className to be added to your FormElement component.
   */
  className?: string;

  /**
   * Is the field disabled?
   */
  disabled?: boolean;

  /**
   * The fieldset's error message
   */
  error: string | false;

  /**
   * The fieldset's helper text
   */
  helper: string;

  /**
   * The ID of the form element
   */
  elemid: Required<string>;

  /**
   * The fieldset's label
   */
  label: Required<string>;

  /**
   * Is this element required?
   */
  required: boolean;

  /**
   * Does this fieldset have a tooltip?
   */
  tooltip?: string;

  /**
   * The type of field
   */
  type?: inputTypes | fieldTypes;
}
