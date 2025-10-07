import { Meta, StoryObj } from "@storybook/react";

import {
  TextCardSkeleton,
  TextCardSkeletonProps,
} from "../../components/Cards/TextCard";

const meta: Meta<typeof TextCardSkeleton> = {
  title: "Components/Cards/Card Skeletons/Text Card Skeleton",
  component: TextCardSkeleton,
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
        component: `The Text Card Skeleton displays a skeleton of the Text Card for use while content is loading.`,
      },
    },
  },
};

const Default: StoryObj<TextCardSkeletonProps> = {
  args: {
    theme: "light",
    size: "narrow",
  },
};

export default meta;
export { Default };
