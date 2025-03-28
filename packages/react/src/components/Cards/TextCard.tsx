import classNames from "classnames";
import { forwardRef } from "react";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { Profile, ProfileProps } from "../Profile";
import { CardSize, EventDate, HeadingTypes, ThemeTypes } from "../../types";

export type TextCardProps = {
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
   * Profile information to be displayed on the card
   */
  profile?: ProfileProps;

  /**
   * Specify the URL for the card link
   */
  link?: string;

  /**
   * Specify an optional className to be added to your TextCard.
   */
  className?: string;
};

const TextCard = forwardRef<HTMLDivElement, TextCardProps>(
  (
    {
      className,
      title,
      theme = "light",
      size = "narrow",
      date,
      profile,
      link,
      titleLevel: TitleElement = "p",
      eyebrow,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--card`;

    const wrapperClass = classNames(`${baseClass}--wrapper`, className);
    const cardClasses = classNames(baseClass, `${baseClass}__type__text`, {
      [`${baseClass}__size__${String(size)}`]: size,
      [`${baseClass}__theme__${theme}`]: theme,
    });

    return (
      <div className={wrapperClass} ref={ref}>
        <div className={cardClasses}>
          <a className={`${baseClass}--link`} href={link} title={title}>
            <span className={`${baseClass}--link--text`}>{title}</span>
          </a>
          <div className={`${baseClass}--wrap`}>
            <div className={`${baseClass}--content`}>
              {eyebrow && <p className={`${baseClass}--eyebrow`}>{eyebrow}</p>}
              <TitleElement className={`${baseClass}--title`}>
                {title}
              </TitleElement>
              {date && (
                <time className={`${baseClass}--date`} dateTime={date.unix}>
                  {date.human}
                </time>
              )}
              {profile && (
                <Profile
                  avatar={profile.avatar}
                  description={profile.description}
                  link={profile.link}
                  name={profile.name}
                  role={profile.role}
                  theme={theme}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export { TextCard };
