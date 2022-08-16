import { DatePickerProps } from "./DatePicker.props";

const basic: DatePickerProps = {
  callback: "",
  disabled: false,
  error: false,
  helper: false,
  label: "Text Field Label",
  name: "text",
  placeholder: "Text Field",
  range: false,
  required: false,
  tooltip: false,
};

const hasrange: DatePickerProps = {
  callback: "",
  disabled: false,
  error: false,
  helper: false,
  label: "Text Field Label",
  name: "text",
  placeholder: "Text Field",
  range: true,
  required: false,
  tooltip: false,
};

/**
 * Sample prop definitions DatePicker's enumerable properties (imported in stories and test)
 */
const DatePickerArgs = {
  basic,
  hasrange,
};

export default DatePickerArgs;
