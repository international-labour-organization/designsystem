import { CardSize, EventDate, HeadingTypes } from "../../../types";

export type DetailCardProps = {
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
   * Introductory text in the card
   */
  intro?: string;

  /**
   * Specify the event Date, in both human and Unix format.
   */
  date?: EventDate;

  /**
   * Information about an event
   */
  eventdetails?: string;

  /**
   * A URL to link to
   */
  link?: string;

  /**
   * The image to show in the card
   */
  image?: string;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "standard">;
};
