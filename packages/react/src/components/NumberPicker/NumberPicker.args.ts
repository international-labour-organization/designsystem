import { NumberPickerProps } from "./NumberPicker.props";

const basic: NumberPickerProps = {
  id: "numberpicker",
  disabled: false,
  error: false,
  name: "text",
  placeholder: "Number Picker Field",
  required: false,
};

const hashelper: NumberPickerProps = {
  id: "numberpicker",
  disabled: false,
  error: false,
  name: "text",
  placeholder: "Number Picker Field",
  required: false,
};

const haserror: NumberPickerProps = {
  id: "numberpicker",
  disabled: false,
  error: true,
  name: "text",
  placeholder: "Number Picker Field",
  required: false,
};

const hastooltip: NumberPickerProps = {
  id: "numberpicker",
  disabled: false,
  error: false,
  name: "text",
  placeholder: "Number Picker Field",
  required: false,
};

const NumberPickerArgs = {
  basic,
  hashelper,
  haserror,
  hastooltip,
};

export default NumberPickerArgs;
