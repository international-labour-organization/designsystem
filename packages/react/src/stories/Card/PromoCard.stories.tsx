import { Meta, StoryObj } from "@storybook/react";

import { PromoCard, PromoCardProps } from "../../components/Cards/PromoCard";

const meta: Meta<typeof PromoCard> = {
  title: "Components/Cards/Promo Card",
  component: PromoCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The Promo Card component displays a card with promotional content, including a title, eyebrow, intro text, and call to action.`,
      },
    },
  },
};

const Default: StoryObj<PromoCardProps> = {
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

const Skeleton: StoryObj<PromoCardProps> = {
  name: "Skeleton",
  args: {
    theme: "light",
    size: "narrow",
  },
  render: (props) => <PromoCard.Skeleton {...props} />,
};

export default meta;
export { Default, Skeleton };
