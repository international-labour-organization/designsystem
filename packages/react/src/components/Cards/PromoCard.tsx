import { forwardRef } from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import {
  CardCornerType,
  CardSize,
  HeadingTypes,
  ThemeTypes,
} from "../../types";
import { LinkProps } from "../Link";
import { Button } from "../Button";
import { DynamicHeading } from "../DynamicHeading/DynamicHeading";

export type PromoCardProps = {
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
  size?: CardSize;

  /**
   * Apply an optional corner cut to the top of the card
   */
  cornercut?: CardCornerType;

  /**
   * Introductory text in the card
   */
  intro?: string;

  /**
   * Source link for the card
   */
  link?: string;

  /**
   * Call to action link
   */
  cta?: LinkProps;

  /**
   * Specify an optional className to be added to your PromoCard.
   */
  className?: string;
};

const PromoCard = forwardRef<HTMLDivElement, PromoCardProps>(
  (
    {
      className,
      title,
      theme = "light",
      size = "narrow",
      cornercut,
      intro,
      link,
      cta,
      titleLevel = "p",
      eyebrow,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--card`;

    const wrapperClass = classNames(
      `${baseClass}--wrapper`,
      className,
      `${baseClass}--wrapper__type__promo`,
      `${baseClass}--wrapper__type__promo__size__${size}`
    );
    const cardClasses = classNames(baseClass, `${baseClass}__type__promo`, {
      [`${baseClass}__size__${String(size)}`]: size,
      [`${baseClass}__theme__${theme}`]: theme,
      [`${baseClass}__cornercut`]: cornercut,
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
              <DynamicHeading
                level={titleLevel}
                className={`${baseClass}--title`}
              >
                {title}
              </DynamicHeading>
              {intro && <p className={`${baseClass}--intro`}>{intro}</p>}
              {cta?.label && (
                <div className={`${baseClass}--cta`}>
                  <Button
                    link={{ url: cta.url, label: cta.label }}
                    size="medium"
                    type="primary"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export { PromoCard };
