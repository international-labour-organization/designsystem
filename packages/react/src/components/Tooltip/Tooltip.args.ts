import { TooltipProps } from "./Tooltip.props";

const tooltip: TooltipProps = {
  children: "Tooltip",
  alignment: "top", // "top" | "right" | "bot" | "left";
  placement: "negative", // "negative" | "middle" | "positive";
  theme: "dark", // "light" | "dark" ;
};

/**
 * Sample prop definitions for Tooltip's enumerable properties (imported in stories and tests).
 */
const tooltipArgs = {
  tooltip,
};

export default tooltipArgs;
