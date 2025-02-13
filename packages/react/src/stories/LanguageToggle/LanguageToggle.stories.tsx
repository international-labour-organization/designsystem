import { Meta, StoryObj } from "@storybook/react";

import {
  LanguageToggle,
  LanguageToggleProps,
} from "../../components/LanguageToggle";

const meta: Meta<typeof LanguageToggle> = {
  title: "Components/Navigation/LanguageToggle",
  component: LanguageToggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The LanguageToggle component displays a language toggle.`,
      },
    },
  },
  argTypes: {
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    hideIcon: {
      control: { type: "boolean" },
    },
  },
};

const Default: StoryObj<LanguageToggleProps> = {
  args: {
    language: "English",
    options: [
      { label: "Spanish", url: "#" },
      { label: "German", url: "#" },
      { label: "French", url: "#" },
    ],
  },
};

export default meta;
export { Default };
