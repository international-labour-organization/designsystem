import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { FeatureCardProps } from "./FeatureCard.props";
import { LinkList } from "../../LinkList";

const FeatureCard: FC<FeatureCardProps> = ({
  isvideo,
  eyebrow,
  title,
  theme,
  size = "narrow",
  date,
  link,
  linklist,
  image,
  titleLevel: TitleElement,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;

  const cardClasses = classnames(baseClass, `${baseClass}__type__feature`, {
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
          {title && TitleElement ? (
            <TitleElement className={`${baseClass}--title`}>
              {title}
            </TitleElement>
          ) : (
            <p className={`${baseClass}--title`}>{title}</p>
          )}
          {date && (
            <time className={`${baseClass}--date`} dateTime={date.unix}>
              {date.human}
            </time>
          )}
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

export default FeatureCard;
