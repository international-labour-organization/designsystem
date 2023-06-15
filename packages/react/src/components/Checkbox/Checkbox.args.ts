import { CheckboxProps } from "./Checkbox.props";

const basic: CheckboxProps = {
  className: "checkbox",
  id: "checkbox",
  name: "checkbox",
};

const error: CheckboxProps = {
  ...basic,
  error: true,
};

/**
 * Sample prop definitions Checkbox's enumerable properties (imported in stories and test)
 */
const CheckboxArgs = {
  basic,
  error,
};

export default CheckboxArgs;
