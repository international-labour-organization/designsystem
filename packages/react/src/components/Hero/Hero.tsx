import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { HeroProps } from "./Hero.props";
import HeroCard from "./HeroCard";
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

  return (
    <>
      <div className={heroClasses}>
        {image && <Image {...image} />}
        <HeroCard {...heroCard} />
      </div>
    </>
  );
};

export default Hero;
