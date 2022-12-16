import { TooltipProps } from "./Tooltip.props";

const light: TooltipProps = {
  label: "This is a tooltip",
  theme: "light", // "light" | "dark" ;
  isVisible: false,
};

const lighticon: TooltipProps = {
  icon: true,
  label: "This is a tooltip",
  theme: "light", // "light" | "dark" ;
  isVisible: false,
};

const dark: TooltipProps = {
  label: "This is a tooltip",
  theme: "dark", // "light" | "dark" ;
  isVisible: false,
};

const darkicon: TooltipProps = {
  icon: true,
  label: "This is a tooltip",
  theme: "dark", // "light" | "dark" ;
  isVisible: false,
};

/**
 * Sample prop definitions for Tooltip's enumerable properties (imported in stories and tests).
 */
const tooltipArgs = {
  light,
  lighticon,
  dark,
  darkicon,
};

export default tooltipArgs;
