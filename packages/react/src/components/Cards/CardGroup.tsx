import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { CardGroupProps } from "./CardGroup.props";
import { Card } from ".";

const CardGroup: FC<CardGroupProps> = ({ cards, cardcount, cta }) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--cardgroup`;
  const cardGroupClasses = classnames(baseClass, `${baseClass}--${cardcount}`);

  return (
    <div className={cardGroupClasses}>
      <div className={`${baseClass}--inner`}>
        {cards &&
          cards.map((card) => (
            <Card
              title={card.title}
              image={card.image}
              intro={card.intro}
              eyebrow={card.eyebrow}
              date={card.date}
              dataset={card.dataset}
              link={card.link}
              profile={card.profile}
              cta={card.cta}
              source={card.source}
              listitems={card.listitems}
              linklist={card.linklist}
              color={card.color}
              theme={card.theme}
              cornercut={card.cornercut}
              alignment={card.alignment}
              type={card.type}
              size={card.size}
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
