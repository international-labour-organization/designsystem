import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { HeroProps } from "./Hero.props";
import HeroCard from "./HeroCard";
import { ImageProps } from "../Image/Image.props";
import { Breadcrumb } from "../Breadcrumb";
import { Tooltip } from "../Tooltip";

const HeroImage: FC<ImageProps> = ({ url, alt }) => {
  const { prefix } = useGlobalSettings();

  const imageClass = `${prefix}--card--image`;

  // Sort the urls by breakpoint
  const sortedUrls = url.sort((a, b) => a.breakpoint - b.breakpoint);

  const defaultSrc = sortedUrls[sortedUrls.length - 1].src;

  return (
    <figure className="hero--image">
      <picture>
        {sortedUrls.map((img) => (
          <source
            srcSet={img.src}
            media={`(min-width: ${img.breakpoint}px)`}
            key={img.breakpoint}
          />
        ))}
        <img className={imageClass} src={defaultSrc} alt={alt} />
      </picture>
    </figure>
  );
};

const Hero: FC<HeroProps> = ({
  justify = "start",
  align = "baseline",
  cardSize = "small",
  posterSize = "large",
  theme = "dark",
  image,
  breadcrumb,
  heroCard,
  caption,
}) => {
  const baseClass = "hero";
  const justifyClass = `${baseClass}__card-justify__${justify}`;
  const alignClass = `${baseClass}__card-align__${align}`;
  const cardSizeClass = `${baseClass}__card-size__${cardSize}`;
  const posterSizeClass = `${baseClass}__poster-size__${posterSize}`;
  const themeClass = `${baseClass}__card-theme__${theme}`;

  const heroClasses = classnames(
    baseClass,
    justifyClass,
    alignClass,
    cardSizeClass,
    posterSizeClass,
    themeClass
  );
  return (
    <div className={heroClasses}>
      <div className="hero--background">
        {image && <HeroImage {...image} />}
      </div>
      {breadcrumb && (
        <>
          <div className="hero--breadcrumbs-offset" />
          <div className="hero--breadcrumbs">
            <div className="hero--breadcrumbs--wrapper">
              <Breadcrumb {...breadcrumb} />
            </div>
          </div>
        </>
      )}
      <div className="hero--card-offset"></div>
      <div className="hero--card">
        <HeroCard {...heroCard} />
      </div>
      {caption && (
        <div className="hero--caption">
          <div className="hero--caption--wrapper">
            <Tooltip {...caption} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
