import { Meta, StoryObj } from "@storybook/react";
import {
  FactlistCard,
  FactlistCardArgs,
} from "../../components/Cards/FactlistCard";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

const CardMeta: Meta<typeof FactlistCard> = {
  title: "Components/Cards/Factlist Card",
  component: FactlistCard,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: ["dark", "light"],
      control: { type: "radio" },
    },
    size: {
      options: ["wide", "narrow", "fluid"],
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

export const FactListCardDefault: StoryObj<typeof FactlistCard> = {
  args: FactlistCardArgs,
  name: "Default",
};
