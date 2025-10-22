import { Meta, StoryObj } from "@storybook/react";

import { PromoCard } from "../../components/Cards/PromoCard";

type PromoCardSkeletonProps = React.ComponentProps<typeof PromoCard.Skeleton>;

const meta: Meta<typeof PromoCard.Skeleton> = {
  title: "Components/Cards/Card Skeletons/Promo Card Skeleton",
  component: PromoCard.Skeleton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["narrow", "wide", "fluid", "standard"],
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
