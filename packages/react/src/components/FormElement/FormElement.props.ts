import { ReactElement } from "react";
import { InputTypes, FieldTypes } from "../../types";
import { DropdownProps } from "../Dropdown/Dropdown.props";
import { InputProps } from "../Input/Input.props";
import { TextareaProps } from "../Textarea/Textarea.props";

export interface FormElementProps {
  /**
   * Specify the content of your FormElement.
   */
  children:
    | ReactElement<InputProps>
    | ReactElement<DropdownProps>
    | ReactElement<TextareaProps>;

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
  elemid: string;

  /**
   * The fieldset's label
   */
  label?: string;

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
  type?: InputTypes | FieldTypes;
}
