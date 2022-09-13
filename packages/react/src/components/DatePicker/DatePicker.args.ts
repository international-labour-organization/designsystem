import { DatePickerProps } from "./DatePicker.props";

const basic: DatePickerProps = {
  callback: "",
  disabled: false,
  error: false,
  helper: false,
  label: "Date Picker Field Label",
  name: "datepicker",
  placeholder: "MM/DD/YYYY",
  required: false,
};

const hashelper: DatePickerProps = {
  callback: "",
  disabled: false,
  error: false,
  helper: "here is helper text",
  label: "Date Picker Field Label",
  name: "datepicker",
  placeholder: "MM/DD/YYYY",
  required: false,
};

const haserror: DatePickerProps = {
  callback: "",
  disabled: false,
  error: "this one has an error",
  helper: false,
  label: "Date Picker Field Label",
  name: "datepicker",
  placeholder: "MM/DD/YYYY",
  required: false,
};

const hastooltip: DatePickerProps = {
  callback: "",
  disabled: false,
  error: false,
  helper: false,
  label: "Date Picker Field Label",
  name: "datepicker",
  placeholder: "MM/DD/YYYY",
  required: false,
  tooltip: "This is the tooltip",
};

const hasrange: DatePickerProps = {
  callback: "",
  disabled: false,
  enddata: {
    callback: "",
    disabled: false,
    error: false,
    helper: "this is an end date range",
    label: "Date Picker End Field Label",
    name: "datepickerend",
    placeholder: "MM/DD/YYYY",
    range: false,
    required: false,
  },
  error: false,
  helper: false,
  label: "Date Picker Field Label",
  name: "datepicker",
  placeholder: "MM/DD/YYYY",
  range: true,
  required: false,
};

/**
 * Sample prop definitions DatePicker's enumerable properties (imported in stories and test)
 */
const DatePickerArgs = {
  basic,
  hasrange,
  hashelper,
  haserror,
  hastooltip,
};

export default DatePickerArgs;
