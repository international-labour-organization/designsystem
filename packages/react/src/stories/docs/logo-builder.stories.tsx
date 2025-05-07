import { Meta, StoryObj } from "@storybook/react";
import { LogoBuilder } from "./LogoBuilder";

const meta: Meta<typeof LogoBuilder> = {
  title: "Utilities/Logo Builder",
  component: LogoBuilder,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof LogoBuilder> = {};
