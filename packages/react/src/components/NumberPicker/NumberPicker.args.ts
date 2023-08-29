import { LabelledNumberPickerProps } from "./NumberPicker.props";

const basic: LabelledNumberPickerProps = {
  label: "How many items would you like?",
  id: "numberpicker",
  disabled: false,
  error: false,
  name: "text",
  placeholder: "Select a number",
  required: false,
};

const hashelper: LabelledNumberPickerProps = {
  label: "How many items would you like?",
  id: "numberpicker",
  disabled: false,
  error: false,
  name: "text",
  placeholder: "Select a number",
  required: false,
};

const haserror: LabelledNumberPickerProps = {
  label: "How many items would you like?",
  id: "numberpicker",
  disabled: false,
  error: true,
  name: "text",
  placeholder: "Select a number",
  required: false,
};

const hastooltip: LabelledNumberPickerProps = {
  label: "How many items would you like?",
  id: "numberpicker",
  disabled: false,
  error: false,
  name: "text",
  placeholder: "Select a number",
  required: false,
};

const NumberPickerArgs = {
  basic,
  hashelper,
  haserror,
  hastooltip,
};

export default NumberPickerArgs;
