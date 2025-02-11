import { Meta, StoryObj } from "@storybook/react";
import { Blockquote } from "../../components/Blockquote";

const BlockquoteMeta: Meta<typeof Blockquote> = {
  title: "Components/Content/Blockquote",
  component: Blockquote,
  tags: ["autodocs"],
  argTypes: {
    quote: {
      description: "The quote text",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    cite: {
      description: "The citation for the quote",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
  parameters: {
    docs: {
      description:
        "The Blockquote component is used to display a quoted text along with a citation",
    },
  },
};

export default BlockquoteMeta;

export const Default: StoryObj<typeof Blockquote> = {
  args: {
    quote:
      "The fundamental ideas that forged the ILO one hundred and three years ago still underpin the global pledge to leave no one behind.",
    cite: "ILO Director-General Gilbert F. Houngbo",
  },
};
