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

/**
 * Sample prop definitions for Button's enumerable properties (imported in stories and tests).
 */
const ButtonArgs = {
  large,
  medium,
  small,
};

export default ButtonArgs;
