import type { CSSProperties } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Title, Primary, Controls } from "@storybook/blocks";
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

const galleryStyles: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: "1.5rem",
  marginTop: "1.5rem",
};

const galleryItemStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem",
  border: "1px solid #e0e0e0",
  borderRadius: "0.5rem",
  minHeight: "120px",
};

const IconGallery = () => (
  <div style={galleryStyles}>
    {iconNames
      .filter((iconName) => iconName !== "Icon")
      .map((iconName) => {
        return (
          <div key={iconName} style={galleryItemStyles}>
            <Icon name={iconName} />
            <code>{iconName}</code>
          </div>
        );
      })}
  </div>
);

const IconDocsPage = () => (
  <>
    <Title />
    <p>
      The Icon component allows you to use icons as React components. Icons can
      be rendered in different colors and sizes using props.
    </p>
    <p>
      Below you can see all the icons currently available in the design system.
    </p>
    <section>
      <Primary />
      <Controls />
      <section>
        <h2 id="list-of-icons">List of icons</h2>
        <IconGallery />
      </section>
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
