import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../components/Card";
import CardArgs from "../../components/Card/Card.args";

const CardMeta: Meta<typeof Card> = {
  title: "Components/Content/Card",
  component: Card,
};

export default CardMeta;

export const GraphicCard: StoryObj<typeof Card> = {
  args: CardArgs.graphicTextCard,
  name: "Graphic Text Card",
};

export const StatCard: StoryObj<typeof Card> = {
  args: CardArgs.statCard,
  name: "Stat Card",
};

export const MultilinkCard: StoryObj<typeof Card> = {
  args: CardArgs.multilinkCard,
  name: "Multilink Card",
};

export const GraphicPromoCard: StoryObj<typeof Card> = {
  args: CardArgs.graphicPromoCard,
  name: "Graphic Promo Card",
};

export const FeatureCard: StoryObj<typeof Card> = {
  args: CardArgs.featureCard,
  name: "Feature Card",
};

export const DetailCard: StoryObj<typeof Card> = {
  args: CardArgs.detailCard,
  name: "Detail Card",
};

export const FactListCard: StoryObj<typeof Card> = {
  args: CardArgs.factListCard,
  name: "Fact List Card",
};

export const DataCard: StoryObj<typeof Card> = {
  args: CardArgs.dataCard,
  name: "Data Card",
};
