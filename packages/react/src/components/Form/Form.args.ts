import { FormProps } from "./Form.props";
import CheckboxArgs from "../Checkbox/Checkbox.args";
import ChoiceGroupArgs from "../ChoiceGroup/ChoiceGroup.args";
import DatePickerArgs from "../DatePicker/DatePicker.args";
import DropdownArgs from "../Dropdown/Dropdown.args";
import FileUploadArgs from "../FileUpload/FileUpload.args";
import FormGroupArgs from "../FormGroup/FormGroup.args";
import InputArgs from "../Input/Input.args";
import NumberPickerArgs from "../NumberPicker/NumberPicker.args";
import TextareaArgs from "../Textarea/Textarea.args";

const basic: FormProps = {
  action: "https://my.action.url",
  formid: "exampleform",
  items: [
    {
      field: InputArgs.basic,
      type: "input",
    },
    {
      field: DropdownArgs.basic,
      type: "dropdown",
    },
    {
      field: FormGroupArgs.basic,
      type: "formgroup",
    },
    {
      field: { ...CheckboxArgs.basic },
      type: "checkbox",
    },
    {
      choicegroupid: "multiplecheckboxes",
      field: ChoiceGroupArgs.checkboxes.items,
      legend: "Multiple Checkboxes",
      type: "checkbox",
    },
    {
      choicegroupid: "radios",
      field: ChoiceGroupArgs.radios.items,
      legend: "Radio Group",
      type: "radio",
    },
    {
      field: FileUploadArgs.basic,
      type: "file",
    },
    {
      field: DatePickerArgs.hasrange,
      type: "date",
    },
    {
      field: NumberPickerArgs.basic,
      type: "number",
    },
    {
      field: TextareaArgs.basic,
      type: "textarea",
    },
  ],
  submitlabel: "Submit",
};

const hashelper: FormProps = {
  action: "https://my.action.url",
  formid: "exampleform",
  items: [
    {
      field: InputArgs.hashelper,
      type: "input",
    },
    {
      field: DropdownArgs.hashelper,
      type: "dropdown",
    },
    {
      choicegroupid: "multiplecheckboxes",
      field: ChoiceGroupArgs.checkboxeshelper.items,
      grouphelper: ChoiceGroupArgs.checkboxeshelper.grouphelper,
      legend: "Multiple Checkboxes",
      type: "checkbox",
    },
    {
      choicegroupid: "radios",
      field: ChoiceGroupArgs.radioshelper.items,
      grouphelper: ChoiceGroupArgs.radioshelper.grouphelper,
      legend: "Radio Group",
      type: "radio",
    },
    {
      field: FileUploadArgs.hashelper,
      type: "file",
    },
    {
      field: DatePickerArgs.hashelper,
      type: "date",
    },
    {
      field: NumberPickerArgs.hashelper,
      type: "number",
    },
    {
      field: TextareaArgs.hashelper,
      type: "textarea",
    },
  ],
  submitlabel: "Submit",
};

const haserror: FormProps = {
  action: "https://my.action.url",
  formid: "exampleform",
  items: [
    {
      field: InputArgs.haserror,
      type: "input",
    },
    {
      field: DropdownArgs.haserror,
      type: "dropdown",
    },
    {
      choicegroupid: "multiplecheckboxes",
      field: ChoiceGroupArgs.checkboxeserror.items,
      grouperror: ChoiceGroupArgs.checkboxeserror.grouperror,
      legend: "Multiple Checkboxes",
      type: "checkbox",
    },
    {
      choicegroupid: "radios",
      field: ChoiceGroupArgs.radioserror.items,
      grouperror: ChoiceGroupArgs.radioserror.grouperror,
      legend: "Radio Group",
      type: "radio",
    },
    {
      field: FileUploadArgs.haserror,
      type: "file",
    },
    {
      field: DatePickerArgs.haserror,
      type: "date",
    },
    {
      field: NumberPickerArgs.haserror,
      type: "number",
    },
    {
      field: TextareaArgs.haserror,
      type: "textarea",
    },
  ],
  submitlabel: "Submit",
};

const hastooltip: FormProps = {
  action: "https://my.action.url",
  formid: "exampleform",
  items: [
    {
      field: InputArgs.hastooltip,
      type: "input",
    },
    {
      field: DropdownArgs.hastooltip,
      type: "dropdown",
    },
    {
      choicegroupid: "multiplecheckboxes",
      field: ChoiceGroupArgs.checkboxestooltip.items,
      grouptooltip: ChoiceGroupArgs.checkboxestooltip.grouptooltip,
      legend: "Multiple Checkboxes",
      type: "checkbox",
    },
    {
      choicegroupid: "radios",
      field: ChoiceGroupArgs.radiostooltip.items,
      grouptooltip: ChoiceGroupArgs.radioshelper.grouptooltip,
      legend: "Radio Group",
      type: "radio",
    },
    {
      field: FileUploadArgs.hastooltip,
      type: "file",
    },
    {
      field: DatePickerArgs.hastooltip,
      type: "date",
    },
    {
      field: NumberPickerArgs.hastooltip,
      type: "number",
    },
    {
      field: TextareaArgs.hastooltip,
      type: "textarea",
    },
  ],
  submitlabel: "Submit",
};

const hasdisabled: FormProps = {
  action: "https://my.action.url",
  formid: "exampleform",
  items: [
    {
      field: InputArgs.isdisabled,
      type: "input",
    },
    {
      field: DropdownArgs.basic,
      type: "dropdown",
    },
    {
      field: FormGroupArgs.basic,
      type: "formgroup",
    },
    {
      field: { ...CheckboxArgs.basic },
      type: "checkbox",
    },
    {
      choicegroupid: "multiplecheckboxes",
      field: ChoiceGroupArgs.checkboxes.items,
      legend: "Multiple Checkboxes",
      type: "checkbox",
    },
    {
      choicegroupid: "radios",
      field: ChoiceGroupArgs.radios.items,
      legend: "Radio Group",
      type: "radio",
    },
    {
      field: FileUploadArgs.basic,
      type: "file",
    },
    {
      field: DatePickerArgs.hasrange,
      type: "date",
    },
    {
      field: NumberPickerArgs.basic,
      type: "number",
    },
    {
      field: TextareaArgs.basic,
      type: "textarea",
    },
  ],
  submitlabel: "Submit",
};

/**
 * Sample prop definitions FormGroup's enumerable properties (imported in stories and test)
 */
const FormArgs = {
  basic,
  hasdisabled,
  hashelper,
  haserror,
  hastooltip,
};

export default FormArgs;
