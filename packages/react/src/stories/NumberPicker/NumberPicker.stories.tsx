import { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Subheading,
  ArgsTable,
} from "@storybook/addon-docs";
import { NumberPicker } from "../../components";
import NumberPickerArgs from "../../components/NumberPicker/NumberPicker.args";
import { FormControl, FormControlProps } from "../../components/FormControl";

const NumberPickerMeta: Meta<typeof NumberPicker> = {
  title: "Components/Forms/NumberPicker",
  component: NumberPicker,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The NumberPicker component allows users to select a number from a
            list.
          </Description>
          <Primary />
          <Subheading>Props</Subheading>
          <ArgsTable />
          <Stories title="Examples" />
        </>
      ),
    },
  },
};

export default NumberPickerMeta;

const startFormCtrlProps: Omit<FormControlProps, "children"> = {
  label: "Pick a number",
  labelPlacement: "top",
  labelSize: "medium",
  style: { width: "50%" },
  errorMessage: "There was an error selecting your number",
};

export const Basic: StoryObj<typeof NumberPicker> = {
  args: NumberPickerArgs.basic,
  render: (args) => (
    <FormControl {...startFormCtrlProps}>
      <NumberPicker {...args} />
    </FormControl>
  ),
};

export const Error: StoryObj<typeof NumberPicker> = {
  args: NumberPickerArgs.haserror,
  render: (args) => (
    <FormControl {...startFormCtrlProps}>
      <NumberPicker {...args} />
    </FormControl>
  ),
};

export const Disabled: StoryObj<typeof NumberPicker> = {
  args: { ...NumberPickerArgs.basic, disabled: true },
  render: (args) => (
    <FormControl {...startFormCtrlProps}>
      <NumberPicker {...args} />
    </FormControl>
  ),
};
