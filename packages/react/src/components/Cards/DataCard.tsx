import classNames from "classnames";
import { forwardRef, Fragment, ReactNode } from "react";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { Link, LinkProps } from "../Link";
import { CardSize, ThemeTypes } from "../../types";
import { Button } from "../Button";

export type DataCardProps = {
  /**
   * Will render the card to appear on light or dark backgrounds
   */
  theme?: ThemeTypes;

  /**
   * A line of text that appears as a small heading at the top of the card
   */
  eyebrow?: string;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "standard">;

  /**
   * The image to show in the card
   */
  image?: string;

  /**
   * Array of Content (label, copy), Files object (optional headline, array of items with label and url) and Links object (optional headline, array of items with label and url)
   */
  dataset?: {
    content?: {
      items: Array<{
        label: string;
        copy: string | ReactNode;
      }>;
    };
    files?: {
      headline: string;
      items: Array<LinkProps>;
    };
    links?: {
      headline: string;
      items: Array<LinkProps>;
    };
    cta?: {
      headline: string;
      items: Array<LinkProps>;
    };
  };

  /**
   * Make the content appear in one or two columns. Only applies when the size is set to `wide` or `fluid`
   */
  columns?: "one" | "two";

  /**
   * Specify an optional className to be added to your DataCard.
   */
  className?: string;
};

const DataCard = forwardRef<HTMLDivElement, DataCardProps>(
  (
    {
      theme = "light",
      eyebrow,
      size = "narrow",
      image,
      dataset,
      columns = "one",
      className,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    // Force the card to render in one column if size is narrow
    const cols = size === "narrow" ? "one" : columns;

    const baseClass = `${prefix}--card`;

    const cardClasses = classNames(
      baseClass,
      `${baseClass}__type__data`,
      className,
      {
        [`${baseClass}__size__${String(size)}`]: size,
        [`${baseClass}__type__data__columns__${cols}`]: cols,
        [`${baseClass}__theme__${theme}`]: theme,
      }
    );

    const contentClass = classNames(`${baseClass}--content`, {
      [`${baseClass}--content__with-image`]: image,
      [`${baseClass}--content__no-image-with-links`]: !image && dataset?.links,
      [`${baseClass}--content__default`]: !image && !dataset?.links,
    });

    return (
      <div className={cardClasses} ref={ref}>
        <div className={`${baseClass}--wrap`}>
          {!image && eyebrow && (
            <div className={`${baseClass}--eyebrow`}>{eyebrow}</div>
          )}
          <div className={contentClass}>
            {image && (
              <div className={`${baseClass}--area--image`}>
                {eyebrow && (
                  <div className={`${baseClass}--eyebrow`}>{eyebrow}</div>
                )}
                <div className={`${baseClass}--image`}>
                  <picture>
                    <img
                      className={`${baseClass}--picture`}
                      src={image}
                      alt={eyebrow}
                    />
                  </picture>
                </div>
              </div>
            )}
            {dataset?.content?.items.map((item, index) => (
              <div key={index} className={`${baseClass}--area--content`}>
                <p className={`${baseClass}__type__data--content-label`}>
                  {item.label}
                </p>
                <p className={`${baseClass}__type__data--content-copy`}>
                  {item.copy}
                </p>
              </div>
            ))}
            {dataset?.files && (
              <div className={`${baseClass}--area--files`}>
                <div className={`${baseClass}__type__data--content-files`}>
                  <p className={`${baseClass}__type__data--content-label`}>
                    {dataset.files.headline}
                  </p>
                  {dataset.files.items.map((item, index) => (
                    <Button
                      key={index}
                      link={{
                        url: item.url,
                        label: item.label!,
                        target: item.target || "_self",
                      }}
                      size="small"
                    />
                  ))}
                </div>
              </div>
            )}
            {dataset?.cta && (
              <div className={`${baseClass}--area--cta`}>
                <div className={`${baseClass}__type__data--content-cta`}>
                  <p className={`${baseClass}__type__data--content-label`}>
                    {dataset.cta.headline}
                  </p>
                  {dataset.cta.items.map((item) => (
                    <Button
                      key={item.label}
                      type="secondary"
                      size="small"
                      link={{
                        url: item.url,
                        label: item.label!,
                        target: item.target,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            {dataset?.links && (
              <div className={`${baseClass}--area--links`}>
                <div className={`${baseClass}__type__data--content-links`}>
                  <p className={`${baseClass}__type__data--content-label`}>
                    {dataset.links.headline}
                  </p>
                  <div
                    className={`${baseClass}__type__data--content-links-list`}
                  >
                    {dataset.links.items.map((item) => (
                      <Fragment key={item.label + item.url}>
                        <Link
                          url={item.url}
                          label={item.label}
                          className={`${baseClass}__type__data--content-link`}
                        />
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export type DataCardSkeletonProps = {
  /**
   * Specify an optional className to be added to your DataCardSkeleton.
   */
  className?: string;

  /**
   * Will render the card to appear on light or dark backgrounds
   */
  theme?: ThemeTypes;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "standard">;

  /**
   * Make the content appear in one or two columns. Only applies when the size is set to `wide` or `fluid`
   */
  columns?: "one" | "two";
};

const DataCardSkeleton: React.FC<DataCardSkeletonProps> = ({
  className,
  theme = "light",
  size = "narrow",
  columns = "one",
}) => {
  const { prefix } = useGlobalSettings();
  const cols = size === "narrow" ? "one" : columns;
  const baseClass = `${prefix}--card`;
  const cardClasses = classNames(
    baseClass,
    `${baseClass}__type__data`,
    className,
    {
      [`${baseClass}__size__${String(size)}`]: size,
      [`${baseClass}__type__data__columns__${cols}`]: cols,
      [`${baseClass}__theme__${theme}`]: theme,
      [`${baseClass}__loading`]: true,
    }
  );
  const contentClass = `${baseClass}--content`;

  return (
    <div className={cardClasses}>
      <div className={`${baseClass}--wrap`}>
        <div className={contentClass}>
          <div className={`${baseClass}--area--image`}>
            <div className={`${baseClass}--skeleton--eyebrow`} />
            <div className={`${baseClass}--skeleton--image`} />
          </div>
          <div className={`${baseClass}--area--content`}>
            <div className={`${baseClass}--skeleton--label`} />
            <div className={`${baseClass}--skeleton--copy`} />
          </div>
          <div className={`${baseClass}--area--content`}>
            <div className={`${baseClass}--skeleton--label`} />
            <div className={`${baseClass}--skeleton--copy`} />
          </div>
          <div className={`${baseClass}--area--content`}>
            <div className={`${baseClass}--skeleton--label`} />
            <div className={`${baseClass}--skeleton--copy`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { DataCard, DataCardSkeleton };
