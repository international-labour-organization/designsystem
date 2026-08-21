import { Meta, StoryFn } from "@storybook/react";
import { Title, Primary, Controls, AnchorMdx } from "@storybook/blocks";
import { Icon, IconProps } from "../../components/Icon";
import * as icons from "@ilo-org/icons-react/next";

const iconNames = Array.from(new Set<string>(Object.keys(icons)));

const nameArgType = {
  control: {
    type: "select",
  },
  options: iconNames,
};

const colorArgtype = {
  control: {
    type: "color",
  },
  defaultValue: "currentColor",
};

const IconDocsPage = () => (
  <>
    <Title />
    <p>
      The Icon component allows you to use icons as React components. Icons can
      be rendered in different colors and sizes using props.
    </p>
    <p>
      See the <AnchorMdx href="/docs/usage-icons--docs">Icons page</AnchorMdx>{" "}
      for a complete list of the icons available in the design system.
    </p>
    <section>
      <Primary />
      <Controls />
    </section>
  </>
);

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
      page: IconDocsPage,
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
