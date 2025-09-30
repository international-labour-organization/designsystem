import { Meta, StoryObj } from "@storybook/react";

import { TextCard, TextCardProps } from "../../components/Cards/TextCard";

const meta: Meta<typeof TextCard> = {
  title: "Components/Cards/Text Card",
  component: TextCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The Text Card component displays a card with text content, including a title, eyebrow, date, and profile information.`,
      },
    },
  },
};

const Default: StoryObj<TextCardProps> = {
  args: {
    title: "Why we need greater social justice",
    eyebrow: "Podcast",
    date: {
      human: "20 September 2022",
      unix: "1670389200",
    },
    theme: "light",
    link: "https://www.ilo.org",
    profile: {
      avatar: "/ilo-dg.jpg",
      description:
        "Gilbert Houngbo is the Director-General of the International Labour Organization",
      name: "Gilbert Houngbo",
      role: "ILO Director-General",
    },
    loading: false,
  },
};

export default meta;
export { Default };
