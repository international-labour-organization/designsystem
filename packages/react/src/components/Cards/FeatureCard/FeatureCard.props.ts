import { ThemeTypes, CardSize, EventDate } from "../../../types";

import { LinkListProps } from "../../LinkList/LinkList.props";
export type FeatureCardProps = {
  isvideo?: boolean;

  /**
   * A line of text that appears as a small heading above the title of the card
   */
  eyebrow?: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * Will render the card to appear on light or dark backgrounds
   */
  theme?: ThemeTypes;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "standard">;

  /**
   * Specify the event Date, in both human and Unix format.
   */
  date?: EventDate;
  link?: string;
  linklist?: LinkListProps;

  /**
   * The image to show in the card
   */
  image?: string;
};
