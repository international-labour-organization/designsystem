import { Meta, StoryObj } from "@storybook/react";

import {
  FactListCard,
  FactListCardSkeletonProps,
} from "../../components/Cards/FactListCard";

const meta: Meta<typeof FactListCard.Skeleton> = {
  title: "Components/Cards/Card Skeletons/Fact List Card Skeleton",
  component: FactListCard.Skeleton,
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
        component: `The Fact List Card Skeleton displays a skeleton of the Fact List Card for use while content is loading.`,
      },
    },
  },
};

const Default: StoryObj<FactListCardSkeletonProps> = {
  args: {
    theme: "light",
    size: "narrow",
  },
};

export default meta;
export { Default };
