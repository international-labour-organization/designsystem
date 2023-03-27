import { Meta, StoryObj } from "@storybook/react";
import { CardGroup } from "../../components/Card";
import CardGroupArgs from "../../components/Card/CardGroup.args";

const CardGroupMeta: Meta<typeof CardGroup> = {
  title: "Components/Content/CardGroup",
  component: CardGroup,
};

export default CardGroupMeta;

export const GraphicCardGroup: StoryObj<typeof CardGroup> = {
  args: CardGroupArgs.graphicCardGroup,
  name: "Graphic Text Group",
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
  args: CardGroupArgs.graphicPromoCardGroup,
  name: "Graphic Promo Group",
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
