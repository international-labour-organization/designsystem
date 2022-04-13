import { ButtonProps } from "./Button.props";

const large: ButtonProps = {
  callback: "",
  children: "",
  label: "Large Button",
  size: "large",
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
};

export default ButtonArgs;
