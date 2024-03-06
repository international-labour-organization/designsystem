import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { TextCardProps } from "../Card.props";
import { Profile } from "../../Profile";

const TextCard: FC<TextCardProps> = ({
  eyebrow,
  title,
  theme,
  size,
  date,
  profile,
  link,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;

  const wrapperClass = classnames(`${baseClass}--wrapper`);

  const cardClasses = classnames(baseClass, `${baseClass}__type__text`, {
    [`${baseClass}__action`]: link,
    [`${baseClass}__size__${size}`]: size,
    [`${baseClass}__theme__${theme}`]: theme,
  });
  console.log("heloo");
  console.log(profile);
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
            {date && (
              <time className={`${baseClass}--date`} dateTime={date.unix}>
                {date.human}
              </time>
            )}
            {profile && profile.avatar && (
              <Profile
                avatar={profile.avatar}
                description={profile.description}
                link={profile.link}
                name={profile.name}
                role={profile.role}
                className={`${prefix}--profile--contents--${theme}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
