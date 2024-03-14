import { Meta, StoryObj } from "@storybook/react";
import { PromoCard, PromoCardArgs } from "../../components/Cards/PromoCard";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

const CardMeta: Meta<typeof PromoCard> = {
  title: "Components/Cards/Promo Card",
  component: PromoCard,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: ["dark", "light"],
      control: { type: "radio" },
    },
    cornercut: {
      control: { type: "boolean" },
    },
    size: {
      options: ["wide", "standard", "narrow", "fluid"],
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

export const PromoCardDefault: StoryObj<typeof PromoCard> = {
  args: PromoCardArgs,
  name: "Default",
};
