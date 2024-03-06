import { Meta, StoryObj } from "@storybook/react";
import { TextCard } from "../../components/Cards";
import CardArgs from "../../components/Cards/Card.args";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

const CardMeta: Meta<typeof TextCard> = {
  title: "Components/Cards/Text Card",
  component: TextCard,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: ["dark", "light"],
      control: { type: "radio" },
    },
    cornercut: {
      options: ["cornercut", "corner"],
      control: { type: "radio" },
    },
    size: {
      options: ["wide", "fluid", "narrow"],
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

export const TextCardDefault: StoryObj<typeof TextCard> = {
  args: CardArgs.textCard,
  name: "Default",
};
