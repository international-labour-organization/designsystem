import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { CardGroupProps } from "./CardGroup.props";
import {
  FeatureCardProps,
  DataCardProps,
  DetailCardProps,
  FactlistCardProps,
  MultilinkCardProps,
  PromoCardProps,
  StatCardProps,
  TextCardProps,
} from "./Card.props";

import {
  FeatureCard,
  DataCard,
  DetailCard,
  FactlistCard,
  MultilinkCard,
  PromoCard,
  StatCard,
  TextCard,
} from ".";

const cardMapper: Record<string, FC<any>> = {
  stat: (props: StatCardProps) => <StatCard {...props} />,
  multilink: (props: MultilinkCardProps) => <MultilinkCard {...props} />,
  text: (props: TextCardProps) => <TextCard {...props} />,
  promo: (props: PromoCardProps) => <PromoCard {...props} />,
  feature: (props: FeatureCardProps) => <FeatureCard {...props} />,
  detail: (props: DetailCardProps) => <DetailCard {...props} />,
  factlist: (props: FactlistCardProps) => <FactlistCard {...props} />,
  data: (props: DataCardProps) => <DataCard {...props} />,
};

const CardGroup: FC<CardGroupProps> = ({ cards, cardcount, cta, type }) => {
  const Cards = cardMapper[type];
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--cardgroup`;
  const cardGroupClasses = classnames(
    baseClass,
    `${baseClass}__count__${cardcount}`
  );

  return (
    <div className={cardGroupClasses}>
      <div className={`${baseClass}--inner`}>
        {cards && cards.map((card, index) => <Cards key={index} {...card} />)}
      </div>
      {cta && (
        <div className={`${baseClass}--button-wrap`}>
          <a
            className={`${prefix}--button ${prefix}--button--medium ${prefix}--button--secondary`}
            href={cta.url}
          >
            <span className="button__label">{cta.label}</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default CardGroup;
