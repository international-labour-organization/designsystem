import {
  DataCardProps,
  DetailCardProps,
  FactlistCardProps,
  FeatureCardProps,
  MultilinkCardProps,
  PromoCardProps,
  StatCardProps,
  TextCardProps,
} from "./Card.props";
import { LinkProps } from "../LinkList/LinkList.props";
import { CardTypes } from "../../types";

type CardProps =
  | DataCardProps
  | DetailCardProps
  | FactlistCardProps
  | FeatureCardProps
  | MultilinkCardProps
  | PromoCardProps
  | StatCardProps
  | TextCardProps;

export interface CardGroupProps {
  /**
   * An array of card objects
   */
  cards: CardProps[];
  /**
   * Number of cards in the group
   */
  cardcount: Required<string>;

  /**
   * A Button to display after all the cards in the group
   */
  cta?: LinkProps;

  /**
   * Type of cards in the cardgroup
   */
  type: CardTypes;
}
