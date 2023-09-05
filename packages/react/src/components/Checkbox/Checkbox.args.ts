import { LabelledCheckboxProps } from "./Checkbox.props";

const NUMBER_CHECKBOXES = 3;

const basic: LabelledCheckboxProps = {
  label: "Checkbox",
  className: "checkbox",
  name: "checkbox",
};

const basicCheckBoxes = Array(NUMBER_CHECKBOXES).map((_, i) => ({
  ...basic,
  id: `checkbox-${i}`,
}));

const checked: LabelledCheckboxProps = {
  ...basic,
  defaultChecked: true,
};

const error: LabelledCheckboxProps = {
  ...basic,
  error: true,
};

const errorCheckBoxes = Array(NUMBER_CHECKBOXES).map((_, i) => ({
  ...error,
  id: `checkbox-${i}`,
}));

/**
 * Sample prop definitions Checkbox's enumerable properties (imported in stories and test)
 */
const CheckboxArgs = {
  basic,
  basicCheckBoxes,
  errorCheckBoxes,
  checked,
  error,
};

export default CheckboxArgs;
