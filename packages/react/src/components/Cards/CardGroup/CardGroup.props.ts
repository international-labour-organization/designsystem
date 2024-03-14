import { DataCardProps } from "../DataCard/DataCard.props";
import { DetailCardProps } from "../DetailCard/DetailCard.props";
import { FactlistCardProps } from "../FactlistCard/FactListCard.props";
import { FeatureCardProps } from "../FeatureCard/FeatureCard.props";
import { MultilinkCardProps } from "../MultilinkCard/MultilinkCard.props";
import { PromoCardProps } from "../PromoCard/PromoCard.props";
import { StatCardProps } from "../StatCard/StatCard.props";
import { TextCardProps } from "../TextCard/TextCard.props";
import { LinkProps } from "../../LinkList/LinkList.props";
import { CardTypes } from "../../../types";

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
