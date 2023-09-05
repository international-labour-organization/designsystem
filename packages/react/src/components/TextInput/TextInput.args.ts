import { LabelledTextInputProps } from "./TextInput.props";

export const basic: LabelledTextInputProps = {
  disabled: false,
  errorMessage: "This is an error message",
  error: false,
  style: { width: "100%" },
  id: "text-input",
  label: "Insert your name here",
  labelPlacement: "top",
  labelSize: "medium",
  name: "text",
  placeholder: "This is a text field",
  required: false,
  type: "text",
};

export const isdisabled: LabelledTextInputProps = {
  ...basic,
  disabled: true,
  placeholder: "Disabled Text Field",
};

export const hashelper: LabelledTextInputProps = {
  ...basic,
  placeholder: "This has a helper text",
};

export const haserror: LabelledTextInputProps = {
  ...basic,
  placeholder: "This has an error",
  error: true,
};

export const hastooltip: LabelledTextInputProps = {
  ...basic,
  placeholder: "This has an tooltip",
  tooltip: "This is a tooltip",
};

export const email: LabelledTextInputProps = {
  ...basic,
  label: "Enter your email address",
  placeholder: "my@email.com",
  type: "email",
  id: "email-input",
};

export const password: LabelledTextInputProps = {
  ...basic,
  label: "Enter your password",
  placeholder: "Must be 8 digits long",
  type: "password",
  id: "password-input",
};

export const telephone: LabelledTextInputProps = {
  ...basic,
  name: "tel",
  label: "Enter your telephone number",
  placeholder: "###-###-####",
  required: false,
  type: "tel",
  pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
};

export const url: LabelledTextInputProps = {
  ...basic,
  label: "Enter website address",
  id: "url-input",
  name: "url",
  placeholder: "https://www.example.com",
  required: false,
  type: "url",
};
