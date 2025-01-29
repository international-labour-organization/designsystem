import { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProps } from "../../components/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Feedback/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};
const Default: StoryObj<TooltipProps> = {
  args: {
    label: "Tooltip text",
    icon: true,
    iconTheme: "light",
    theme: "dark",
    children: (
      <a href="https://www.google.com/">This is testing for the tooltip</a>
    ),
  },
};

export default meta;
export { Default };
