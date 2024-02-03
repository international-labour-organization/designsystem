import { ButtonProps } from "./Button.props";

const primary: ButtonProps = {
  type: "primary",
  label: "Primary",
  size: "medium",
  name: "primary",
};
const secondary: ButtonProps = {
  type: "secondary",
  label: "Secondary",
  name: "secondary",
};
const tertiary: ButtonProps = {
  type: "tertiary",
  label: "Tertiary",
  name: "tertiary",
};
const alert: ButtonProps = { type: "alert", label: "Alert", name: "alert" };
const icon: ButtonProps = { type: "primary", label: "Icon", icon: "close" };
const disabled: ButtonProps = {
  type: "primary",
  label: "Disabled",
  disabled: true,
};
const link: ButtonProps = {
  type: "primary",
  icon: "arrowright",
  iconPosition: "right",
  label: "Visit ilo.org",
  url: "https://www.ilo.org",
  target: "__blank",
};

export default { primary, secondary, tertiary, alert, icon, disabled, link };
