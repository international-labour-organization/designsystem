import { TextareaProps } from "./Textarea.props";

const placeholder =
  "It was a cold day in April and the clocks were striking thirteen....";

export const basic: TextareaProps = {
  id: "textarea",
  disabled: false,
  name: "textarea",
  placeholder,
  required: false,
  spellcheck: false,
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
