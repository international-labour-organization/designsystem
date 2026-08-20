import { StoryObj, Meta } from "@storybook/react";
import { Hero, HeroProps } from "../../components/Hero";
import { HeroCardProps } from "../../components/HeroCard";
import { ThemeTypes } from "../../types";

// `heroCard` is a single object prop, so Storybook renders it as one JSON
// control with no per-field selects. These convenience args surface the
// card's theme/background as top-level radio controls; the `render` below
// merges them back into `heroCard`.
type HeroStoryArgs = HeroProps & {
  /** Convenience Storybook control that overrides `heroCard.theme`. */
  cardTheme?: ThemeTypes;
  /** Convenience Storybook control that overrides `heroCard.background`. */
  cardBackground?: HeroCardProps["background"];
};

const meta: Meta<HeroStoryArgs> = {
  title: "Components/Content/Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {
    cardTheme: {
      name: "heroCard.theme",
      options: ["light", "dark"],
      control: { type: "radio" },
      table: { category: "Hero Card" },
    },
    cardBackground: {
      name: "heroCard.background",
      options: ["solid", "transparent", "semi-transparent"],
      control: { type: "radio" },
      table: { category: "Hero Card" },
    },
  },
  render: ({ cardTheme, cardBackground, ...args }) => (
    <Hero
      {...args}
      heroCard={{
        ...args.heroCard,
        ...(cardTheme && { theme: cardTheme }),
        ...(cardBackground && { background: cardBackground }),
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        component:
          "The Hero is an attention-grabbing section of a web page designed to engage users and create a memorable first impression.",
      },
    },
  },
};

const Default: StoryObj<HeroStoryArgs> = {
  args: {
    image: {
      alt: "Lorem ipsum",
      loading: "lazy",
      url: [
        { breakpoint: 1280, src: "/xlarge-hero.jpg" },
        { breakpoint: 1024, src: "/large-hero.jpg" },
        { breakpoint: 0, src: "/mobile2x-hero.jpg" },
      ],
    },
    breadcrumb: {
      buttonLabel: "More Links",
      links: [
        { label: "Link One", url: "/linkone" },
        { label: "Link Two", url: "/linktwo" },
        { label: "Link Three", url: "/linkthree" },
        { label: "Link Four", url: "/linkfour" },
        { label: "Link Five", url: "/linkfive" },
        { label: "Link Six", url: "/linksix" },
      ],
    },
    heroCard: {
      title: "Child labour",
      theme: "dark",
      background: "solid",
      cornercut: true,
      eyebrow: "ILO Topics",
      socialmedia: {
        iconSize: "normal",
        icons: [
          {
            label: "Facebook",
            url: "https://www.facebook.com/ilo.org",
            icon: "facebook",
          },
          { label: "X", url: "https://www.x.com/ilo.org", icon: "x" },
          {
            label: "Linkedin",
            url: "https://www.linkedin.com/company/international-labour-organization-ilo",
            icon: "linkedin",
          },
        ],
      },
    },
    caption: {
      icon: true,
      theme: "dark",
      label:
        "A metalurgy worker at a manufacturing plant in Viet Nam. © ILO/Minh Quang",
    },
    gap: "transparent",
    justify: "start",
    align: "baseline",
    posterSize: "large",
    cardSize: "small",
  },
};

const Homepage: StoryObj<HeroStoryArgs> = {
  args: {
    ...Default.args,
    align: "center",
    justify: "start",
    posterSize: "large",
    cardSize: "medium",
    breadcrumb: undefined,
    heroCard: {
      title:
        "ILO welcomes G7 call to make a just transition to a green economy happen",
      url: "https://www.ilo.org",
      theme: "dark",
      background: "solid",
      cornercut: false,
      eyebrow: "UN General Assembly",
    },
  },
};

const Article: StoryObj<HeroStoryArgs> = {
  args: {
    ...Default.args,
    align: "bottom",
    justify: "center",
    posterSize: "xlarge",
    cardSize: "large",
    breadcrumb: undefined,
    heroCard: {
      title: "When a woman becomes a boss in a man's world",
      datecopy: "11 February 2021",
      background: "solid",
      cornercut: true,
      eyebrow: "Women in management",
      socialmedia: {
        iconSize: "normal",
        icons: [
          {
            label: "Facebook",
            url: "https://www.facebook.com/ilo.org",
            icon: "facebook",
          },
          { label: "X", url: "https://www.x.com/ilo.org", icon: "x" },
          {
            label: "Linkedin",
            url: "https://www.linkedin.com/company/international-labour-organization-ilo",
            icon: "linkedin",
          },
        ],
      },
    },
    caption: {
      icon: true,
      theme: "dark",
      label:
        "A metalurgy worker at a manufacturing plant in Viet Nam. © ILO/Minh Quang",
    },
  },
};

const LightSemiTransparent: StoryObj<HeroStoryArgs> = {
  parameters: {
    docs: {
      description: {
        story:
          "Light theme with a semi-transparent card and `justify: start`. The card-offset space between the left edge of the screen and the HeroCard picks up the same semi-transparent fill as the card. NOTE: the offset only appears at the `lg` breakpoint on viewports wider than ~1364px — view this in a full-width canvas.",
      },
    },
  },
  args: {
    ...Default.args,
    justify: "start",
    align: "baseline",
    gap: "transparent",
    cardTheme: "light",
    cardBackground: "semi-transparent",
  },
};

export default meta;
export { Default, Homepage, Article, LightSemiTransparent };
