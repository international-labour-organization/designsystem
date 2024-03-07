import { FC } from "react";
import { CardProps } from "./Card.props";
import {
  DataCard,
  DetailCard,
  FactlistCard,
  FeatureCard,
  MultilinkCard,
  PromoCard,
  StatCard,
  TextCard,
} from ".";

type ComponentMap = {
  [key: string]: FC<any>;
};

const Card: FC<CardProps> = (props: CardProps) => {
  const componentMap: ComponentMap = {
    data: DataCard,
    detail: DetailCard,
    factlist: FactlistCard,
    featurecard: FeatureCard,
    multilink: MultilinkCard,
    promo: PromoCard,
    stat: StatCard,
    text: TextCard,
  };

  const { type } = props;

  const SelectedCardComponent = componentMap[type] || FeatureCard;
  return <SelectedCardComponent {...props} />;
};

export default Card;
