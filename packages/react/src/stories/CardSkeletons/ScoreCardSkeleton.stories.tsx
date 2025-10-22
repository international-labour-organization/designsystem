import { Meta, StoryObj } from "@storybook/react";

import { ScoreCard } from "../../components/Cards/ScoreCard";

const meta: Meta<typeof ScoreCard.Skeleton> = {
  title: "Components/Cards/Card Skeletons/Score Card Skeleton",
  component: ScoreCard.Skeleton,
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
        component: `The Score Card Skeleton displays a skeleton of the Score Card for use while content is loading.`,
      },
    },
  },
};

const Default: StoryObj<React.ComponentProps<typeof ScoreCard.Skeleton>> = {
  args: {
    theme: "light",
    size: "narrow",
  },
};

export default meta;
export { Default };
