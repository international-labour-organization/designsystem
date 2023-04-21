import { CardProps } from "../Card/Card.props";
import { LinkProps } from "../LinkList/LinkList.props";

export interface CardGroupProps {
  /**
   * An array of card objects
   */
  cards?: Required<CardProps>[];

  /**
   * Number of cards in the group
   */
  cardcount: Required<string>;

  /**
   * A Button to display after all the cards in the group
   */
  cta?: LinkProps;
}
