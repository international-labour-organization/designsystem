import { ExoticComponent, forwardRef } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { Button } from "../Button";
import { CardTypes } from "../../types";

import { StatCard, StatCardProps } from "./StatCard";
import { MultiLinkCard, MultiLinkCardProps } from "./MultiLinkCard";
import { TextCard, TextCardProps } from "./TextCard";
import { PromoCard, PromoCardProps } from "./PromoCard";
import { FeatureCard, FeatureCardProps } from "./FeatureCard";
import { DetailCard, DetailCardProps } from "./DetailCard";
import { FactListCard, FactListCardProps } from "./FactListCard";
import { DataCard, DataCardProps } from "./DataCard";
import { LinkProps } from "../Link";

type CardPropsMap = {
  stat: StatCardProps;
  multilink: MultiLinkCardProps;
  text: TextCardProps;
  promo: PromoCardProps;
  feature: FeatureCardProps;
  detail: DetailCardProps;
  factlist: FactListCardProps;
  data: DataCardProps;
};

type CardGroupComponentProps<T extends CardTypes> = CardPropsMap[T];

export type CardGroupProps<T extends CardTypes> = {
  type: T;
  group: CardGroupComponentProps<T>[];
  cardCount: "one" | "two" | "three" | "four";
  cta?: LinkProps;
  collapsed?: boolean;
};

const cardMapper: Record<CardTypes, ExoticComponent> = {
  stat: StatCard,
  multilink: MultiLinkCard,
  text: TextCard,
  promo: PromoCard,
  feature: FeatureCard,
  detail: DetailCard,
  factlist: FactListCard,
  data: DataCard,
};

const CardGroup = forwardRef<HTMLDivElement, CardGroupProps<CardTypes>>(
  ({ type, group, cardCount = "one", cta, collapsed = false }, ref) => {
    const CardComponent = cardMapper[type];
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
      <div className={cardGroupClasses} ref={ref}>
        <div className={`${baseClass}--inner`}>
          {group.map((cardProps, index) => (
            <CardComponent key={index} {...cardProps} />
          ))}
        </div>
        {cta && (
          <div className={`${baseClass}--button-wrap`}>
            <Button
              link={{
                url: cta.url,
                label: cta.label!,
              }}
              type="secondary"
              size="medium"
            />
          </div>
        )}
      </div>
    );
  }
);

export { CardGroup };
