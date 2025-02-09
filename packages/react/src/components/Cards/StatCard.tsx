import { forwardRef } from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { Link, LinkProps } from "../Link";
import { CardColor, CardSize, HeadingTypes, ThemeTypes } from "../../types";

export interface StatCardProps {
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
   * Background color of stat card
   */

  color?: CardColor;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "narrow" | "wide">;

  /**
   * Introductory text in the card
   */
  intro?: string;

  /**
   * Source link for the card
   */
  source?: LinkProps;

  /**
   * Specify an optional className to be added to your StatCard.
   */
  className?: string;
}

const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      className,
      title,
      theme = "light",
      size = "standard",
      color,
      intro,
      source,
      titleLevel: TitleElement = "p",
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--card`;

    const wrapperClass = classNames(`${baseClass}--wrapper`, className);
    const cardClasses = classNames(baseClass, `${baseClass}__type__stat`, {
      [`${baseClass}__size__${String(size)}`]: size,
      [`${baseClass}__theme__${theme}`]: theme,
      [`${baseClass}__color__${color}`]: color,
    });

    return (
      <div className={wrapperClass} ref={ref}>
        <div className={cardClasses}>
          <div className={`${baseClass}--wrap`}>
            <div className={`${baseClass}--content`}>
              <TitleElement className={`${baseClass}--title`}>
                {title}
              </TitleElement>
              {intro && <p className={`${baseClass}--intro`}>{intro}</p>}
              {source && (
                <Link
                  className={`${baseClass}--source`}
                  url={source.url}
                  label={source.label}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
export { StatCard };
