import {
  ThemeTypes,
  CardCornerType,
  CardSize,
  HeadingTypes,
} from "../../../types";
import { LinkProps } from "../../LinkList/LinkList.props";

export type PromoCardProps = {
  /**
   * A line of text that appears as a small heading above the title of the card
   */
  eyebrow?: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * HTML element used for the title
   */
  titleLevel?: HeadingTypes;

  /**
   * Will render the card to appear on light or dark backgrounds
   */
  theme?: ThemeTypes;

  /**
   * How big should the card be
   */
  size?: CardSize;

  /**
   * Apply an optional corner cut to the top of the card
   */
  cornercut?: CardCornerType;

  /**
   * Introductory text in the card
   */
  intro?: string;
  link?: string;
  cta?: LinkProps;
};
