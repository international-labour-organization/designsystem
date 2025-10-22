import { Meta, StoryObj } from "@storybook/react";

import {
  MultiLinkCard,
  MultiLinkCardSkeletonProps,
} from "../../components/Cards/MultiLinkCard";

const meta: Meta<typeof MultiLinkCard.Skeleton> = {
  title: "Components/Cards/Card Skeletons/Multilink Card Skeleton",
  component: MultiLinkCard.Skeleton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["standard", "narrow", "wide", "fluid"],
    },
    alignment: {
      control: "select",
      options: ["left", "right"],
    },
    theme: {
      control: "select",
      options: ["light", "soft"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The Multilink Card Skeleton displays a skeleton of the Multilink Card for use while content is loading.`,
      },
    },
  },
};

const Default: StoryObj<MultiLinkCardSkeletonProps> = {
  args: {
    theme: "light",
    size: "standard",
    alignment: "left",
  },
};

export default meta;
export { Default };
