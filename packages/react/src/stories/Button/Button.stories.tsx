import { Button, buttonArgs } from "../../components/Button";
import { Meta, StoryObj } from "@storybook/react";

const argTypes = {
  size: {
    options: ["large", "medium", "small"],
    control: { type: "select" },
  },
  type: {
    options: ["primary", "secondary", "tertiary", "alert"],
    control: { type: "select" },
  },
  icononly: {
    options: [true, false],
    control: { type: "boolean" },
  },
  iconPosition: {
    options: ["left", "center", "right"],
    control: { type: "select" },
  },
  opensmodal: {
    options: [true, false],
    control: { type: "boolean" },
  },
};

const ButtonMeta: Meta<typeof Button> = {
  title: "Components/User Interface/Button",
  component: Button,
  argTypes,
};

export default ButtonMeta;

export const PrimaryBtn: StoryObj<typeof Button> = {
  args: buttonArgs.primary,
  name: "Primary",
};

export const SecondaryBtn: StoryObj<typeof Button> = {
  args: buttonArgs.secondary,
  name: "Secondary",
};

export const TertiaryBtn: StoryObj<typeof Button> = {
  args: buttonArgs.tertiary,
  name: "Tertiary",
};

export const AlertBtn: StoryObj<typeof Button> = {
  args: buttonArgs.alert,
  name: "Alert",
};

export const IconBtn: StoryObj<typeof Button> = {
  args: buttonArgs.icon,
  name: "Icon",
};

export const DisabledBtn: StoryObj<typeof Button> = {
  args: buttonArgs.disabled,
  name: "Disabled",
};

export const LinkBtn: StoryObj<typeof Button> = {
  name: "Link",
  args: buttonArgs.link,
};
