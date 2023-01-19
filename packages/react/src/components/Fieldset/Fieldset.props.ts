import { ReactElement } from "react";
import { InputProps } from "../Input/Input.props";
import { TextareaProps } from "../Textarea/Textarea.props";

export interface FieldsetChild
  extends ReactElement<InputProps | TextareaProps> {}

export interface FieldsetProps {
  /**
   * Specify the content of your Fieldset.
   */
  children: (null | false | FieldsetChild) | (null | false | FieldsetChild)[];

  /**
   * Specify an optional className to be added to your Fieldset component.
   */
  className?: string;

  /**
   * The fieldset's id
   */
  fieldsetid?: string;

  /**
   * Optional error text for the fieldset
   */
  grouperror?: string;

  /**
   * Optional helper text for the fieldset
   */
  grouphelper?: string;

  /**
   * Optional tooltip text for the fieldset
   */
  grouptooltip?: string;

  /**
   * The fieldset's legend
   */
  legend?: string;
}
