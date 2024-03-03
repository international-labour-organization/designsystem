import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { CardProps } from "../Card.props";
import { LinkList } from "../../LinkList";

const MultilinkCard: FC<CardProps> = ({
  isvideo,
  eyebrow,
  title,
  color,
  theme,
  size,
  cornercut,
  alignment,
  intro,
  link,
  linklist,
  image,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;

  const cardClasses = classnames(baseClass, `${baseClass}__type__multilink`, {
    [`${baseClass}__color__${color}`]: color,
    [`${baseClass}__${cornercut}`]: cornercut,
    [`${baseClass}__align__${alignment}`]: alignment,
    [`${baseClass}__action`]: link,
    [`${baseClass}__size__${size}`]: size,
    [`${baseClass}__isvideo`]: isvideo,
    [`${baseClass}__linklist`]: linklist,
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
          {intro && <p className={`${baseClass}--intro`}>{intro}</p>}
          {linklist && (
            <LinkList
              headline={linklist.headline}
              linkgroup={linklist.linkgroup}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MultilinkCard;
