import type { Meta, StoryObj } from "@storybook/react";
import { Status } from "../../components/Status/Status";

const meta: Meta<typeof Status> = {
  title: "Components/User Interface/Status",
  component: Status,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The Status component is used to display a status message.",
      },
    },
  },
  argTypes: {
    statusType: {
      control: "select",
      options: ["active", "info", "alert", "subtle", "inactive"],
      description: "The type of status to display",
    },
    content: {
      control: "text",
      description: "The content to display inside the status",
    },
    elementId: {
      control: "text",
      description: "The ID of the status element",
    },
    className: {
      control: "text",
      description: "Optional class name for additional styling",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Status>;

export const Active: Story = {
  args: {
    statusType: "active",
    content: "Active",
  },
};

export const Info: Story = {
  args: {
    statusType: "info",
    content: "Info",
  },
};

export const Alert: Story = {
  args: {
    statusType: "alert",
    content: "Alert",
  },
};

export const Subtle: Story = {
  args: {
    statusType: "subtle",
    content: "Subtle",
  },
};

export const Inactive: Story = {
  args: {
    statusType: "inactive",
    content: "Inactive",
  },
};

export const WithCustomClass: Story = {
  args: {
    statusType: "active",
    content: "Custom Styled",
    className: "custom-status",
  },
};

export const WithElementId: Story = {
  args: {
    statusType: "info",
    content: "With ID",
    elementId: "status-example",
  },
};
