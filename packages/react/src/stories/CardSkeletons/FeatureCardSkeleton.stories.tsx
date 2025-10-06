import { Meta, StoryObj } from "@storybook/react";

import {
  FeatureCardSkeleton,
  FeatureCardSkeletonProps,
} from "../../components/Cards/FeatureCard";

const meta: Meta<typeof FeatureCardSkeleton> = {
  title: "Components/Cards/Card Skeletons/Feature Card Skeleton",
  component: FeatureCardSkeleton,
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
