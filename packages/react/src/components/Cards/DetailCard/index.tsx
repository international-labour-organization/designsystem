import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { CardProps } from "../Card.props";

const DetailCard: FC<CardProps> = ({
  eyebrow,
  title,
  color,
  theme,
  size,
  cornercut,
  alignment,
  intro,
  date,
  eventdetails,
  link,
  image,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;

  const cardClasses = classnames(baseClass, `${baseClass}__type__detail`, {
    [`${baseClass}__color__${color}`]: color,
    [`${baseClass}__${cornercut}`]: cornercut,
    [`${baseClass}__align__${alignment}`]: alignment,
    [`${baseClass}__action`]: link,
    [`${baseClass}__size__${size}`]: size,
    [`${baseClass}__theme__${theme}`]: theme,
  });

  return (
    <div className={cardClasses}>
      {link && (
        <a className={`${baseClass}--link`} href={link} title={title}>
          <span className={`${baseClass}--link--text`}>{title}</span>
        </a>
      )}
      <div className={`${baseClass}--wrap`}>
        {image && (
          <div className={`${baseClass}--image--wrapper`}>
            <picture>
              <img
                className={`${baseClass}--picture`}
                src={image}
                alt={title}
              />
            </picture>
          </div>
        )}
        <div className={`${baseClass}--content`}>
          {eyebrow && <p className={`${baseClass}--eyebrow`}>{eyebrow}</p>}
          {title && <h5 className={`${baseClass}--title`}>{title}</h5>}
          {intro && <p className={`${baseClass}--intro`}>{intro}</p>}
          {date && (
            <time className={`${baseClass}--date`} dateTime={date.unix}>
              {date.human}
            </time>
          )}
          {eventdetails && (
            <p className={`${baseClass}--date-extra`}>{eventdetails}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
