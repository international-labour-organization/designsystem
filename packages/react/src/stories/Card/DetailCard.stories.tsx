import { Meta, StoryObj } from "@storybook/react";
import { DetailCard, DetailCardArgs } from "../../components/Cards/DetailCard";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

const CardMeta: Meta<typeof DetailCard> = {
  title: "Components/Cards/Detail Card",
  component: DetailCard,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["wide", "narrow", "fluid"],
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

export const DetailCardDefault: StoryObj<typeof DetailCard> = {
  args: DetailCardArgs,
  name: "Default",
};
