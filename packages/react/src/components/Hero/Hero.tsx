import { forwardRef, useMemo } from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ImageProps } from "../Image/Image.props";
import { Breadcrumb, BreadcrumbProps } from "../Breadcrumb";
import { Tooltip } from "../Tooltip";
import { HeroCard, HeroCardProps } from "../HeroCard";
import { TooltipProps } from "../Tooltip/Tooltip.props";
import { ThemeTypes } from "../../types";

export type HeroProps = {
  /**
   * Vertical alignment of the hero card
   */
  align?: "center" | "bottom" | "baseline";

  /**
   * Props to pass to the breadcrumb if there is one
   */
  breadcrumb?: BreadcrumbProps;

  /**
   * Caption to render in the hero card
   */
  caption?: TooltipProps;

  /**
   * Size the of hero card
   */
  cardSize?: "small" | "medium" | "large" | "xlarge" | "xxlarge";

  /**
   * Specify an optional className to be added to your Hero component.
   */
  className?: string;

  /**
   * Props for the image for the hero
   */
  image?: ImageProps;

  /**
   * How to justify the hero card
   */
  justify?: "start" | "center" | "offset";

  /**
   * Props for the card for the hero
   */
  heroCard: HeroCardProps;

  /**
   * Color of the gap space between bottom of the hero image and bottom of the card
   */
  gap?: "white" | "transparent" | "dark" | "light";

  /**
   * The size of the poster image
   */
  posterSize?: "small" | "medium" | "large" | "xlarge";

  /**
   * Theme for the card
   */
  theme?: ThemeTypes;
};

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      className,
      justify = "start",
      align = "baseline",
      cardSize = "small",
      posterSize = "large",
      theme = "dark",
      image,
      breadcrumb,
      heroCard,
      caption,
      gap,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `hero`;

    const orderedImages = useMemo(() => {
      if (!image) return [];

      return image?.url.sort((a, b) => a.breakpoint - b.breakpoint);
    }, [image]);

    console.log(image, "HERe");
    return (
      <div
        ref={ref}
        className={classNames(
          baseClass,
          `${baseClass}__card-justify__${justify}`,
          `${baseClass}__card-align__${align}`,
          `${baseClass}__card-size__${cardSize}`,
          `${baseClass}__poster-size__${posterSize}`,
          `${baseClass}__card-theme__${theme}`,
          { [`${baseClass}__gap__${gap}`]: gap },
          className
        )}
      >
        <div className={`${baseClass}--background`}>
          {image && (
            <figure className={`${baseClass}--image`}>
              <picture>
                {orderedImages.map((img) => (
                  <source
                    key={img.breakpoint}
                    srcSet={img.src}
                    media={`(min-width: ${img.breakpoint}px)`}
                  />
                ))}
                <img
                  className={`${prefix}-${baseClass}--image`}
                  src={orderedImages.at(-1)!.src}
                  alt={image.alt}
                />
              </picture>
            </figure>
          )}
        </div>
        {breadcrumb && (
          <div className={`${baseClass}--breadcrumbs`}>
            <div className={`${baseClass}--breadcrumbs--wrapper`}>
              <Breadcrumb {...breadcrumb} />
            </div>
          </div>
        )}
        <div className={`${baseClass}--card-offset`} />
        <div className={`${baseClass}--card`}>
          <HeroCard {...heroCard} />
        </div>
        {caption && (
          <div className={`${baseClass}--caption`}>
            <div className={`${baseClass}--caption--wrapper`}>
              <Tooltip {...caption} />
            </div>
          </div>
        )}
      </div>
    );
  }
);

export { Hero };
