import { Meta, StoryObj } from "@storybook/react";

import {
  FeatureCard,
  FeatureCardProps,
} from "../../components/Cards/FeatureCard";

const meta: Meta<typeof FeatureCard> = {
  title: "Components/Cards/Feature Card",
  component: FeatureCard,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["narrow", "wide", "fluid"],
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The Feature Card component displays a card with a title, image, and optional link list.`,
      },
    },
  },
};

const Default: StoryObj<FeatureCardProps> = {
  args: {
    title: "Can digital technology be an equality machine?",
    eyebrow: "Podcast",
    date: {
      human: "20 September 2022",
      unix: "1670389200",
    },
    theme: "light",
    link: "https://www.ilo.org/",
    image: "/large.jpg",
    size: "narrow",
    isVideo: false,
    linklist: {
      linkgroup: [
        {
          links: [
            {
              label: "Read More",
              url: "https://www.ilo.org",
            },
          ],
        },
      ],
    },
  },
};

export default meta;
export { Default };
