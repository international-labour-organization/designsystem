import { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "../../components/Cards";
import CardArgs from "../../components/Cards/Card.args";
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
    cornercut: {
      options: ["cornercut", "corner"],
      control: { type: "radio" },
    },
    color: {
      options: ["turquoise", "green", "yellow", "blue"],
      control: { type: "select" },
    },
    size: {
      options: ["wide", "standard", "narrow"],
      control: { type: "radio" },
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
  args: CardArgs.statCard,
  name: "Default",
};
