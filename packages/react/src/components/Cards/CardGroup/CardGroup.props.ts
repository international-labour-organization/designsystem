import { LinkProps } from "../../LinkList/LinkList.props";
import { StatCardProps } from "../StatCard";
import { MultilinkCardProps } from "../MultilinkCard";
import { TextCardProps } from "../TextCard";
import { PromoCardProps } from "../PromoCard";
import { FeatureCardProps } from "../FeatureCard";
import { DetailCardProps } from "../DetailCard";
import { FactlistCardProps } from "../FactlistCard";
import { DataCardProps } from "../DataCard";
import { HeadingTypes } from "../../../types";

export interface CommonCardGroupProps {
  /**
   * Number of cards in the group
   */
  cardCount: string;

  /**
   * Set the title level for all the cards in the group
   */
  titleLevel?: HeadingTypes;

  /**
   * A Button to display after all the cards in the group
   */
  cta?: LinkProps;
}

export interface StatCardGroup extends CommonCardGroupProps {
  /**
   * Represents different types of card groups:
   */
  type: "stat";

  /**
   * An array of card objects corresponding to the respective card type:
   */
  cards: StatCardProps[];
}

export interface MultilinkCardGroup extends CommonCardGroupProps {
  type: "multilink";
  cards: MultilinkCardProps[];
}

export interface TextCardGroup extends CommonCardGroupProps {
  type: "text";
  cards: TextCardProps[];
}

export interface PromoCardGroup extends CommonCardGroupProps {
  type: "promo";
  cards: PromoCardProps[];
}

export interface FeatureCardGroup extends CommonCardGroupProps {
  type: "feature";
  cards: FeatureCardProps[];
}

export interface DetailCardGroup extends CommonCardGroupProps {
  type: "detail";
  cards: DetailCardProps[];
}

export interface FactlistCardGroup extends CommonCardGroupProps {
  type: "factlist";
  cards: FactlistCardProps[];
}

export interface DataCardGroup extends CommonCardGroupProps {
  type: "data";
  titleLevel?: never;
  cards: DataCardProps[];
}

export type CardGroupProps =
  | StatCardGroup
  | MultilinkCardGroup
  | TextCardGroup
  | PromoCardGroup
  | FeatureCardGroup
  | DetailCardGroup
  | FactlistCardGroup
  | DataCardGroup;
