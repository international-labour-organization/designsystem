import { LinkProps } from "../../LinkList/LinkList.props";
import { StatCardProps } from "../StatCard";
import { MultilinkCardProps } from "../MultilinkCard";
import { TextCardProps } from "../TextCard";
import { PromoCardProps } from "../PromoCard";
import { FeatureCardProps } from "../FeatureCard";
import { DetailCardProps } from "../DetailCard";
import { FactlistCardProps } from "../FactlistCard";
import { DataCardProps } from "../DataCard";
import {
  HeadingTypes,
  CardSize,
  ThemeTypes,
  CardAlignment,
} from "../../../types";

export interface CommonCardGroupProps {
  /**
   *Collapsed - Optionally collapses margins between the cards.
   *Option keys: true, false
   */

  collapsed?: boolean;

  /**
   *Number of cards in the group
   */
  cardCount: string;

  /**
   *Size - Sets the layout of the cards in the group. See the Card component for more info on this setting, which has different effects on the different types of cards.
   *Option keys: standard, narrow, wide, fluid
   */

  size: CardSize;

  /**
   *Alignment - Positions the image to the right or to the left of the content when the card is displayed in a wide or fluid size. Has no effect if the card is displayed in a standard or narrow size. Only used by `Multilink Card`.
   *Option keys: left, right
   */

  alignment?: CardAlignment;

  /**
   *Set the title level for all the cards in the group
   */
  titleLevel?: HeadingTypes;

  /**
   *A Button to display after all the cards in the group
   */
  cta?: LinkProps;

  /**
   *Theme - Sets all of the cards to appear as either light or dark. Used by all card groups except for Multilink Card, Data Card and Stat Card.
   *Option keys: dark, light
   */
  theme?: ThemeTypes;
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
