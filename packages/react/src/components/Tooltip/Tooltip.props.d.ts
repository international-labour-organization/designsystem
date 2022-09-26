import { tooltipAlignment, tooltipPlacement, tooltipThemes } from "../../types";

export interface TooltipProps {
  /**
   * Specify the content of your Tooltip.
   */
  children?: ReactNode;

  /**
   * Specify an optional className to be added to your Tooltip.
   */
  className?: string;

  /**
   * Should the tooltip appear on hover of an info icon?
   */
  icon?: boolean;

  /**
   * Set the label for the tooltip
   */
  label?: Required<string>;

  /**
   * Set whether the tooltip is visible or not
   */
  isVisible?: boolean;

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
  theme?: Required<tooltipThemes>;

  /**
   * Set a width for the tooltip
   */
  width?: string;
}
