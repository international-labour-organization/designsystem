import { tooltipAlignment, tooltipPlacement, tooltipThemes } from "../../types";

export interface TooltipProps {
  /**
   * Describe the placement of the Tooltip
   */
  placement?: tooltipPlacement;

  /**
   * Describe the placement of the Tooltip
   */
  alignment?: tooltipAlignment;

  /**
   * Specify the content of your Button.
   */
  children?: ReactNode;

  /**
   * Specify an optional className to be added to your Tooltip.
   */
  className?: string;

  /**
   * Callback fired onMouseOver
   */
  onMouseOver?: function;

  /**
   * Callback fired onMouseOut
   */
  onMouseOut?: function;

  /**
   * Describe the theme of the tooltip
   */
  theme?: tooltipThemes;
}
