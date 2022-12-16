import { CheckboxProps } from "../Checkbox/Checkbox.props";
import { DatePickerProps } from "../DatePicker/DatePicker.props";
import { DropdownProps } from "../Dropdown/Dropdown.props";
import { FileUploadProps } from "../FileUpload/FileUpload.props";
import { NumberPickerProps } from "../NumberPicker/NumberPicker.props";
import { RadioProps } from "../Radio/Radio.props";
import { TextareaProps } from "../Textarea/Textarea.props";
import { InputProps } from "../Input/Input.props";
import { FormGroupProps } from "../FormGroup/FormGroup.props";

export interface InputItem {
  type: "input";
  field: InputProps;
  choicegroupid?: never;
  legend?: never;
  grouptooltip?: never;
  grouperror?: never;
  grouphelper?: never;
}

export interface DropdownItem {
  type: "dropdown";
  field: DropdownProps;
  choicegroupid?: never;
  legend?: never;
  grouptooltip?: never;
  grouperror?: never;
  grouphelper?: never;
}

export interface CheckboxItem {
  type: "checkbox";
  field: CheckboxProps | CheckboxProps[];
  choicegroupid: string;
  legend?: string;
  grouptooltip?: string;
  grouperror?: string;
  grouphelper?: string;
}

export interface RadioItem {
  type: "radio";
  field: RadioProps | RadioProps[];
  choicegroupid: string;
  legend?: string;
  grouptooltip?: string;
  grouperror?: string;
  grouphelper?: string;
}

export interface FileUploadItem {
  type: "file";
  field: FileUploadProps;
  choicegroupid?: never;
  legend?: never;
  grouptooltip?: never;
  grouperror?: never;
  grouphelper?: never;
}

export interface NumberPickerItem {
  type: "number";
  field: NumberPickerProps;
  choicegroupid?: never;
  legend?: never;
  grouptooltip?: never;
  grouperror?: never;
  grouphelper?: never;
}

export interface DatePickerItem {
  type: "date";
  field: DatePickerProps;
  choicegroupid?: never;
  legend?: never;
  grouptooltip?: never;
  grouperror?: never;
  grouphelper?: never;
}

export interface TextareaItem {
  type: "textarea";
  field: TextareaProps;
  choicegroupid?: never;
  legend?: never;
  grouptooltip?: never;
  grouperror?: never;
  grouphelper?: never;
}

export interface FormGroupItem {
  type: "formgroup";
  field: FormGroupProps;
  choicegroupid?: string;
  legend?: string;
  grouptooltip?: string;
  grouperror?: string;
  grouphelper?: string;
}

type FormItem =
  | InputItem
  | DropdownItem
  | CheckboxItem
  | RadioItem
  | FileUploadItem
  | NumberPickerItem
  | DatePickerItem
  | TextareaItem
  | FormGroupItem;

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
  items: FormItem[];

  /**
   * The label for the form's submit button
   */
  submitlabel: string;
}
