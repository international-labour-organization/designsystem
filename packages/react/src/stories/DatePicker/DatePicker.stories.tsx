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
import { DatePicker } from "../../components";
import DatePickerArgs from "../../components/DatePicker/DatePicker.args";
import { FormControl, FormControlProps } from "../../components/FormControl";

const DatePickerMeta: Meta<typeof DatePicker> = {
  title: "Components/Forms/DatePicker",
  component: DatePicker,
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
            The DatePicker component allows users to select a date from a
            calendar.
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

export default DatePickerMeta;

const startFormCtrlProps: Omit<FormControlProps, "children"> = {
  label: "Select a date",
  labelPlacement: "top",
  labelSize: "medium",
  style: { width: "50%" },
  errorMessage: "There was an error selecting your date",
};

export const Basic: StoryObj<typeof DatePicker> = {
  args: DatePickerArgs.basic,
  render: (args) => (
    <FormControl {...startFormCtrlProps}>
      <DatePicker {...args} />
    </FormControl>
  ),
};

export const Error: StoryObj<typeof DatePicker> = {
  args: DatePickerArgs.haserror,
  render: (args) => (
    <FormControl {...startFormCtrlProps}>
      <DatePicker {...args} />
    </FormControl>
  ),
};

export const Disabled: StoryObj<typeof DatePicker> = {
  args: { ...DatePickerArgs.basic, disabled: true },
  render: (args) => (
    <FormControl {...startFormCtrlProps}>
      <DatePicker {...args} />
    </FormControl>
  ),
};

export const RTL: StoryObj<typeof DatePicker> = {
  args: { ...DatePickerArgs.basic, rtl: true },
  render: (args) => (
    <FormControl {...startFormCtrlProps}>
      <DatePicker {...args} />
    </FormControl>
  ),
};
