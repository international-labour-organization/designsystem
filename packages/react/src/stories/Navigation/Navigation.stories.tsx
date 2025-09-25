import { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "../../components/Nav/Navigation";
import { MainNavProps } from "../../components/Nav/Navigation.props";
import { MainNavArgs } from "./Navigation.args";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The Main Navigation component",
      },
    },
  },
};

const Default: StoryObj<MainNavProps> = {
  args: MainNavArgs,
};

export default meta;
export { Default };
