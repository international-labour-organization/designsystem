import { CardAlignment, CardSize, HeadingTypes } from "../../../types";
import { LinkListProps } from "../../LinkList/LinkList.props";

export interface MultilinkCardProps {
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
   * HTML element used for the title
   */
  titleLevel?: HeadingTypes;

  /**
   * How big should the card be
   */
  size?: CardSize;
  alignment?: CardAlignment;
  intro?: string;
  link?: string;
  linklist?: LinkListProps;

  /**
   * The image to show in the card
   */
  image?: string;
}
