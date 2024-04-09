import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { MultilinkCardProps } from "./MultilinkCard.props";
import { LinkList } from "../../LinkList";

const MultilinkCard: FC<MultilinkCardProps> = ({
  isvideo,
  eyebrow,
  title,
  size = "standard",
  alignment,
  intro,
  link,
  linklist,
  image,
  titleLevel: TitleElement,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;

  const cardClasses = classnames(baseClass, `${baseClass}__type__multilink`, {
    [`${baseClass}__align__${alignment}`]: alignment,
    [`${baseClass}__action`]: link,
    [`${baseClass}__size__${size}`]: size,
    [`${baseClass}__isvideo`]: isvideo,
    [`${baseClass}__linklist`]: linklist,
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
          {title && TitleElement ? (
            <TitleElement className={`${baseClass}--title`}>
              {title}
            </TitleElement>
          ) : (
            <p className={`${baseClass}--title`}>{title}</p>
          )}
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
