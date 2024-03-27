import { Meta, StoryObj } from "@storybook/react";
import {
  FeatureCard,
  FeatureCardArgs,
} from "../../components/Cards/FeatureCard";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

const CardMeta: Meta<typeof FeatureCard> = {
  title: "Components/Cards/Feature Card",
  component: FeatureCard,
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

export const FeatureCardDefault: StoryObj<typeof FeatureCard> = {
  args: FeatureCardArgs,
  name: "Default",
  render: (args) => <FeatureCard {...args} />,
};
