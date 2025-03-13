import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/Button";

import { ScoreCard, ScoreCardProps } from "../../components/Cards/ScoreCard";

const meta: Meta<typeof ScoreCard> = {
  title: "Components/Cards/Score Card",
  component: ScoreCard,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
    theme: {
      control: {
        type: "select",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `A  card component for prominently displaying status information or metadata around topics or events.`,
      },
    },
  },
};

const Default: StoryObj<ScoreCardProps> = {
  args: {
    title: "Can digital technology be an equality machine?",
    eyebrow: "Podcast",
    size: "narrow",
    status: {
      statusType: "alert",
      content: "Live",
    },
    link: "https://www.ilo.org/",
    content: {
      items: [
        { icon: "time", label: "28 February 2025" },
        { icon: "pin", label: "Geneva, Switzerland" },
      ],
    },
    titleLevel: "p",
    theme: "light",
    image: {
      url: [
        {
          breakpoint: 0,
          src: "/small.jpg",
        },
        {
          breakpoint: 800,
          src: "/medium.jpg",
        },
        {
          breakpoint: 1200,
          src: "/medium.jpg",
        },
        {
          breakpoint: 1440,
          src: "/large.jpg",
        },
      ],
    },
    cta: {
      items: [
        <Button
          iconPosition="left"
          icon={{ name: "time", size: 16 }}
          size="small"
          type="secondary"
        >
          Reminder
        </Button>,
        <Button
          iconPosition="left"
          icon={{ name: "calendar", size: 16 }}
          size="small"
          type="secondary"
        >
          Add to calendar
        </Button>,
      ],
    },
  },
};

export default meta;
export { Default };
