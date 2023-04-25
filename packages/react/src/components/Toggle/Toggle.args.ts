import { ToggleProps } from "./Toggle.props";

export const Default: ToggleProps = {
  defaultChecked: false,
  id: "my-toggle",
  size: "medium",
};

export const Checked: ToggleProps = {
  ...Default,
  defaultChecked: true,
};

export const Disabled: ToggleProps = {
  ...Default,
  disabled: true,
};

export const Error: ToggleProps = {
  ...Default,
  error: true,
};

export const DefaultChecked: ToggleProps = { ...Default, defaultChecked: true };

export const Controlled: ToggleProps = {
  ...Default,
  inputProps: { checked: true },
};

export const Large: ToggleProps = {
  ...Default,
  size: "large",
};

export const Medium: ToggleProps = {
  ...Default,
  size: "medium",
};

export const Small: ToggleProps = {
  ...Default,
  size: "small",
};
