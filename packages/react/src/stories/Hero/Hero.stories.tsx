import { StoryObj, Meta } from "@storybook/react";
import { Hero, HeroProps } from "../../components/Hero";

const meta: Meta<typeof Hero> = {
  title: "Components/Content/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Hero is an attention-grabbing section of a web page designed to engage users and create a memorable first impression.",
      },
    },
  },
};

const Default: StoryObj<HeroProps> = {
  args: {
    image: {
      alt: "Lorem ipsum",
      loading: "lazy",
      url: [
        { breakpoint: 0, src: "/hero.jpg" },
        { breakpoint: 768, src: "/hero.jpg" },
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

const Homepage: StoryObj<HeroProps> = {
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
      background: "semi-transparent",
      cornercut: false,
      eyebrow: "UN General Assembly",
    },
  },
};

const Article: StoryObj<HeroProps> = {
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

export default meta;
export { Default, Homepage, Article };
