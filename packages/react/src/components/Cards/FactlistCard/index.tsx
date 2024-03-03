import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { CardProps } from "../Card.props";
import { Link } from "../../Link";
import { List, ListItem } from "../../List";
import { LinkList } from "../../LinkList";
import { Profile } from "../../Profile";

const FactlistCard: FC<CardProps> = ({
  isvideo,
  eyebrow,
  title,
  color,
  theme,
  type,
  size,
  cornercut,
  alignment,
  intro,
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

  const cardClasses = classnames(baseClass, `${baseClass}__type__${type}`, {
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
          {eventdetails && (
            <p className={`${baseClass}--date-extra`}>{eventdetails}</p>
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
              <div className={`${baseClass}--area--content`}>
                <p className={`${baseClass}__type__data--content-label`}>
                  {item.label}
                </p>
                <p className={`${baseClass}__type__data--content-copy`}>
                  {item.copy}
                </p>
              </div>
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

export default FactlistCard;
