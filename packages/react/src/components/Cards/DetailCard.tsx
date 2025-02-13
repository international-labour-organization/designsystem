import classNames from "classnames";
import { forwardRef } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { CardSize, EventDate, HeadingTypes, ThemeTypes } from "../../types";

export type DetailCardProps = {
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
   * Additional date information
   */
  details?: string;

  /**
   * Intro text for the card
   */
  intro?: string;

  /**
   * Specify the URL for the card link
   */
  link?: string;

  /**
   * Specify the image for the card
   */
  image?: string;

  /**
   * Specify if the card is a video
   */
  isVideo?: boolean;

  /**
   * Specify an optional className to be added to your DetailCard.
   */
  className?: string;
};

const DetailCard = forwardRef<HTMLDivElement, DetailCardProps>(
  (
    {
      className,
      title,
      theme = "light",
      size = "narrow",
      date,
      details,
      link,
      titleLevel: TitleElement = "p",
      eyebrow,
      intro,
      image,
      isVideo = false,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--card`;

    const cardClasses = classNames(
      baseClass,
      `${baseClass}__type__detail`,
      className,
      {
        [`${baseClass}__action`]: link,
        [`${baseClass}__size__${String(size)}`]: size,
        [`${baseClass}__theme__${theme}`]: theme,
        [`${baseClass}__isvideo`]: isVideo,
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
                  className={`${baseClass}--picture`}
                  src={image}
                  alt={title}
                />
              </picture>
            </div>
          )}
          <div className={`${baseClass}--content`}>
            {eyebrow && <p className={`${baseClass}--eyebrow`}>{eyebrow}</p>}
            {title && (
              <TitleElement className={`${baseClass}--title`}>
                {title}
              </TitleElement>
            )}
            {intro && <p className={`${baseClass}--intro`}>{intro}</p>}
            {date && (
              <time className={`${baseClass}--date`} dateTime={date.unix}>
                {date.human}
              </time>
            )}
            {details && <p className={`${baseClass}--date-extra`}>{details}</p>}
          </div>
        </div>
      </div>
    );
  }
);

export { DetailCard };
