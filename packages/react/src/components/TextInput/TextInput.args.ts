import { TextInputProps } from "./TextInput.props";

export const basic: TextInputProps = {
  id: "text-input",
  disabled: false,
  error: false,
  name: "text",
  placeholder: "This is a text field",
  required: false,
  type: "text",
};

export const isdisabled: TextInputProps = {
  id: "text-input",
  disabled: true,
  error: false,
  name: "text",
  placeholder: "Disabled Text Field",
  required: false,
  type: "text",
};

export const hashelper: TextInputProps = {
  id: "text-input",
  disabled: false,
  error: false,
  name: "text",
  placeholder: "Helper Text Field",
  required: false,
  type: "text",
};

export const haserror: TextInputProps = {
  id: "text-input",
  disabled: false,
  error: "This one has an error",
  name: "text",
  placeholder: "Error Text Field",
  required: false,
  type: "text",
};

export const hastooltip: TextInputProps = {
  id: "text-input",
  disabled: false,
  error: false,
  name: "text",
  placeholder: "Tooltip Text Field",
  required: false,
  type: "text",
};

export const email: TextInputProps = {
  id: "text-input",
  disabled: false,
  error: false,
  name: "email",
  placeholder: "Email Field",
  required: false,
  type: "email",
};

export const hidden: TextInputProps = {
  id: "text-input",
  disabled: false,
  error: false,
  name: "hidden",
  required: false,
  type: "hidden",
};

export const password: TextInputProps = {
  id: "text-input",
  disabled: false,
  error: false,
  name: "password",
  placeholder: "Password Field",
  required: false,
  type: "password",
};

export const tel: TextInputProps = {
  id: "text-input",
  disabled: false,
  error: false,
  name: "tel",
  placeholder: "###-###-####",
  required: false,
  type: "tel",
  pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
};

export const url: TextInputProps = {
  id: "text-input",
  disabled: false,
  error: false,
  name: "url",
  placeholder: "URL Field",
  required: false,
  type: "url",
};
