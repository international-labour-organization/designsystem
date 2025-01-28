import { ThemeTypes } from "../../types";
import { BreadcrumbProps } from "../Breadcrumb";
import { ImageProps } from "../Image/Image.props";
import { TooltipProps } from "../Tooltip/Tooltip.props";
import { HeroCardProps } from "./HeroCard.props";

export interface HeroProps {
  /**
   * Vertical alignment of the hero card
   */
  align?: "center" | "bottom" | "baseline";

  /**
   * Props to pass to the breadcrumb if there is one
   */
  breadcrumb?: BreadcrumbProps;

  /**
   * Caption to render in the hero card
   */
  caption?: TooltipProps;

  /**
   * Size the of hero card
   */
  cardSize?: "small" | "medium" | "large" | "xlarge" | "xxlarge";

  /**
   * Specify an optional className to be added to your Hero component.
   */
  className?: string;

  /**
   * Props for the image for the hero
   */
  image?: ImageProps;

  /**
   * How to justify the hero card
   */
  justify?: "start" | "center" | "offset";

  /**
   * Props for the card for the hero
   */
  heroCard: HeroCardProps;

  /**
   * Color of the gap space between bottom of the hero image and bottom of the card
   */
  gap?: "white" | "transparent" | "dark" | "light";

  /**
   * The size of the poster image
   */
  posterSize?: "small" | "medium" | "large" | "xlarge";

  /**
   * Theme for the card
   */
  theme?: ThemeTypes;
}
