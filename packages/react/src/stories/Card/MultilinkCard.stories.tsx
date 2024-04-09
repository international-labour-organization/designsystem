import { Meta, StoryObj } from "@storybook/react";
import {
  MultilinkCard,
  MultilinkCardArgs,
} from "../../components/Cards/MultilinkCard";
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
      options: ["wide", "standard", "narrow", "fluid"],
      control: { type: "radio" },
    },
    alignment: {
      options: ["left", "right"],
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

export const MultilinkCardDefault: StoryObj<typeof MultilinkCard> = {
  args: MultilinkCardArgs,
  name: "Default",
};
