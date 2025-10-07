import { Meta, StoryObj } from "@storybook/react";

import {
  DataCardSkeleton,
  DataCardSkeletonProps,
} from "../../components/Cards/DataCard";

const meta: Meta<typeof DataCardSkeleton> = {
  title: "Components/Cards/Card Skeletons/Data Card Skeleton",
  component: DataCardSkeleton,
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
    columns: {
      control: "select",
      options: ["one", "two"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The Data Card Skeleton displays a skeleton of the Data Card for use while content is loading.`,
      },
    },
  },
};

const Default: StoryObj<DataCardSkeletonProps> = {
  args: {
    theme: "light",
    size: "narrow",
    columns: "one",
  },
};

export default meta;
export { Default };
