import { ThemeTypes, CardSize, EventDate, HeadingTypes } from "../../../types";

import { ProfileProps } from "../../Profile/Profile.props";

export type TextCardProps = {
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
  titleElement?: HeadingTypes;

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
  profile: ProfileProps;
  link?: string;
};
