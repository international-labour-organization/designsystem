import { LinkProps } from "../../LinkList/LinkList.props";
import { StatCardProps } from "../StatCard";
import { MultilinkCardProps } from "../MultilinkCard";
import { TextCardProps } from "../TextCard";
import { PromoCardProps } from "../PromoCard";
import { FeatureCardProps } from "../FeatureCard";
import { DetailCardProps } from "../DetailCard";
import { FactlistCardProps } from "../FactlistCard";
import { DataCardProps } from "../DataCard";

export interface CommonCardGroupProps {
  /**
   * Number of cards in the group
   */
  cardCount: string;

  /**
   * A Button to display after all the cards in the group
   */
  cta?: LinkProps;
}

export interface StatCardGroup extends CommonCardGroupProps {
  /**
   * Type of card group, always "stat" for stat card groups.
   */
  type: "stat";

  /**
   * An array of statcard objects.
   */
  cards: StatCardProps[];
}

export interface MultilinkCardGroup extends CommonCardGroupProps {
  /**
   * Type of card group, always "multilink" for multi link card groups.
   */
  type: "multilink";

  /**
   * An array of multilinkcard objects
   */
  cards: MultilinkCardProps[];
}

export interface TextCardGroup extends CommonCardGroupProps {
  /**
   * Type of card group, always "text" for text card groups.
   */
  type: "text";

  /**
   * An array of textcard objects.
   */
  cards: TextCardProps[];
}

export interface PromoCardGroup extends CommonCardGroupProps {
  /**
   * Type of card group, always "promo" for promo card groups.
   */
  type: "promo";

  /**
   * An array of promocard objects.
   */
  cards: PromoCardProps[];
}

export interface FeatureCardGroup extends CommonCardGroupProps {
  /**
   * Type of card group, always "feature" for feature card groups.
   */
  type: "feature";

  /**
   * An array of featurecard objects.
   */
  cards: FeatureCardProps[];
}

export interface DetailCardGroup extends CommonCardGroupProps {
  /**
   * Type of card group, always "detail" for detail card groups.
   */
  type: "detail";

  /**
   * An array of detailcard objects.
   */
  cards: DetailCardProps[];
}

export interface FactlistCardGroup extends CommonCardGroupProps {
  /**
   * Type of card group, always "factlist" for factlist card groups.
   */
  type: "factlist";

  /**
   * An array of factlistcard objects.
   */
  cards: FactlistCardProps[];
}

export interface DataCardGroup extends CommonCardGroupProps {
  /**
   * Type of card group, always "data" for data card groups.
   */
  type: "data";

  /**
   * An array of datacard objects.
   */
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
