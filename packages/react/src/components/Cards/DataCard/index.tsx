import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { DataCardProps } from "../Card.props";
import { Link } from "../../Link";

const DataCard: FC<DataCardProps> = ({
  eyebrow,
  theme,
  size,
  cornercut,
  image,
  dataset,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;

  const cardClasses = classnames(baseClass, `${baseClass}__type__data`, {
    [`${baseClass}__${cornercut}`]: cornercut,
    [`${baseClass}__size__${size}`]: size,
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
                alt={eyebrow}
              />
            </picture>
          </div>
        )}
        <div className={`${baseClass}--content`}>
          {eyebrow && <p className={`${baseClass}--eyebrow`}>{eyebrow}</p>}
          {image && (
            <div className={`${baseClass}--image--wrapper`}>
              <picture>
                <img
                  className={`${baseClass}--picture`}
                  src={image}
                  alt={eyebrow}
                />
              </picture>
            </div>
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
          {dataset && dataset.cta && (
            <div className={`${baseClass}--area--cta`}>
              <div className={`${baseClass}--data--content-cta`}>
                <p className={`${baseClass}--data--content-label`}>
                  {dataset.cta.headline}
                </p>
                {dataset.cta.items &&
                  dataset.cta.items.map((item) => (
                    <a
                      className={`${baseClass}--cta ${prefix}--button ${prefix}--button--medium ${prefix}--button--secondary`}
                      href={item.url}
                    >
                      <span className="link__label">{item.label}</span>
                    </a>
                  ))}
              </div>
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

export default DataCard;
