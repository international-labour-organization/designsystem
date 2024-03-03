import { FC } from "react";
import { CardProps } from "./Card.props";
import DataCard from "./DataCard";
import DetailCard from "./DetailCard";
import FactlistCard from "./FactlistCard";
import FeatureCard from "./FeatureCard";
import MultilinkCard from "./MultilinkCard";
import PromoCard from "./PromoCard";
import StatCard from "./StatCard";
import TextCard from "./TextCard";

type ComponentMap = {
  [key: string]: FC<CardProps>;
};

const Card: FC<CardProps> = (combinedProps: CardProps) => {
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
  const { type } = combinedProps;

  const SelectedCardComponent = componentMap[type] || FeatureCard;
  return <SelectedCardComponent {...combinedProps} />;
};

export default Card;
