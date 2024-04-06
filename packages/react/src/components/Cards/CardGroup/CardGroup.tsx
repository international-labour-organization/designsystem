import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { CardGroupProps } from "./CardGroup.props";
import { DataCard } from "../DataCard";
import { DetailCard } from "../DetailCard";
import { FactlistCard } from "../FactlistCard";
import { FeatureCard } from "../FeatureCard";
import { MultilinkCard } from "../MultilinkCard";
import { PromoCard } from "../PromoCard";
import { StatCard } from "../StatCard";
import { TextCard } from "../TextCard";

const cardMapper: Record<string, React.FC<any>> = {
  stat: StatCard,
  multilink: MultilinkCard,
  text: TextCard,
  promo: PromoCard,
  feature: FeatureCard,
  detail: DetailCard,
  factlist: FactlistCard,
  data: DataCard,
};

const CardGroup: FC<CardGroupProps> = ({
  cards,
  titleLevel = "p",
  cardCount,
  cta,
  type,
  alignment,
  size,
  theme,
  collapsed = false,
}) => {
  const Card = cardMapper[type];
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--cardgroup`;
  const cardGroupClasses = classnames(
    baseClass,
    `${baseClass}__count__${cardCount}`,
    {
      [`${baseClass}__collapsed`]: collapsed,
    }
  );

  return (
    <div className={cardGroupClasses}>
      <div className={`${baseClass}--inner`}>
        {cards &&
          cards.map((card, index) => (
            <Card
              key={index}
              {...card}
              size={size}
              theme={theme}
              alignment={alignment}
              titleLevel={titleLevel}
            />
          ))}
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
