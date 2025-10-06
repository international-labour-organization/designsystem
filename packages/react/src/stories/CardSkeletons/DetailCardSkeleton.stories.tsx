import { Meta, StoryObj } from "@storybook/react";

import {
  DetailCardSkeleton,
  DetailCardSkeletonProps,
} from "../../components/Cards/DetailCard";

const meta: Meta<typeof DetailCardSkeleton> = {
  title: "Components/Cards/Card Skeletons/Detail Card Skeleton",
  component: DetailCardSkeleton,
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
        component: `The Detail Card Skeleton displays a skeleton of the Detail Card for use while content is loading.`,
      },
    },
  },
};

const Default: StoryObj<DetailCardSkeletonProps> = {
  args: {
    theme: "light",
    size: "narrow",
  },
};

export default meta;
export { Default };
