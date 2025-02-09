import { Meta, StoryObj } from "@storybook/react";
import { Notification, NotificationProps } from "../../components/Notification";

const meta: Meta<typeof Notification> = {
  title: "Components/Feedback/Notification",
  tags: ["autodocs"],
  component: Notification,
  argTypes: {
    type: {
      options: ["error", "info", "success", "warning"],
      control: { type: "select" },
    },
    placement: {
      options: ["dialog", "inline"],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The Notification component presents a dismissible alert. It can appear as an inline alert, which appears in the normal flow of the document, or it can appear as a dialog, highest in the document's z-index.`,
      },
    },
  },
};

const Default: StoryObj<NotificationProps> = {
  args: {
    headline: "With CTA",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "info",
    placement: "inline",
    closelabel: "Close",
    cta: {
      label: "Optional CTA",
      url: "http://www.google.com",
    },
  },
  name: "Default",
};

export default meta;
export { Default };
