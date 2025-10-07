import { Meta, StoryObj } from "@storybook/react";

import {
  StatCardSkeleton,
  StatCardSkeletonProps,
} from "../../components/Cards/StatCard";

const meta: Meta<typeof StatCardSkeleton> = {
  title: "Components/Cards/Card Skeletons/Stat Card Skeleton",
  component: StatCardSkeleton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["standard", "large", "fluid"],
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The Stat Card Skeleton displays a skeleton of the Stat Card for use while content is loading.`,
      },
    },
  },
};

const Default: StoryObj<StatCardSkeletonProps> = {
  args: {
    theme: "light",
    size: "standard",
  },
};

export default meta;
export { Default };
