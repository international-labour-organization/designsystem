import { createElement, ElementType, forwardRef, ReactNode } from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { Picture, PictureProps } from "../Picture";
import { Status, StatusProps } from "../Status";
import { Icon } from "../Icon";
import { ButtonProps } from "../Button";
import { DynamicHeading } from "../DynamicHeading/DynamicHeading";
import { HeadingTypes } from "../../types";

export type ScoreCardProps = {
  /**
   * The theme of the card.
   */
  theme?: "light" | "dark";

  /**
   * The title level (h1, h2, h3, p, etc.).
   */
  titleLevel?: HeadingTypes;

  /**
   * The size of the card.
   */
  size?: "narrow" | "wide" | "fluid" | "simple";

  /**
   * The link URL for the card.
   */
  link: string;

  /**
   * Specify the component to use for the link
   */
  linkComponent?: ElementType;

  /**
   * The title text for the card.
   */
  title: string;

  /**
   * Whether the card represents a video.
   */
  isVideo?: boolean;

  /**
   * The image data for the card.
   */
  image?: PictureProps;

  /**
   * Status information for the card.
   */
  status?: StatusProps;

  /**
   * Eyebrow text to be displayed above the title.
   */
  eyebrow?: string;

  /**
   * Content to display in the card. Each item is an object with an icon, label, and optional unix date.
   */
  content?: {
    items: {
      icon: string;
      label: string | ReactNode;
      unix?: string;
    }[];
  };

  /**
   * Takes an array of `<Button />` components. Configure and handle the Button as needed and then pass it to the ScoreCard component.
   */
  cta?: {
    items: React.ReactElement<ButtonProps>[];
  };

  className?: string;
};

const ScoreCard = forwardRef<HTMLDivElement, ScoreCardProps>(
  (
    {
      className,
      theme = "light",
      titleLevel = "p",
      size = "narrow",
      link,
      linkComponent,
      title,
      isVideo = false,
      image,
      status,
      eyebrow,
      content,
      cta,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const iconColor =
      theme === "dark"
        ? "var(--ilo-color-white)"
        : "var(--ilo-color-gray-accessible)";

    const baseClass = `${prefix}--card`;
    const cardClasses = classNames(baseClass, `${baseClass}__type__score`, {
      [`${baseClass}__theme__${theme}`]: theme,
      [`${baseClass}__size__${size}`]: size,
      [`${baseClass}__isvideo`]: isVideo,
    });

    const Link = createElement(
      linkComponent || "a",
      {
        href: link,
        title,
        className: `${baseClass}--link`,
      },
      <span className={`${baseClass}--link--text`}>{title}</span>
    );

    return (
      <div className={classNames(cardClasses, className)} ref={ref}>
        {Link}
        <div className={`${baseClass}--wrap`}>
          {image && size !== "simple" && (
            <div className={`${baseClass}--image--wrapper`}>
              <Picture {...image} />
            </div>
          )}
          <div className={`${baseClass}--content`}>
            {status && (
              <Status content={status.content} statusType={status.statusType} />
            )}
            {eyebrow && size !== "simple" && (
              <p className={`${baseClass}--eyebrow`}>{eyebrow}</p>
            )}
            {title && (
              <DynamicHeading
                level={titleLevel}
                className={`${baseClass}--title`}
              >
                {title}
              </DynamicHeading>
            )}
            {content && (
              <div className={`${baseClass}--area--content`}>
                {content.items?.map((item, index) => (
                  <div key={index} className={`${baseClass}--content--item`}>
                    <Icon name={item.icon} size={20} color={iconColor} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            )}
            {cta && (
              <div className={`${baseClass}--area--cta`}>
                {cta.items.map((ButtonComponent, index) => (
                  <div key={index} className={`${baseClass}--cta`}>
                    {ButtonComponent}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export { ScoreCard };
