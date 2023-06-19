import { CheckboxProps } from "./Checkbox.props";

const NUMBER_CHECKBOXES = 3;

const basic: Omit<CheckboxProps, "id"> = {
  className: "checkbox",
  name: "checkbox",
};

const basicCheckBoxes = Array(NUMBER_CHECKBOXES).map((_, i) => ({
  ...basic,
  id: `checkbox-${i}`,
}));

const error: Omit<CheckboxProps, "id"> = {
  ...basic,
  error: true,
};

const errorCheckBoxes = Array(NUMBER_CHECKBOXES).map((_, i) => ({
  ...error,
  id: `checkbox-${i}`,
}));

const checked: Omit<CheckboxProps, "id"> = {
  ...basic,
  defaultChecked: true,
};

const checkedCheckBoxes = Array(NUMBER_CHECKBOXES).map((_, i) => ({
  ...checked,
  id: `checkbox-${i}`,
}));

/**
 * Sample prop definitions Checkbox's enumerable properties (imported in stories and test)
 */
const CheckboxArgs = {
  basic,
  basicCheckBoxes,
  error,
  errorCheckBoxes,
  checked,
  checkedCheckBoxes,
};

export default CheckboxArgs;
