import { NumberPickerProps } from "./NumberPicker.props";

const basic: NumberPickerProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: false,
  label: "Number Picker Field Label",
  name: "text",
  placeholder: "Number Picker Field",
  required: false,
};

const hashelper: NumberPickerProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: "Here is the helper text",
  label: "Number Picker Field Label",
  name: "text",
  placeholder: "Number Picker Field",
  required: false,
};

const haserror: NumberPickerProps = {
  callback: () => {},
  disabled: false,
  error: "This one has an error",
  helper: false,
  label: "Number Picker Field Label",
  name: "text",
  placeholder: "Number Picker Field",
  required: false,
};

const hastooltip: NumberPickerProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: false,
  label: "Number Picker Field Label",
  name: "text",
  placeholder: "Number Picker Field",
  required: false,
  tooltip: "This is the tooltip",
};

/**
 * Sample prop definitions NumberPicker's enumerable properties (imported in stories and test)
 */
const NumberPickerArgs = {
  basic,
  hashelper,
  haserror,
  hastooltip,
};

export default NumberPickerArgs;
