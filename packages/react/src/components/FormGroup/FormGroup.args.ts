import CheckboxArgs from "../Checkbox/Checkbox.args";
import DatePickerArgs from "../DatePicker/DatePicker.args";
import DropdownArgs from "../Dropdown/Dropdown.args";
import FileUploadArgs from "../FileUpload/FileUpload.args";
import { FormGroupProps } from "./FormGroup.props";
import InputArgs from "../Input/Input.args";
import NumberPickerArgs from "../NumberPicker/NumberPicker.args";
import RadioArgs from "../Radio/Radio.args";
import TextareaArgs from "../Textarea/Textarea.args";

const fgcheckboxfields = [];
const fgradiofields = [];

for (let i = 0; i < 5; i++) {
  let checkboxargs = { ...CheckboxArgs.basic };
  let radioargs = { ...RadioArgs.basic };
  fgcheckboxfields.push(checkboxargs);
  fgcheckboxfields[i].label = `Checkbox ${i}`;
  fgcheckboxfields[i].name = `fgcheckbox${i}`;
  fgcheckboxfields[i].id = `fgcheckbox${i}`;
  fgcheckboxfields[i].grouped = true;
  fgradiofields.push(radioargs);
  fgradiofields[i].label = `Radio ${i}`;
  fgradiofields[i].name = `fgradio`;
  fgradiofields[i].value = `fgradio${i}`;
  fgradiofields[i].id = `fgradio${i}`;
}

const basic: FormGroupProps = {
  formgroupid: "examplegroup",
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
      field: { ...CheckboxArgs.basic },
      type: "checkbox",
    },
    {
      choicegroupid: "multiplecheckboxes",
      field: fgcheckboxfields,
      legend: "Multiple Checkboxes",
      type: "checkbox",
    },
    {
      choicegroupid: "radios",
      field: fgradiofields,
      legend: "Radio Group",
      type: "radio",
    },
    {
      field: FileUploadArgs.basic,
      type: "file",
    },
    {
      field: DatePickerArgs.basic,
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
  legend: "Example Legend",
  type: "default",
};

/**
 * Sample prop definitions FormGroup's enumerable properties (imported in stories and test)
 */
const FormGroupArgs = {
  basic,
};

export default FormGroupArgs;
