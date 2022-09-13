import { CheckboxProps } from "../Checkbox/Checkbox.props";
import { DatePickerProps } from "../DatePicker/DatePicker.props";
import { DropdownProps } from "../Dropdown/Dropdown.props";
import { FileUploadProps } from "../FileUpload/FileUpload.props";
import { InputProps } from "../InputProps/InputProps.props";
import { NumberPickerProps } from "../NumberPicker/NumberPicker.props";
import { RadioProps } from "../Radio/Radio.props";
import { TextareaProps } from "../Textarea/Textarea.props";
import { fieldTypes, formGroupTypes } from "../../types";

// We can't put a form group inside a form group so let's remove that option
const formGroupFieldTypes = fieldTypes.filter((item) => item !== "formgroup");

interface FormGroupItems {
  /**
   * An optional ID if this is a group of checkboxes or radios
   */
  choicegroupid?: string;

  /**
   * The inputs in this form group
   */
  field: Required<
    | InputProps
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
   * If this is an array of items, an optional legend
   */
  legend?: string;

  /**
   * This item's field type
   */
  type: Required<formGroupFieldTypes>;
}

export interface FormGroupProps {
  /**
   * Specify an optional className to be added to your FormGroup component.
   */
  className?: string;

  /**
   * The ID of the FormGroup
   */
  formgroupid: Required<string | boolean>;

  /**
   * The inputs in this form group
   */
  items: Required<Array<FormGroupItems>>;

  /**
   * The FormGroups's legend
   */
  legend: Required<string | false>;

  /**
   * This Form Groups's type
   */
  type: Required<formGroupTypes>;
}
