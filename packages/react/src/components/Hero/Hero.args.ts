import { HeroProps } from "./Hero.props";
import { defaultArgs } from "../SocialMedia";
import { HeroCardProps } from "./HeroCard.props";
import { ImageProps } from "../Image/Image.props";

const lightArticleCard: HeroCardProps = {
  title: "Does Artificial Intelligence threaten decent work?",
  datecopy: "17 July 2023",
  eyebrow: "Future of Work Podcast",
  intro:
    "The world of work has always been shaped by technology, but the new generation of Artificial Intelligence (AI) has raised fears that it could destroy tens of millions of jobs, and undermine progress towards decent work and greater social justice.",
  socialmedia: {
    icons: defaultArgs.icons.slice(0, 3),
  },
  theme: "light",
};

const darkPortalCard: HeroCardProps = {
  title: "Child labour",
  eyebrow: "ILO Topics",
  socialmedia: {
    icons: defaultArgs.icons.slice(0, 3),
  },
};

const lightPortalCard: HeroCardProps = {
  ...darkPortalCard,
  theme: "light",
};

const homepageCard: HeroCardProps = {
  eyebrow: lightArticleCard.eyebrow,
  title: lightArticleCard.title,
  url: "https://www.ilo.org",
  background: "semi-transparent",
};

const transparentHomepageCard: HeroCardProps = {
  ...homepageCard,
  background: "transparent",
};

const heroImage: ImageProps = {
  alt: "Alt tag",
  className: "storybook",
  url: [
    {
      breakpoint: 0,
      src: "/hero.jpg",
    },
    {
      breakpoint: 768,
      src: "/hero.jpg",
    },
  ],
};

const standard = {
  image: heroImage,
  heroCard: darkPortalCard,
};

export const darkPortal: HeroProps = standard;

export const lightPortal: HeroProps = {
  ...standard,
  heroCard: lightPortalCard,
};

export const semiTransparent: HeroProps = {
  ...standard,
  align: "center",
  heroCard: homepageCard,
};

export const transparent: HeroProps = {
  ...standard,
  align: "center",
  heroCard: transparentHomepageCard,
};

export const offset: HeroProps = {
  ...standard,
  align: "baseline",
  justify: "offset",
};

export const center: HeroProps = {
  ...standard,
  align: "baseline",
  justify: "center",
};

export const centerBottom: HeroProps = {
  ...standard,
  cardSize: "xlarge",
  align: "bottom",
  justify: "center",
  heroCard: lightArticleCard,
};

export const noPoster: HeroProps = {
  cardSize: "xlarge",
  align: "bottom",
  justify: "center",
  posterSize: "small",
  heroCard: lightArticleCard,
};
