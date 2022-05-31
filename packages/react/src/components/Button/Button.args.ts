import { ButtonProps } from "./Button.props";

const large: ButtonProps = {
  callback: "",
  children: "",
  label: "Large Button",
  size: "large",
  target: "_blank",
  type: "primary",
  url: "#",
};

const medium: ButtonProps = {
  callback: "",
  children: "",
  label: "Medium Button",
  size: "medium",
  type: "primary",
  url: "#",
};

const small: ButtonProps = {
  callback: "",
  children: "",
  label: "Small Button",
  size: "small",
  type: "primary",
  url: "#",
};

const primary: ButtonProps = {
  callback: "",
  children: "",
  label: "Primary Button",
  size: "large",
  type: "primary",
  url: "",
};

const secondary: ButtonProps = {
  callback: "",
  children: "",
  label: "Secondary Button",
  size: "large",
  type: "secondary",
  url: "",
};

const tertiary: ButtonProps = {
  callback: "",
  children: "",
  label: "Tertiary Button",
  size: "large",
  type: "tertiary",
  url: "",
};

const disabled: ButtonProps = {
  callback: "",
  children: "",
  disabled: true,
  label: "Disabled Button",
  size: "large",
  type: "primary",
  url: "",
};

const iconleftlg: ButtonProps = {
  callback: "",
  children: "",
  icon: "close",
  label: "Icon on left",
  size: "large",
  type: "primary",
  url: "",
};

const iconleftm: ButtonProps = {
  callback: "",
  children: "",
  icon: "close",
  label: "Icon on left",
  size: "medium",
  type: "primary",
  url: "",
};

const iconleftsm: ButtonProps = {
  callback: "",
  children: "",
  icon: "close",
  label: "Icon on left",
  size: "small",
  type: "primary",
  url: "",
};

const iconrightlg: ButtonProps = {
  callback: "",
  children: "",
  icon: "close",
  iconPosition: "right",
  label: "Icon on right",
  size: "large",
  type: "primary",
  url: "",
};

const iconrightm: ButtonProps = {
  callback: "",
  children: "",
  icon: "close",
  iconPosition: "right",
  label: "Icon on right",
  size: "medium",
  type: "primary",
  url: "",
};

const iconrightsm: ButtonProps = {
  callback: "",
  children: "",
  icon: "close",
  iconPosition: "right",
  label: "Icon on right",
  size: "small",
  type: "primary",
  url: "",
};

/**
 * Sample prop definitions for Button's enumerable properties (imported in stories and tests).
 */
const ButtonArgs = {
  large,
  medium,
  small,
  primary,
  secondary,
  tertiary,
  disabled,
  iconleftlg,
  iconleftm,
  iconleftsm,
  iconrightlg,
  iconrightm,
  iconrightsm,
};

export default ButtonArgs;
