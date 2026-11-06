import { LabelledTextareaProps, TextareaProps } from "./Textarea.props";

export const basic: LabelledTextareaProps = {
  id: "textarea",
  disabled: false,
  name: "textarea",
  placeholder:
    "It was a cold day in April and the clocks were striking thirteen....",
  required: false,
  spellcheck: false,
  label: "Insert your life story here",
  labelPlacement: "top",
  labelSize: "medium",
  style: { width: "100%" },
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
