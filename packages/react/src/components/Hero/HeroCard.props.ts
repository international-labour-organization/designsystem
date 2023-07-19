import { ThemeTypes } from "../../types";
import { SocialMediaProps } from "../SocialMedia";

export interface HeroCardProps {
  /**
   * Specify whether the background should be solid, transparent or semi-transparent
   */
  background?: "solid" | "transparent" | "semi-transparent";

  /**
   * Specify an optional className to be added to your Hero component.
   */
  className?: string;

  /**
   * Whether the card should have a cornercut or not
   */
  cornercut?: boolean;

  /**
   * date copy for the hero card
   */
  datecopy?: string;

  /**
   * eyebrow copy for the hero card
   */
  eyebrow?: string;

  /**
   * body copy for the hero card
   */
  intro?: string;

  /**
   * Specify the links to be displayed in this link group
   */
  socialmedia?: SocialMediaProps;

  /**
   * Title for the page
   */
  title: string;

  /**
   * Theme for the card
   */
  theme?: ThemeTypes;

  /**
   * The link of the card's title if it has one
   */
  url?: string;
}
