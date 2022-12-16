import { RadioProps } from "./Radio.props";

const basic: RadioProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: false,
  label: "Radio Field Label",
  name: "radio",
  required: false,
  type: "radio",
  value: "radio",
};

/**
 * Sample prop definitions Radio's enumerable properties (imported in stories and test)
 */
const RadioArgs = {
  basic,
};

export default RadioArgs;
