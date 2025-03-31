import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../../components/Tabs";
import TabsArgs from "../../components/Tabs/Tabs.args";

const TabsMeta: Meta<typeof Tabs> = {
  title: "Components/User Interface/Tabs",
  component: Tabs,
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "Theme of the tabs component",
      defaultValue: "light",
    },
  },
};

export default TabsMeta;

export const Default: StoryObj<typeof Tabs> = {
  args: TabsArgs.tabs,
  name: "Default",
};

export const TabsWithIcon: StoryObj<typeof Tabs> = {
  args: TabsArgs.withIcon,
  name: "With Icon",
};

export const MultipleTabs: StoryObj<typeof Tabs> = {
  args: TabsArgs.fiveItems,
  name: "Five Items",
};
