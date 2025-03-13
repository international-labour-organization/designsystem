import { Meta, StoryFn } from "@storybook/react";
import { Icon, IconProps } from "../../components/Icon";
import * as icons from "@ilo-org/icons-react/next";

const iconNames = new Set();

for (const icon in icons) {
  iconNames.add(icon);
}

const nameArgType = {
  control: {
    type: "select",
  },
  options: Array.from(iconNames),
};

const colorArgtype = {
  control: {
    type: "color",
  },
  defaultValue: "currentColor",
};

export default {
  title: "Components/User Interface/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: nameArgType,
    color: colorArgtype,
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Icon component is a wrapper around the @ilo-org/icons-react package that allows you to use icons as React components.",
      },
    },
  },
} as Meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "plus",
  size: 24,
  //color: "black",
};

export const Large = Template.bind({});
Large.args = {
  name: "plus",
  size: 24,
  //color: "black",
};

export const Colored = Template.bind({});
Colored.args = {
  name: "plus",
  size: 24,
  //color: "red",
};
