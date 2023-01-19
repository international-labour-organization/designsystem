import { Meta, StoryObj } from "@storybook/react";
import { Callout, calloutArgs } from "../../components/Callout";

const CalloutMeta: Meta<typeof Callout> = {
  title: "Components/Feedback/Callout",
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
};

export default CalloutMeta;

export const InfoCallout: StoryObj<typeof Callout> = {
  args: calloutArgs.baseArgs,
  name: "Info",
};

export const SuccessCallout: StoryObj<typeof Callout> = {
  args: calloutArgs.success,
  name: "Success",
};

export const WarningCallout: StoryObj<typeof Callout> = {
  args: calloutArgs.warning,
  name: "Warning",
};

export const ErrorCallout: StoryObj<typeof Callout> = {
  args: calloutArgs.error,
  name: "Error",
};
