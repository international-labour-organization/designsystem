import { Meta, StoryObj } from "@storybook/react";
import { StatCard, StatCardArgs } from "../../components/Cards/StatCard";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

const CardMeta: Meta<typeof StatCard> = {
  title: "Components/Cards/Stat Card",
  component: StatCard,
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["turquoise", "green", "yellow", "blue"],
      control: { type: "select" },
    },
    size: {
      options: ["standard", "fluid"],
      control: { type: "radio" },
    },
    titleLevel: {
      options: ["p", "h1", "h2", "h3", "h4", "h5"],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Card</Title>
          <Description>Cards display prominent content of a page.</Description>
          <Primary />
          <ArgTypes of={CardMeta} />
          <Stories />
        </>
      ),
    },
  },
};

export default CardMeta;

export const StatCardDefault: StoryObj<typeof StatCard> = {
  args: StatCardArgs,
  name: "Default",
};
