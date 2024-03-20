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
  cardCount: string;
  cta?: LinkProps;
}

export interface StatCardGroup extends CommonCardGroupProps {
  type: "stat";
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
