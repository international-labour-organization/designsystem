import { FC } from "react";
import { useGlobalSettings } from "../../hooks";

type HeroCardTitleProps = {
  title: string;
  url?: string;
};

const HeroCardTitle: FC<HeroCardTitleProps> = ({ title, url }) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--hero-card--title`;

  if (!url) {
    return <h1 className={baseClass}>{title}</h1>;
  }

  return (
    <a className={`${baseClass}-link`} href={url}>
      <h1 className={baseClass}>{title}</h1>
    </a>
  );
};

export { HeroCardTitle };
