import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { HeroCardProps } from "./HeroCard.props";
import { SocialMedia } from "../SocialMedia";

interface HeroCardTitleProps {
  baseclass: string;
  title: string;
  url?: string;
}

const HeroCardTitle: FC<HeroCardTitleProps> = ({ baseclass, title, url }) => {
  const titleClass = `${baseclass}--title`;
  const linkClass = `${baseclass}--title-link`;

  if (!url) {
    return <h1 className={titleClass}>{title}</h1>;
  }

  return (
    <a className={linkClass} href={url}>
      <h1 className={titleClass}>{title}</h1>
    </a>
  );
};

const HeroCard: FC<HeroCardProps> = ({
  theme = "dark",
  background = "solid",
  cornercut = "true",
  eyebrow,
  title,
  url,
  datecopy,
  intro,
  socialmedia,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--hero-card`;
  const themeClass = `${baseClass}__theme__${theme}`;
  const backgroundClass = `${baseClass}__background__${background}`;
  const cornercutClass = `${baseClass}__cornercut`;

  const heroCardClasses = classnames(baseClass, themeClass, backgroundClass, {
    [cornercutClass]: cornercut,
  });

  const eyebrowClass = `${baseClass}--eyebrow`;
  const datecopyClass = `${baseClass}--datecopy`;
  const introClass = `${baseClass}--intro`;

  return (
    <div className={heroCardClasses}>
      {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
      <HeroCardTitle baseclass={baseClass} title={title} url={url} />
      {datecopy && <p className={datecopyClass}>{datecopy}</p>}
      {intro && <p className={introClass}>{intro}</p>}
      {socialmedia && <SocialMedia {...socialmedia} theme={theme} />}
    </div>
  );
};

export default HeroCard;
