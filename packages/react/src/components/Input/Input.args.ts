import { InputProps } from "./Input.props";

const basic: InputProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: false,
  label: "Text Field Label",
  name: "text",
  placeholder: "Text Field",
  required: false,
  type: "text",
};

const isdisabled: InputProps = {
  callback: () => {},
  disabled: true,
  error: false,
  helper: "This one has helper text",
  label: "Disabled Text Field Label",
  name: "text",
  placeholder: "Disabled Text Field",
  required: false,
  type: "text",
};

const hashelper: InputProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: "This one has helper text",
  label: "Text Field Label",
  name: "text",
  placeholder: "Helper Text Field",
  required: false,
  type: "text",
};

const haserror: InputProps = {
  callback: () => {},
  disabled: false,
  error: "This one has an error",
  helper: false,
  label: "Text Field Label",
  name: "text",
  placeholder: "Error Text Field",
  required: false,
  type: "text",
};

const hastooltip: InputProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: false,
  label: "Text Field Label",
  name: "text",
  placeholder: "Tooltip Text Field",
  required: false,
  tooltip: "Here is the tooltip",
  type: "text",
};

const email: InputProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: false,
  label: "Email Field Label",
  name: "email",
  placeholder: "Email Field",
  required: false,
  type: "email",
};

const hidden: InputProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: false,
  label: "Hidden Field Label",
  name: "hidden",
  required: false,
  type: "hidden",
};

const password: InputProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: false,
  label: "Password Field Label",
  name: "password",
  placeholder: "Password Field",
  required: false,
  type: "email",
};

const tel: InputProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: false,
  label: "Telephone Field Label",
  name: "tel",
  placeholder: "Telephone Field",
  required: false,
  type: "tel",
};

const url: InputProps = {
  callback: () => {},
  disabled: false,
  error: false,
  helper: false,
  label: "URL Field Label",
  name: "url",
  placeholder: "URL Field",
  required: false,
  type: "url",
};

/**
 * Sample prop definitions Input's enumerable properties (imported in stories and test)
 */
const InputArgs = {
  basic,
  isdisabled,
  hashelper,
  haserror,
  hastooltip,
  email,
  hidden,
  password,
  tel,
  url,
};

export default InputArgs;
