import { Meta, StoryObj } from "@storybook/react";

import {
  FeatureCard,
  FeatureCardSkeletonProps,
} from "../../components/Cards/FeatureCard";

const meta: Meta<typeof FeatureCard.Skeleton> = {
  title: "Components/Cards/Card Skeletons/Feature Card Skeleton",
  component: FeatureCard.Skeleton,
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
        component: `The Feature Card Skeleton displays a skeleton of the Feature Card for use while content is loading.`,
      },
    },
  },
};

const Default: StoryObj<FeatureCardSkeletonProps> = {
  args: {
    theme: "light",
    size: "narrow",
  },
};

export default meta;
export { Default };
