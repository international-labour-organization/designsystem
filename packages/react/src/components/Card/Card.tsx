import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { CardProps } from "./Card.props";
import { Link } from "../Link";
import { List, ListItem } from "../List";
import { LinkList } from "../LinkList";
import { Profile } from "../Profile";

const Card: FC<CardProps> = ({
  isvideo,
  eyebrow,
  title,
  color,
  theme,
  variant,
  size,
  cornercut,
  alignment,
  intro,
  date,
  eventdetails,
  profile,
  listitems,
  link,
  linklist,
  cta,
  image,
  source,
  dataset,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;
  const cardClasses = classnames(
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${color}`,
    {
      [`${baseClass}--${cornercut}`]: cornercut,
      [`${baseClass}--${alignment}`]: alignment,
      [`${baseClass}--action`]: link,
      [`${baseClass}--${size}`]: size,
      [`${baseClass}--isvideo`]: isvideo,
      [`${baseClass}--linklist`]: linklist,
      [`${baseClass}--${theme}`]: theme,
    }
  );

  return (
    <div className={cardClasses}>
      {link &&
        variant != "data" &&
        variant != "factlist" &&
        variant != "stat" && (
          <a className={`${baseClass}--link`} href={link} title={title}>
            <span className={`${baseClass}--link--text`}>{title}</span>
          </a>
        )}
      <div className={`${baseClass}--wrap`}>
        {image && (
          <div className={`${baseClass}--image--wrapper`}>
            <picture>
              <img className={`${baseClass}--image`} src={image} alt={title} />
            </picture>
          </div>
        )}
        <div className={`${baseClass}--content`}>
          {eyebrow && <p className={`${baseClass}--eyebrow`}>{eyebrow}</p>}
          {title && <h5 className={`${baseClass}--title`}>{title}</h5>}
          {(variant == "multilink" || (variant == "data" && image)) && (
            <div className={`${baseClass}--image--wrapper`}>
              <picture>
                <img
                  className={`${baseClass}--image`}
                  src={image}
                  alt={title}
                />
              </picture>
            </div>
          )}
          {intro && <p className={`${baseClass}--intro`}>{intro}</p>}
          {date &&
            variant != "stat" &&
            variant != "data" &&
            variant != "graphicpromo" &&
            variant != "factlist" && (
              <time className={`${baseClass}--date`} dateTime={date.unix}>
                {date.human}
              </time>
            )}
          {eventdetails && (
            <p className={`${baseClass}--event-date`}>{eventdetails}</p>
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
          {listitems && (
            <List alignment="default" ordered="unordered">
              {listitems.map((item, index) => (
                <ListItem id={`list${index}`}>
                  <p>{item}</p>
                </ListItem>
              ))}
            </List>
          )}
          {cta && cta.label && (
            <a
              className={`${baseClass}--cta ${prefix}--button ${prefix}--button--medium ${prefix}--button--primary`}
              href={cta.url}
            >
              <span className="link__label">{cta.label}</span>
            </a>
          )}
          {source && (
            <Link theme={theme} url={source.url}>
              {source.label}
            </Link>
          )}
          {linklist && (
            <LinkList
              headline={linklist.headline}
              linkgroup={linklist.linkgroup}
            />
          )}
          {dataset &&
            dataset.content &&
            dataset.content.items &&
            dataset.content.items.map((item) => (
              <>
                <p className={`${baseClass}--data--content-label`}>
                  {item.label}
                </p>
                <p className={`${baseClass}--data--content-copy`}>
                  {item.copy}
                </p>
              </>
            ))}
          {dataset && dataset.files && (
            <div className={`${baseClass}--data--content-files`}>
              <p className={`${baseClass}--data--content-label`}>
                {dataset.files.headline}
              </p>
              {dataset.files.items &&
                dataset.files.items.map((item) => (
                  <a
                    className={`${baseClass}--data--file ${prefix}--button ${prefix}--button--primary ${prefix}--button--small`}
                    href={item.url}
                    download
                  >
                    <span className="button__label">{item.label}</span>
                  </a>
                ))}
            </div>
          )}
          {dataset && dataset.links && (
            <div className={`${baseClass}--data--content-links`}>
              <p className={`${baseClass}--data--content-label`}>
                {dataset.links.headline}
              </p>
              {dataset.links.items &&
                dataset.links.items.map((item) => (
                  <>
                    <Link url={item.url}>{item.label}</Link>
                    <span>&nbsp;&nbsp;</span>
                  </>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
