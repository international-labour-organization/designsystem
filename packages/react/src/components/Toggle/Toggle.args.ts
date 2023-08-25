import { LabelledToggleProps } from "./Toggle.props";

export const Default: LabelledToggleProps = {
  defaultChecked: false,
  errorMessage: "Invalid option",
  name: "my-toggle",
  size: "medium",
  label: "Show details",
  labelPlacement: "end",
  labelSize: "small",
};

export const Checked: LabelledToggleProps = {
  ...Default,
  defaultChecked: true,
};

export const Disabled: LabelledToggleProps = {
  ...Default,
  disabled: true,
};

export const Helper: LabelledToggleProps = {
  ...Default,
  helper: "This is a helper text",
};

export const Tooltip: LabelledToggleProps = {
  ...Helper,
  tooltip: "This is a tooltip",
};

export const Error: LabelledToggleProps = {
  ...Default,
  error: true,
};

export const DefaultChecked: LabelledToggleProps = {
  ...Default,
  defaultChecked: true,
};

export const Controlled: LabelledToggleProps = {
  ...Default,
  onClick: () => console.log("clicked"),
  checked: true,
};

export const Large: LabelledToggleProps = {
  ...Default,
  size: "large",
};

export const Medium: LabelledToggleProps = {
  ...Default,
  size: "medium",
};

export const Small: LabelledToggleProps = {
  ...Default,
  size: "small",
};
