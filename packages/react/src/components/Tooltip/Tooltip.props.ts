import { TooltipThemes } from "../../types";

export interface TooltipProps {
  /**
   * Specify an optional className to be added to your Tooltip.
   */
  className?: string;

  /**
   * Should the tooltip appear on hover of an info icon?
   */
  icon?: boolean;

  /**
   * Set the id of the tooltip
   */
  id?: string;

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
  onMouseOver?: (e: React.MouseEventHandler<HTMLDivElement>) => any;

  /**
   * Callback fired onMouseOut
   */
  onMouseOut?: (e: React.MouseEventHandler<HTMLDivElement>) => any;

  /**
   * Describe the theme of the tooltip
   */
  theme?: Required<TooltipThemes>;

  /**
   * Set a width for the tooltip
   */
  width?: string;
}
