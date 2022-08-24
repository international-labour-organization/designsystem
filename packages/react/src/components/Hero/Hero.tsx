import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { HeroProps } from "./Hero.props";
import { HeroCard } from "../Hero";
import { Image } from "../Image";

const Hero: FC<HeroProps> = ({
  className,
  image,
  heroCard,
  theme = "light",
  types,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--hero`;
  const heroClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${theme}`]: theme,
    [`${baseClass}--${types}`]: types,
    [`${baseClass}--image`]: image,
  });

  /**
   * renderHome
   *
   * Hero render for home variation
   *
   * @returns render
   */
  const renderHome = () => {
    return (
      <>
        <div className={heroClasses}>
          {image && <Image {...image} />}
          <HeroCard {...heroCard} />
        </div>
      </>
    );
  };

  /**
   * renderGraphic
   *
   * Hero render for graphic variation
   *
   * @returns render
   */
  const renderGraphic = () => {
    return (
      <>
        <div className={heroClasses}>
          {image && <Image {...image} />}
          <HeroCard {...heroCard} />
        </div>
      </>
    );
  };

  /**
   * renderHome
   *
   * Hero render for home variation
   *
   * @returns render
   */
  const renderPortal = () => {
    return (
      <>
        <div className={heroClasses}>
          {image && <Image {...image} />}
          <HeroCard {...heroCard} />
        </div>
      </>
    );
  };

  /**
   * renderProject
   *
   * Hero render for publication variation
   *
   * @returns render
   */
  const renderProject = () => {
    return (
      <>
        <div className={heroClasses}>
          {image && <Image {...image} />}
          <HeroCard {...heroCard} />
        </div>
      </>
    );
  };

  /**
   * renderPublication
   *
   * Hero render for publication variation
   *
   * @returns render
   */
  const renderPublication = () => {
    return (
      <>
        <div className={heroClasses}>
          {image && <Image {...image} />}
          <HeroCard {...heroCard} />
        </div>
      </>
    );
  };

  /**
   * renderArticle
   *
   * Hero render for publication variation
   *
   * @returns render
   */
  const renderArticle = () => {
    return (
      <>
        <div className={heroClasses}>
          {image && <Image {...image} />}
          <HeroCard {...heroCard} />
        </div>
      </>
    );
  };

  return (
    <>
      {types === "graphic" && <>{renderGraphic()}</>}

      {types === "home" && <>{renderHome()}</>}

      {types === "portal" && <>{renderPortal()}</>}

      {types === "project" && <>{renderProject()}</>}

      {types === "publication" && <>{renderPublication()}</>}

      {types === "article" && <>{renderArticle()}</>}
    </>
  );
};

export default Hero;
