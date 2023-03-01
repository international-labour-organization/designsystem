import { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "../../components/Navigation";
import NavigationArgs from "../../components/Navigation/Navigation.args";

const NavigationMeta: Meta<typeof Navigation> = {
  title: "Components/Navigation/Navigation",
  component: Navigation,
};

export default NavigationMeta;

export const BasicNavigation: StoryObj<typeof Navigation> = {
  args: NavigationArgs.basic,
  name: "Basic",
};
