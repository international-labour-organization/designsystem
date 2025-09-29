import { Meta, StoryObj } from "@storybook/react";

import { StatCard, StatCardProps } from "../../components/Cards/StatCard";

const meta: Meta<typeof StatCard> = {
  title: "Components/Cards/Stat Card",
  component: StatCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The Stat Card component displays a card with statistical content, including a title, intro text, and source link.`,
      },
    },
  },
};

const Default: StoryObj<StatCardProps> = {
  args: {
    title: "Global employment growth down by half in 2023",
    intro:
      "The current global economic slowdown is likely to force more workers to accept lower quality, poorly paid jobs which lack job security and social protection, so accentuating inequalities exacerbated by the COVID-19 crisis.",
    color: "blue",
    source: {
      label: "World Employment and Social Outlook: Trends 2023",
      url: "https://www.ilo.org/global/research/global-reports/weso/WCMS_865332/lang--en/index.htm",
    },
    loading: false,
  },
};

export default meta;
export { Default };
