import { Meta, StoryObj } from "@storybook/react";
import { DataCard } from "../../components/Cards";
import CardArgs from "../../components/Cards/Card.args";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

const CardMeta: Meta<typeof DataCard> = {
  title: "Components/Cards/Data Card",
  component: DataCard,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["narrow", "wide", "fluid"],
      control: { type: "radio" },
    },
    columns: {
      options: ["one", "two"],
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

export const DataCardDefault: StoryObj<typeof DataCard> = {
  args: CardArgs.dataCard,
  name: "Default",
};
