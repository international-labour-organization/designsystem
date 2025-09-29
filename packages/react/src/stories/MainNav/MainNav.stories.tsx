import { Meta, StoryObj } from "@storybook/react";
import { MainNav, MainNavProps } from "../../components/Nav";
import { MainNavArgs } from "./MainNav.args";

const meta: Meta<typeof MainNav> = {
  title: "Components/Navigation/Navigation",
  component: MainNav,
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
