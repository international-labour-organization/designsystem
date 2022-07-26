import { TooltipProps } from "./Tooltip.props";

const tooltip: TooltipProps = {
  children: "<button>test<button>",
  alignment: "top", // "top" | "right" | "bot" | "left";
  label: "This is a tooltip",
  placement: "negative", // "negative" | "middle" | "positive";
  theme: "dark", // "light" | "dark" ;
  isVisible: false,
};

/**
 * Sample prop definitions for Tooltip's enumerable properties (imported in stories and tests).
 */
const tooltipArgs = {
  tooltip,
};

export default tooltipArgs;
