import { Meta, StoryObj } from "@storybook/react";
import { MultilinkCard } from "../../components/Cards";
import CardArgs from "../../components/Cards/Card.args";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

const CardMeta: Meta<typeof MultilinkCard> = {
  title: "Components/Cards/Multilink Card",
  component: MultilinkCard,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["wide", "standard", "narrow"],
      control: { type: "radio" },
    },
    alignment: {
      options: ["left", "right"],
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

export const MultilinkCardDefault: StoryObj<typeof MultilinkCard> = {
  args: CardArgs.multilinkCard,
  name: "Default",
};
