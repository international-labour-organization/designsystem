import { FormControlProps } from "./FormControl.props";

const Default: Omit<FormControlProps, "children"> = {
  labelSize: "small",
  label: "Accept all cookies?",
  labelPlacement: "end",
};

export const LabelMedium: Omit<FormControlProps, "children"> = {
  ...Default,
  labelSize: "medium",
};

export const LabelLarge: Omit<FormControlProps, "children"> = {
  ...Default,
  labelSize: "large",
};

export const LabelAfter: Omit<FormControlProps, "children"> = {
  ...Default,
};

export const WithHelper: Omit<FormControlProps, "children"> = {
  ...Default,
  helper: "Just say yes",
};

export const LabelBefore: Omit<FormControlProps, "children"> = {
  ...Default,
  labelPlacement: "start",
};

export const LabelTop: Omit<FormControlProps, "children"> = {
  ...Default,
  labelPlacement: "top",
};

export const LabelBottom: Omit<FormControlProps, "children"> = {
  ...Default,
  labelPlacement: "bottom",
};

export const WithError: Omit<FormControlProps, "children"> = {
  ...Default,
  errorMessage: "Something went wrong",
};

export const Disabled: Omit<FormControlProps, "children"> = {
  ...Default,
};

export const WithTooltip: Omit<FormControlProps, "children"> = {
  ...LabelMedium,
  tooltip: "Cookies are bits of code that help our site run properly.",
};
