import { NumberPickerProps } from "./NumberPicker.props";

const basic: NumberPickerProps = {
  callback: "",
  disabled: false,
  error: false,
  helper: false,
  label: "Number Picker Field Label",
  name: "text",
  placeholder: "Number Picker Field",
  required: false,
};

/**
 * Sample prop definitions NumberPicker's enumerable properties (imported in stories and test)
 */
const NumberPickerArgs = {
  basic,
};

export default NumberPickerArgs;
