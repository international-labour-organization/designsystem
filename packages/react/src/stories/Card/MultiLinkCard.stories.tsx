import { Meta, StoryObj } from "@storybook/react";

import {
  MultiLinkCard,
  MultiLinkCardProps,
} from "../../components/Cards/MultiLinkCard";

const meta: Meta<typeof MultiLinkCard> = {
  title: "Components/Cards/Multilink Card",
  component: MultiLinkCard,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "soft"],
    },
    size: {
      control: "select",
      options: ["standard", "narrow", "wide", "fluid"],
    },
    alignment: {
      control: "select",
      options: ["left", "right"],
    },
    isVideo: {
      control: "boolean",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The Multilink Card component displays a card with multiple links, including a title, eyebrow, intro text, and an optional image.`,
      },
    },
  },
};

const Default: StoryObj<MultiLinkCardProps> = {
  args: {
    title: "Advancing social justice",
    eyebrow: "Podcast",
    intro:
      "As the United Nations agency for the world of work, the ILO sets international labour standards, promotes rights at work and encourages decent employment opportunities, the enhancement of social protection and the strengthening of dialogue on work-related issues.",
    size: "standard",
    alignment: "left",
    link: "https://www.ilo.org/",
    image: "/hero.jpg",
    linklist: {
      linkgroup: [
        {
          links: [
            { label: "Read the press release", url: "https://www.ilo.org" },
            { label: "See the statement", url: "https://www.ilo.org" },
            {
              label: "Remarks to G7 Opening Session",
              url: "https://www.ilo.org",
            },
          ],
        },
      ],
    },
  },
};

const Skeleton: StoryObj<MultiLinkCardProps> = {
  name: "Skeleton",
  args: {
    theme: "light",
    size: "standard",
    alignment: "left",
  },
  render: (props) => <MultiLinkCard.Skeleton {...props} />,
};

export default meta;
export { Default, Skeleton };
