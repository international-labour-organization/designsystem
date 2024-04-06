import { Meta, StoryObj } from "@storybook/react";
import CardGroup from "../../components/Cards/CardGroup/CardGroup";
import CardGroupArgs from "../../components/Cards/CardGroup/CardGroup.args";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

const CardGroupMeta: Meta<typeof CardGroup> = {
  title: "Components/Cards/CardGroup",
  component: CardGroup,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["standard", "narrow", "wide", "fluid"],
      control: { type: "select" },
    },
    cardCount: {
      options: ["one", "two", "three", "four"],
      control: { type: "select" },
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
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
          <Title>Card Group</Title>
          <Description>Renders a group of cards</Description>
          <Primary />
          <ArgTypes of={CardGroupMeta} />
          <Stories />
        </>
      ),
    },
  },
};

export default CardGroupMeta;

export const FeatureCardGroup: StoryObj<typeof CardGroup> = {
  args: CardGroupArgs.featureCardGroup,
  name: "Feature Group",
};

export const GraphicCardGroup: StoryObj<typeof CardGroup> = {
  args: CardGroupArgs.textCardGroup,
  name: "Text Group",
};

export const StatCardGroup: StoryObj<typeof CardGroup> = {
  args: CardGroupArgs.statCardGroup,
  name: "Stat Group",
};

export const MultilinkCardGroup: StoryObj<typeof CardGroup> = {
  args: CardGroupArgs.multilinkCardGroup,
  name: "Multilink Group",
  argTypes: {
    alignment: {
      options: ["left", "right"],
      control: { type: "select" },
    },
  },
};

export const GraphicPromoCardGroup: StoryObj<typeof CardGroup> = {
  args: CardGroupArgs.promoCardGroup,
  name: "Promo Group",
};

export const DetailCardGroup: StoryObj<typeof CardGroup> = {
  args: CardGroupArgs.detailCardGroup,
  name: "Detail Group",
};

export const FactListCardGroup: StoryObj<typeof CardGroup> = {
  args: CardGroupArgs.factListCardGroup,
  name: "Fact List Group",
};

export const DataCardGroup: StoryObj<typeof CardGroup> = {
  args: CardGroupArgs.dataCardGroup,
  name: "Data Group",
};
