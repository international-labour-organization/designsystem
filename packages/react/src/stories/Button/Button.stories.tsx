import { Meta, StoryFn, StoryObj } from "@storybook/react-vite";

import { Button, ButtonProps } from "../../components/Button";

const meta: Meta<ButtonProps> = {
  title: "Components/User Interface/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A button or a link styled like a button`,
      },
    },
  },
};
const Template: StoryFn = (args: ButtonProps) => {
  return <Button {...args} />;
};

export const Default: StoryObj<ButtonProps> = {
  render: Template,
  args: {
    children: "Default Button",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  render: Template,
  args: {
    children: "Secondary Button",
    type: "secondary",
  },
};

export const Small: StoryObj<ButtonProps> = {
  render: Template,
  args: {
    children: "Large Button",
    size: "small",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  render: Template,
  args: {
    children: "Button with Icon",
    icon: { name: "check" },
  },
};

export const IconOnly: StoryObj<ButtonProps> = {
  render: Template,
  args: {
    children: "Icon Only Button",
    icon: { name: "close", only: true },
  },
};

export const AsLink: StoryObj<ButtonProps> = {
  render: Template,
  args: {
    link: {
      url: "https://ilo.org",
      label: "Link Button",
      target: "_blank",
    },
  },
};

export default meta;
