import { CheckboxProps } from "../Checkbox/Checkbox.props";
import { DatePickerProps } from "../DatePicker/DatePicker.props";
import { DropdownProps } from "../Dropdown/Dropdown.props";
import { FileUploadProps } from "../FileUpload/FileUpload.props";
import { FormGroupProps } from "../FormGroupProps/FormGroupProps.props";
import { InputProps } from "../InputProps/InputProps.props";
import { NumberPickerProps } from "../NumberPicker/NumberPicker.props";
import { RadioProps } from "../Radio/Radio.props";
import { TextareaProps } from "../Textarea/Textarea.props";
import { fieldTypes } from "../../types";

interface FormItems {
  /**
   * An optional ID if this is a group of checkboxes or radios
   */
  choicegroupid?: string;

  /**
   * The inputs in this form group
   */
  field: Required<
    | FormGroupProps
    | DropdownProps
    | Array<CheckboxProps>
    | Array<RadioProps>
    | CheckboxProps
    | FileUploadProps
    | NumberPickerProps
    | DatePickerProps
    | TextareaProps
  >;

  /**
   * Optional error text for the choice group
   */
  grouperror?: string;

  /**
   * Optional helper text for the choice group
   */
  grouphelper?: string;

  /**
   * Optional tooltip text for the choice group
   */
  grouptooltip?: string;

  /**
   * If this is an array of items, an optional legend
   */
  legend?: string;

  /**
   * This item's field type
   */
  type: Required<fieldTypes>;
}

export interface FormProps {
  /**
   * The form's action attribute
   */
  action: Required<string>;

  /**
   * Specify an optional className to be added to your Form component.
   */
  className?: string;

  /**
   * The ID of the form
   */
  formid: Required<string>;

  /**
   * The inputs in this form group
   */
  items: Required<Array<FormItems>>;

  /**
   * The label for the form's submit button
   */
  submitlabel: Required<string>;
}
