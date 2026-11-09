import { DatePickerProps } from "./DatePicker.props";

export const basic: DatePickerProps = {
  id: "datepicker",
  disabled: false,
  error: false,
  name: "datepicker",
  placeholder: "MM/DD/YYYY",
  required: false,
};

export const hashelper: DatePickerProps = {
  id: "datepicker",
  disabled: false,
  error: false,
  name: "datepicker",
  placeholder: "MM/DD/YYYY",
  required: false,
};

export const haserror: DatePickerProps = {
  id: "datepicker",
  disabled: false,
  error: true,
  name: "datepicker",
  placeholder: "MM/DD/YYYY",
  required: false,
};

export const hastooltip: DatePickerProps = {
  id: "datepicker",
  disabled: false,
  error: false,
  name: "datepicker",
  placeholder: "MM/DD/YYYY",
  required: false,
};

export const hasrange: DatePickerProps = {
  id: "datepicker",
  disabled: false,
  error: false,
  name: "datepicker",
  placeholder: "MM/DD/YYYY",
  required: false,
};

const DatePickerArgs = {
  basic,
  hasrange,
  hashelper,
  haserror,
  hastooltip,
};

export default DatePickerArgs;
