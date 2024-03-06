import { Meta, StoryObj } from "@storybook/react";
import { CardGroup } from "../../components/Cards";
import CardGroupArgs from "../../components/Cards/CardGroup.args";

const CardGroupMeta: Meta<typeof CardGroup> = {
  title: "Components/Cards/CardGroup",
  component: CardGroup,
};

export default CardGroupMeta;

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
};

export const GraphicPromoCardGroup: StoryObj<typeof CardGroup> = {
  args: CardGroupArgs.promoCardGroup,
  name: "Promo Group",
};

export const FeatureCardGroup: StoryObj<typeof CardGroup> = {
  args: CardGroupArgs.featureCardGroup,
  name: "Feature Group",
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
