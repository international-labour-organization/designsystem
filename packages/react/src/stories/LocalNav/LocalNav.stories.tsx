import { Meta, StoryObj } from "@storybook/react";
import { LocalNav } from "../../components/LocalNav";
import LocalNavArgs from "../../components/LocalNav/LocalNav.args";

const LocalNavMeta: Meta<typeof LocalNav> = {
  title: "Components/Navigation/LocalNav",
  component: LocalNav,
};

export default LocalNavMeta;

export const BasicLocalNav: StoryObj<typeof LocalNav> = {
  args: LocalNavArgs.basic,
  name: "Basic",
};
