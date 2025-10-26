import { forwardRef } from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { LinkList, LinkListProps } from "../LinkList";
import { DynamicHeading } from "../DynamicHeading/DynamicHeading";
import { CardSize, EventDate, HeadingTypes, ThemeTypes } from "../../types";

export type FeatureCardProps = {
  isVideo?: boolean;

  /**
   * A line of text that appears as a small heading above the title of the card
   */
  eyebrow?: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * HTML element used for the title
   */
  titleLevel?: HeadingTypes;

  /**
   * Will render the card to appear on light or dark backgrounds
   */
  theme?: ThemeTypes;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "standard">;

  /**
   * Specify the event Date, in both human and Unix format.
   */
  date?: EventDate;

  /**
   * Link to the card
   */
  link?: string;

  /**
   * Link list to show in the card
   */
  linklist?: LinkListProps;

  /**
   * The image to show in the card
   */
  image?: string;

  /**
   * Specify an optional className to be added to your TextCard.
   */
  className?: string;
};

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      className,
      title,
      theme = "light",
      size = "narrow",
      date,
      link,
      linklist,
      image,
      titleLevel = "p",
      eyebrow,
      isVideo,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--card`;

    const cardClasses = classNames(
      baseClass,
      className,
      `${baseClass}__type__feature`,
      {
        [`${baseClass}__size__${String(size)}`]: size,
        [`${baseClass}__theme__${theme}`]: theme,
        [`${baseClass}__isvideo`]: isVideo,
        [`${baseClass}__linklist`]: linklist,
      }
    );

    return (
      <div className={cardClasses} ref={ref}>
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
                  src={image}
                  alt={title}
                  className={`${baseClass}--picture`}
                />
              </picture>
            </div>
          )}
          <div className={`${baseClass}--content`}>
            {eyebrow && <p className={`${baseClass}--eyebrow`}>{eyebrow}</p>}
            <DynamicHeading
              level={titleLevel}
              className={`${baseClass}--title`}
            >
              {title}
            </DynamicHeading>
            {date && (
              <time className={`${baseClass}--date`} dateTime={date.unix}>
                {date.human}
              </time>
            )}
            {linklist && size === "narrow" && (
              <LinkList
                headline={linklist.headline}
                linkgroup={linklist.linkgroup}
                theme={theme}
              />
            )}
          </div>
        </div>
        {linklist && (size === "wide" || size === "fluid") && (
          <LinkList
            headline={linklist.headline}
            linkgroup={linklist.linkgroup}
            theme={theme}
          />
        )}
      </div>
    );
  }
);

export type FeatureCardSkeletonProps = {
  /**
   * Specify an optional className to be added to your FeatureCardSkeleton.
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
};

const FeatureCardSkeleton: React.FC<FeatureCardSkeletonProps> = ({
  className,
  size,
  theme,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--card`;
  const cardClasses = classNames(
    baseClass,
    className,
    `${baseClass}__type__feature`,
    {
      [`${baseClass}__size__${String(size)}`]: size,
      [`${baseClass}__theme__${theme}`]: theme,
    }
  );
  return (
    <div className={cardClasses}>
      <div className={`${baseClass}--wrap`}>
        <div className={`${baseClass}--skeleton--image`} />
        <div className={`${baseClass}--content`}>
          <div className={`${baseClass}--skeleton--eyebrow`} />
          <div className={`${baseClass}--skeleton--title`} />
          <div className={`${baseClass}--skeleton--date`} />
        </div>
      </div>
    </div>
  );
};

const FeatureCardCombined = Object.assign(FeatureCard, {
  Skeleton: FeatureCardSkeleton,
});

export { FeatureCardCombined as FeatureCard };
