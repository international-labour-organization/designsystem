import { Meta, StoryObj } from "@storybook/react";

import { StatCard } from "../../components/Cards/StatCard";

const meta: Meta<typeof StatCard.Skeleton> = {
  title: "Components/Cards/Card Skeletons/Stat Card Skeleton",
  component: StatCard.Skeleton,
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

const Default: StoryObj<React.ComponentProps<typeof StatCard.Skeleton>> = {
  args: {
    theme: "light",
    size: "standard",
  },
};

export default meta;
export { Default };
