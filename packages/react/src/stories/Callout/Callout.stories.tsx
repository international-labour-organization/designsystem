import { Meta, StoryObj } from "@storybook/react";

import { Callout, CalloutProps } from "../../components/Callout";

const meta: Meta<typeof Callout> = {
  title: "Components/Feedback/Callout",
  tags: ["autodocs"],
  component: Callout,
  argTypes: {
    isCollapsible: {
      options: [true, false],
      control: { type: "boolean" },
    },
    isOpen: {
      options: [true, false],
      control: { type: "boolean" },
    },
    type: {
      options: ["info", "error", "success", "warning"],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The Callout component is used to highlight important information.
        It can be collapsible and can display different types of messages such as info, error, success, and warning.`,
      },
    },
  },
};

const Default: StoryObj<CalloutProps> = {
  args: {
    headline: "This is a callout component",
    copy: "It's job is to bring users' attention to something important that they might not otherwise have known. I can also have a call to action.",
    type: "info",
    isCollapsible: false,
    isOpen: true,
    toggleOpenLabel: "Less",
    toggleClosedLabel: "More",
  },
  name: "Info",
};

export default meta;
export { Default };
