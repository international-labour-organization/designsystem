import { Meta, StoryObj } from "@storybook/react";
import {
  CardGroup,
  CardGroupProps,
  DataCardProps,
  DetailCardProps,
  FactListCardProps,
  FeatureCardProps,
  MultiLinkCardProps,
  PromoCardProps,
  StatCardProps,
  TextCardProps,
} from "../../components/Cards";
import { Default as StatCardDefault } from "./StatCard.stories";
import { Default as MultiLinkCardDefault } from "./MultiLinkCard.stories";
import { Default as TextCardDefault } from "./TextCard.stories";
import { Default as PromoCardDefault } from "./PromoCard.stories";
import { Default as FeatureCardDefault } from "./FeatureCard.stories";
import { Default as DetailCardDefault } from "./DetailCard.stories";
import { Default as FactListCardDefault } from "./FactListCard.stories";
import { Default as DataCardDefault } from "./DataCard.stories";

const meta: Meta<typeof CardGroup> = {
  title: "Components/Cards/CardGroup",
  component: CardGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A card group component for displaying multiple cards of different types.`,
      },
    },
  },
  argTypes: {
    cardCount: {
      options: ["one", "two", "three", "four"],
      control: { type: "radio" },
    },
    collapsed: {
      control: { type: "boolean" },
    },
  },
};

const StatCardGroup: StoryObj<CardGroupProps<"stat">> = {
  name: "Stat Card Group",
  args: {
    type: "stat",
    group: [
      StatCardDefault.args as StatCardProps,
      StatCardDefault.args as StatCardProps,
      StatCardDefault.args as StatCardProps,
    ],
    cardCount: "three",
    cta: { label: "Learn More", url: "#" },
  },
};

const MultiLinkCardGroup: StoryObj<CardGroupProps<"multilink">> = {
  name: "MultiLink Card Group",
  args: {
    type: "multilink",
    group: [
      MultiLinkCardDefault.args as MultiLinkCardProps,
      MultiLinkCardDefault.args as MultiLinkCardProps,
      MultiLinkCardDefault.args as MultiLinkCardProps,
    ],
    cardCount: "three",
    cta: { label: "Learn More", url: "#" },
  },
};

const TextCardGroup: StoryObj<CardGroupProps<"text">> = {
  name: "Text Card Group",
  args: {
    type: "text",
    group: [
      TextCardDefault.args as TextCardProps,
      TextCardDefault.args as TextCardProps,
      TextCardDefault.args as TextCardProps,
    ],
    cardCount: "three",
    cta: { label: "Learn More", url: "#" },
  },
};

const PromoCardGroup: StoryObj<CardGroupProps<"promo">> = {
  name: "Promo Card Group",
  args: {
    type: "promo",
    group: [
      PromoCardDefault.args as PromoCardProps,
      PromoCardDefault.args as PromoCardProps,
      PromoCardDefault.args as PromoCardProps,
    ],
    cardCount: "three",
    cta: { label: "Learn More", url: "#" },
  },
};

const FeatureCardGroup: StoryObj<CardGroupProps<"feature">> = {
  name: "Feature Card Group",
  args: {
    type: "feature",
    group: [
      FeatureCardDefault.args as FeatureCardProps,
      FeatureCardDefault.args as FeatureCardProps,
      FeatureCardDefault.args as FeatureCardProps,
    ],
    cardCount: "three",
    cta: { label: "Learn More", url: "#" },
  },
};

const DetailCardGroup: StoryObj<CardGroupProps<"detail">> = {
  name: "Detail Card Group",
  args: {
    type: "detail",
    group: [
      DetailCardDefault.args as DetailCardProps,
      DetailCardDefault.args as DetailCardProps,
      DetailCardDefault.args as DetailCardProps,
    ],
    cardCount: "three",
    cta: { label: "Learn More", url: "#" },
  },
};

const FactListCardGroup: StoryObj<CardGroupProps<"factlist">> = {
  name: "FactList Card Group",
  args: {
    type: "factlist",
    group: [
      FactListCardDefault.args as FactListCardProps,
      FactListCardDefault.args as FactListCardProps,
      FactListCardDefault.args as FactListCardProps,
    ],
    cardCount: "three",
    cta: { label: "Learn More", url: "#" },
  },
};

const DataCardGroup: StoryObj<CardGroupProps<"data">> = {
  name: "Data Card Group",
  args: {
    type: "data",
    group: [
      DataCardDefault.args as DataCardProps,
      DataCardDefault.args as DataCardProps,
      DataCardDefault.args as DataCardProps,
    ],
    cardCount: "three",
    cta: { label: "Learn More", url: "#" },
  },
};

export default meta;
export {
  StatCardGroup,
  MultiLinkCardGroup,
  TextCardGroup,
  PromoCardGroup,
  FeatureCardGroup,
  DetailCardGroup,
  FactListCardGroup,
  DataCardGroup,
};
