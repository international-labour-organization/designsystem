import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../components/Cards";
import CardArgs from "../../components/Cards/Card.args";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

const CardMeta: Meta<typeof Card> = {
  title: "Components/Content/Card",
  component: Card,
  argTypes: {
    theme: {
      options: ["dark", "light"],
      control: { type: "radio" },
    },
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
          <Description>
            Cards display prominent content of a page. This component is a
            wrapper around all of the card types in the design system except for
            the Hero Card. To use it, pass a `type` setting to the card and then
            pass the appropriate fields for that card type. For more information
            about the settings you can pass to each card type, see the
            documentation for that card.
          </Description>
          <Primary />
          <ArgTypes of={CardMeta} />
          <Stories />
        </>
      ),
    },
  },
};

export default CardMeta;

export const FeatureCard: StoryObj<typeof Card> = {
  args: { ...CardArgs.featureCard, type: "feature" },
  name: "Feature Card",
};

export const textCard: StoryObj<typeof Card> = {
  args: { ...CardArgs.textCard, type: "text" },
  name: "Text Card",
};

export const DetailCard: StoryObj<typeof Card> = {
  args: { ...CardArgs.detailCard, type: "detail" },
  name: "Detail Card",
};

export const PromoCard: StoryObj<typeof Card> = {
  args: { ...CardArgs.promoCard, type: "promo" },
  name: "Promo Card",
};

export const MultilinkCard: StoryObj<typeof Card> = {
  args: { ...CardArgs.multilinkCard, type: "multilink" },
  name: "Multilink Card",
};

export const DataCard: StoryObj<typeof Card> = {
  args: { ...CardArgs.dataCard, type: "data" },
  name: "Data Card",
};

export const StatCard: StoryObj<typeof Card> = {
  args: { ...CardArgs.statCard, type: "stat" },
  name: "Stat Card",
};

export const FactListCard: StoryObj<typeof Card> = {
  args: { ...CardArgs.factListCard, type: "factlist" },
  name: "Fact List Card",
};
