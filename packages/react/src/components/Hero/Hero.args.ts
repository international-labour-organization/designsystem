import { HeroProps } from "./Hero.props";

const articleCenteredHero: HeroProps = {
  className: "storybook",
  image: {
    alt: "Alt tag",
    className: "storybook",
    url: [
      {
        breakpoint: 0,
        src: "https://placekitten.com/1920/800",
      },
      {
        breakpoint: 768,
        src: "https://placekitten.com/1920/800",
      },
    ],
  },
  heroCard: {
    alignment: "center",
    datecopy: "11 February 2021",
    eyebrow: "Eyebrow Title",
    intro:
      "Brief intro text - ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    socials: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/",
        icon: "facebook",
      },
    ],
    title:
      "This is an centered aligned article headline that is more than two lines long",
    theme: "light",
    types: "article",
  },
  theme: "light",
  types: "article",
};

const articleHero: HeroProps = {
  className: "storybook",
  image: {
    alt: "Alt tag",
    className: "storybook",
    url: [
      {
        breakpoint: 0,
        src: "https://placekitten.com/1920/800",
      },
      {
        breakpoint: 768,
        src: "https://placekitten.com/1920/800",
      },
    ],
  },
  heroCard: {
    alignment: "left",
    datecopy: "11 February 2021",
    eyebrow: "Eyebrow Title",
    intro:
      "Brief intro text - ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    socials: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/",
        icon: "facebook",
      },
    ],
    title:
      "This is an left aligned article headline that is more than two lines long",
    theme: "light",
    types: "article",
  },
  theme: "light",
  types: "article",
};

const articleNoImageHero: HeroProps = {
  className: "storybook",
  heroCard: {
    alignment: "center",
    datecopy: "11 February 2021",
    eyebrow: "Eyebrow Title",
    intro:
      "Brief intro text - ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    socials: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/",
        icon: "facebook",
      },
    ],
    title:
      "This is an center aligned article headline that is more than two lines long",
    theme: "light",
    types: "article",
  },
  theme: "light",
  types: "article",
};

const homeHero: HeroProps = {
  className: "storybook",
  image: {
    alt: "Alt tag",
    className: "storybook",
    url: [
      {
        breakpoint: 0,
        src: "https://placekitten.com/1920/800",
      },
      {
        breakpoint: 768,
        src: "https://placekitten.com/1920/800",
      },
    ],
  },
  heroCard: {
    alignment: "left",
    eyebrow: "Eyebrow Title",
    title:
      "ILO welcomes G7 call to make a just transition to a green economy happen",
    theme: "dark",
    types: "home",
  },
  theme: "dark",
  types: "home",
};

const portalHero: HeroProps = {
  className: "storybook",
  image: {
    alt: "Alt tag",
    className: "storybook",
    url: [
      {
        breakpoint: 0,
        src: "https://placekitten.com/1920/800",
      },
      {
        breakpoint: 768,
        src: "https://placekitten.com/1920/800",
      },
    ],
  },
  heroCard: {
    alignment: "left",
    eyebrow: "Eyebrow Title",
    socials: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/",
        icon: "facebook",
      },
      {
        label: "Linkedin",
        url: "https://www.linkedin.com/",
        icon: "linkedin",
      },
    ],
    title: "This is a page title",
    theme: "dark",
    types: "portal",
  },
  theme: "dark",
  types: "portal",
};

const projectHero: HeroProps = {
  className: "storybook",
  image: {
    alt: "Alt tag",
    className: "storybook",
    url: [
      {
        breakpoint: 0,
        src: "https://placekitten.com/1920/800",
      },
      {
        breakpoint: 768,
        src: "https://placekitten.com/1920/800",
      },
    ],
  },
  heroCard: {
    alignment: "center",
    eyebrow: "Eyebrow Title",
    datecopy: "Date | Duration",
    intro:
      "Brief intro text - ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    socials: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/",
        icon: "facebook",
      },
    ],
    title: "This is a page title",
    theme: "dark",
    types: "project",
  },
  theme: "dark",
  types: "project",
};

const graphicHero: HeroProps = {
  className: "storybook",
  image: {
    alt: "Alt tag",
    className: "storybook",
    url: [
      {
        breakpoint: 0,
        src: "https://placekitten.com/1920/800",
      },
      {
        breakpoint: 768,
        src: "https://placekitten.com/1920/800",
      },
    ],
  },
  heroCard: {
    alignment: "center",
    eyebrow: "Eyebrow Title",
    datecopy: "Date | Duration",
    intro:
      "Brief intro text - ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    socials: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/",
        icon: "facebook",
      },
    ],
    title: "This is a centered graphic article headline that is two lines long",
    theme: "light",
    types: "graphic",
  },
  theme: "light",
  types: "graphic",
};

const publicationHero: HeroProps = {
  className: "storybook",
  image: {
    alt: "Alt tag",
    className: "storybook",
    url: [
      {
        breakpoint: 0,
        src: "https://placekitten.com/1920/800",
      },
      {
        breakpoint: 768,
        src: "https://placekitten.com/1920/800",
      },
    ],
  },
  heroCard: {
    alignment: "left",
    eyebrow: "Eyebrow Title",
    datecopy: "Date | Duration",
    intro:
      "Brief intro text - ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    socials: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/",
        icon: "facebook",
      },
    ],
    title: "This is a page title",
    theme: "light",
    types: "publication",
  },
  theme: "light",
  types: "publication",
};
/**
 * Sample prop definitions for Hero's enumerable properties (imported in stories and test)
 */
const HeroArgs = {
  articleHero,
  articleCenteredHero,
  articleNoImageHero,
  homeHero,
  graphicHero,
  projectHero,
  portalHero,
  publicationHero,
};

export default HeroArgs;
