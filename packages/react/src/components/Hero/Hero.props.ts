import { HeroCardTheme, HeroCardTypes } from "../../types";
import { ImageProps } from "../Image/Image.props";
import { HeroCardProps } from "./HeroCard.props";

export interface HeroProps {
  /**
   * Specify an optional className to be added to your Hero component.
   */
  className?: string;

  /**
   * Props for the image for the hero
   */
  image?: ImageProps;

  /**
   * Props for the card for the hero
   */
  heroCard?: HeroCardProps;

  /**
   * Theme for the card
   */
  theme?: HeroCardTheme;

  /**
   * Type of hero for the card
   */
  types?: HeroCardTypes;
}
