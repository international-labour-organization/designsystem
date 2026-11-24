import { FC } from "react";

type HeroCardTitleProps = {
  title: string;
  url?: string;
};

const HeroCardTitle: FC<HeroCardTitleProps> = ({ title, url }) => {
  const baseClass = "ilo--hero-card--title";

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
