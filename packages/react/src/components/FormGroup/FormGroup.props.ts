import { FormGroupTypes } from "../../types";
import { CheckboxProps } from "../Checkbox/Checkbox.props";
import { DatePickerProps } from "../DatePicker/DatePicker.props";
import { DropdownProps } from "../Dropdown/Dropdown.props";
import { FileUploadProps } from "../FileUpload/FileUpload.props";
import { InputProps } from "../Input/Input.props";
import { NumberPickerProps } from "../NumberPicker/NumberPicker.props";
import { RadioProps } from "../Radio/Radio.props";
import { TextareaProps } from "../Textarea/Textarea.props";

export interface InputItem {
  type: "input";
  field: InputProps;
  choicegroupid?: never;
  legend?: never;
}

export interface DropdownItem {
  type: "dropdown";
  field: DropdownProps;
  choicegroupid?: never;
  legend?: never;
}

export interface CheckboxItem {
  type: "checkbox";
  field: CheckboxProps | CheckboxProps[];
  choicegroupid: string;
  legend?: string;
}

export interface RadioItem {
  type: "radio";
  field: RadioProps | RadioProps[];
  choicegroupid: string;
  legend?: string;
}

export interface FileUploadItem {
  type: "file";
  field: FileUploadProps;
  choicegroupid?: never;
  legend?: never;
}

export interface NumberPickerItem {
  type: "number";
  field: NumberPickerProps;
  choicegroupid?: never;
  legend?: never;
}

export interface DatePickerItem {
  type: "date";
  field: DatePickerProps;
  choicegroupid?: never;
  legend?: never;
}

export interface TextareaItem {
  type: "textarea";
  field: TextareaProps;
  choicegroupid?: never;
  legend?: never;
}

type FormGroupItem =
  | InputItem
  | DropdownItem
  | CheckboxItem
  | RadioItem
  | FileUploadItem
  | NumberPickerItem
  | DatePickerItem
  | TextareaItem;

export interface FormGroupProps {
  /**
   * Specify an optional className to be added to your FormGroup component.
   */
  className?: string;

  /**
   * The ID of the FormGroup
   */
  formgroupid: string | boolean;

  /**
   * The inputs in this form group
   */
  items: FormGroupItem[];

  /**
   * The FormGroups's legend
   */
  legend: string | false;

  /**
   * This Form Groups's type
   */
  type: FormGroupTypes;
}
