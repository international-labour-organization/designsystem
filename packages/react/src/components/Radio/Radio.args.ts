import { RadioProps } from "./Radio.props";

const basic: RadioProps = {
  className: "Radio",
  id: "Radio",
  name: "Radio",
};

const error: RadioProps = {
  ...basic,
  error: true,
};

const checked: RadioProps = {
  ...basic,
  defaultChecked: true,
};

/**
 * Sample prop definitions Radio's enumerable properties (imported in stories and test)
 */
const RadioArgs = {
  basic,
  error,
  checked,
};

export default RadioArgs;
