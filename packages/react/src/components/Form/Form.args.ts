import { FormProps } from "./Form.props";
import CheckboxArgs from "../Checkbox/Checkbox.args";
import DatePickerArgs from "../DatePicker/DatePicker.args";
import DropdownArgs from "../Dropdown/Dropdown.args";
import FileUploadArgs from "../FileUpload/FileUpload.args";
import FormGroupArgs from "../FormGroup/FormGroup.args";
import InputArgs from "../Input/Input.args";
import NumberPickerArgs from "../NumberPicker/NumberPicker.args";
import RadioArgs from "../Radio/Radio.args";
import TextareaArgs from "../Textarea/Textarea.args";

const formcheckboxfields = [];
const formradiofields = [];

for (let i = 0; i < 5; i++) {
  let checkboxargs = { ...CheckboxArgs.basic };
  let radioargs = { ...RadioArgs.basic };
  formcheckboxfields.push(checkboxargs);
  formcheckboxfields[i].label = `Checkbox ${i}`;
  formcheckboxfields[i].name = `fcheckbox${i}`;
  formcheckboxfields[i].id = `fgcheckbox${i}`;
  formcheckboxfields[i].grouped = true;
  formradiofields.push(radioargs);
  formradiofields[i].label = `Radio ${i}`;
  formradiofields[i].name = `fradio`;
  formradiofields[i].value = `fradio${i}`;
  formradiofields[i].id = `fradio${i}`;
}

const basic: FormProps = {
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
      field: formcheckboxfields,
      legend: "Multiple Checkboxes",
      type: "checkbox",
    },
    {
      choicegroupid: "radios",
      field: formradiofields,
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
};

/**
 * Sample prop definitions FormGroup's enumerable properties (imported in stories and test)
 */
const FormArgs = {
  basic,
};

export default FormArgs;
