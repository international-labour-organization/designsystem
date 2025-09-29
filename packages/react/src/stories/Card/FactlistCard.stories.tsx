import { Meta, StoryObj } from "@storybook/react";
import {
  FactListCard,
  FactListCardProps,
} from "../../components/Cards/FactListCard";

const meta: Meta<typeof FactListCard> = {
  title: "Components/Cards/Fact List Card",
  component: FactListCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A Fact List Card is a card that displays a list of facts or statistics.`,
      },
    },
  },
};

const Default: StoryObj<FactListCardProps> = {
  args: {
    title: "Can digital technology be an equality machine?",
    list: [
      "Global employment growth will be only 1.0 per cent in 2023, less than half the level in 2022.",
      "The labour market deterioration is mainly due to emerging geopolitical tensions and the Ukraine conflict.",
      "The current slowdown means that many workers will have to accept lower quality jobs, often at very low pay.",
    ],
    theme: "dark",
    size: "narrow",
    titleLevel: "h2",
    loading: false,
  },
};

export default meta;
export { Default };
