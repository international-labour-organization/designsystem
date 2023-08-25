import { LabelledTextareaProps, TextareaProps } from "./Textarea.props";

const placeholder =
  "It was a cold day in April and the clocks were striking thirteen....";

export const basic: LabelledTextareaProps = {
  id: "textarea",
  disabled: false,
  name: "textarea",
  placeholder,
  required: false,
  spellcheck: false,
  label: "Insert your life story here",
  labelPlacement: "top" as const,
  labelSize: "medium" as const,
  formControlStyle: { width: "100%" },
  errorMessage: "This is an error message",
};

export const haserror: TextareaProps = {
  ...basic,
  error: true,
};

export const disabled: TextareaProps = {
  ...basic,
  disabled: true,
};

export default {
  basic,
  haserror,
  disabled,
};
