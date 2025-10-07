import { Meta, StoryObj } from "@storybook/react";

import {
  ScoreCardSkeleton,
  ScoreCardSkeletonProps,
} from "../../components/Cards/ScoreCard";

const meta: Meta<typeof ScoreCardSkeleton> = {
  title: "Components/Cards/Card Skeletons/Score Card Skeleton",
  component: ScoreCardSkeleton,
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

const Default: StoryObj<ScoreCardSkeletonProps> = {
  args: {
    theme: "light",
    size: "narrow",
  },
};

export default meta;
export { Default };
