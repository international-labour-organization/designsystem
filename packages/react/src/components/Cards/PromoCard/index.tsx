import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { CardProps } from "../Card.props";

const PromoCard: FC<CardProps> = ({
  eyebrow,
  title,
  color,
  theme,
  size,
  cornercut,
  alignment,
  intro,
  link,
  cta,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;

  const wrapperClass = classnames(
    `${baseClass}--wrapper`,
    `${baseClass}--wrapper__type__promo ${baseClass}--wrapper__type__promo__size__${size}`
  );

  const cardClasses = classnames(baseClass, `${baseClass}__type__promo`, {
    [`${baseClass}__color__${color}`]: color,
    [`${baseClass}__${cornercut}`]: cornercut,
    [`${baseClass}__align__${alignment}`]: alignment,
    [`${baseClass}__action`]: link,
    [`${baseClass}__size__${size}`]: size,
    [`${baseClass}__theme__${theme}`]: theme,
  });

  return (
    <div className={wrapperClass}>
      <div className={cardClasses}>
        {link && (
          <a className={`${baseClass}--link`} href={link} title={title}>
            <span className={`${baseClass}--link--text`}>{title}</span>
          </a>
        )}
        <div className={`${baseClass}--wrap`}>
          <div className={`${baseClass}--content`}>
            {eyebrow && <p className={`${baseClass}--eyebrow`}>{eyebrow}</p>}
            {title && <h5 className={`${baseClass}--title`}>{title}</h5>}
            {intro && <p className={`${baseClass}--intro`}>{intro}</p>}
            {cta && cta.label && (
              <a
                className={`${baseClass}--cta ${prefix}--button ${prefix}--button--medium ${prefix}--button--primary`}
                href={cta.url}
              >
                <span className="link__label">{cta.label}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
