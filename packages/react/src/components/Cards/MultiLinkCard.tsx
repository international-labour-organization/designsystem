import { forwardRef, isValidElement, ReactNode } from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { LinkList, LinkListProps } from "../LinkList";
import { DynamicHeading } from "../DynamicHeading/DynamicHeading";
import { CardAlignment, CardSize, HeadingTypes } from "../../types";

export type MultiLinkCardProps = {
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
   * How big should the card be
   */
  size?: CardSize;

  /**
   * How should the card be aligned
   */
  alignment?: CardAlignment;

  /**
   * Introductory text in the card
   */
  intro?: ReactNode;

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

  /**
   * Specify a theme for the component, either `light` or `blue`
   */
  theme?: "light" | "soft";
};

const MultiLinkCard = forwardRef<HTMLDivElement, MultiLinkCardProps>(
  (
    {
      className,
      title,
      size = "standard",
      alignment,
      intro,
      link,
      linklist,
      image,
      titleLevel = "p",
      eyebrow,
      isVideo,
      theme = "light",
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--card`;

    const cardClasses = classNames(
      baseClass,
      className,
      `${baseClass}__type__multilink`,
      {
        [`${baseClass}__align__${alignment}`]: alignment,
        [`${baseClass}__size__${size}`]: size,
        [`${baseClass}__isvideo`]: isVideo,
        [`${baseClass}--no-image`]: !image,
        [`${baseClass}__theme__${theme}`]: theme,
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
            {intro &&
              (isValidElement(intro) ? (
                <div className={`${baseClass}--intro`}>{intro}</div>
              ) : (
                <p className={`${baseClass}--intro`}>{intro}</p>
              ))}
            {linklist && <LinkList {...linklist} />}
          </div>
        </div>
      </div>
    );
  }
);

export { MultiLinkCard };
