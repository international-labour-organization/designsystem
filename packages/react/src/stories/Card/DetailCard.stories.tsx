import { Meta, StoryObj } from "@storybook/react";
import { DetailCard, DetailCardProps } from "../../components/Cards/DetailCard";

const meta: Meta<typeof DetailCard> = {
  title: "Components/Cards/Detail Card",
  component: DetailCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A detail card component for displaying links to content. It can have an image, title, link, intro text and date.`,
      },
    },
  },
  argTypes: {
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
    size: {
      options: ["narrow", "wide", "fluid"],
      control: { type: "radio" },
    },
    titleLevel: {
      options: ["p", "h1", "h2", "h3", "h4", "h5"],
      control: { type: "select" },
    },
  },
};

const Default: StoryObj<DetailCardProps> = {
  args: {
    title: "Can digital technology be an equality machine?",
    eyebrow: "Podcast",
    details: "20 September 2022 | Geneva",
    theme: "light",
    link: "https://www.ilo.org/",
    image: "medium.jpg",
    intro:
      "A toxic combination of mutually-reinforcing crises – inflation, debt, food and fuel price rises, geopolitical tensions and conflict, climate change – are threatening to increase poverty, inequality and discrimination worldwide.",
    size: "narrow",
    isVideo: false,
    titleLevel: "h2",
  },
};

const Skeleton: StoryObj<DetailCardProps> = {
  name: "Skeleton",
  args: {
    theme: "light",
    size: "narrow",
  },
  render: (props) => <DetailCard.Skeleton {...props} />,
};

export default meta;
export { Default, Skeleton };
