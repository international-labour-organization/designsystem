import { Meta, StoryObj } from "@storybook/react-vite";

import { PromoCard, PromoCardProps } from "../../components/Cards/PromoCard";

const meta: Meta<typeof PromoCard> = {
  title: "Components/Cards/Promo Card",
  component: PromoCard,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["narrow", "standard", "wide", "fluid"],
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The Promo Card component displays a card with promotional content, including a title, eyebrow, intro text, call to action and an optional image.`,
      },
    },
  },
};

export const Default: StoryObj<PromoCardProps> = {
  args: {
    title: "Can digital technology be an equality machine?",
    eyebrow: "Podcast",
    intro:
      "A toxic combination of mutually-reinforcing crises – inflation, debt, food and fuel price rises, geopolitical tensions and conflict, climate change – are threatening to increase poverty, inequality and discrimination worldwide.",
    theme: "light",
    size: "standard",
    cornercut: true,
    link: "https://www.ilo.org/",
    cta: {
      label: "Read the press release",
      url: "https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_846303/lang--en/index.htm",
    },
  },
};

const image: PromoCardProps["image"] = {
  alt: "",
  url: [
    { breakpoint: 0, src: "/small.jpg" },
    { breakpoint: 800, src: "/medium.jpg" },
    { breakpoint: 1200, src: "/medium.jpg" },
    { breakpoint: 1440, src: "/large.jpg" },
  ],
};

export const WithImage: StoryObj<PromoCardProps> = {
  args: {
    ...Default.args,
    size: "narrow",
    cornercut: false,
    image,
  },
};

export const WithImageWide: StoryObj<PromoCardProps> = {
  args: {
    ...Default.args,
    size: "wide",
    cornercut: false,
    image,
  },
};

export const Skeleton: StoryObj<PromoCardProps> = {
  name: "Skeleton",
  args: {
    theme: "light",
    size: "narrow",
  },
  render: (props) => <PromoCard.Skeleton {...props} />,
};

export default meta;
