import { Meta, StoryObj } from "@storybook/react";

import {
  PromoCardSkeleton,
  PromoCardSkeletonProps,
} from "../../components/Cards/PromoCard";

const meta: Meta<typeof PromoCardSkeleton> = {
  title: "Components/Cards/Card Skeletons/Promo Card Skeleton",
  component: PromoCardSkeleton,
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
        component: `The Promo Card Skeleton displays a skeleton of the Promo Card for use while content is loading.`,
      },
    },
  },
};

const Default: StoryObj<PromoCardSkeletonProps> = {
  args: {
    theme: "light",
    size: "narrow",
  },
};

export default meta;
export { Default };
