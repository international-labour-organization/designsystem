import { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "../../components/Toggle";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from "@storybook/blocks";
import { FormControl, FormControlArgs } from "../../components/FormControl";

const FormControlMeta: Meta<typeof FormControl> = {
  title: "Components/Forms/FormControl",
  component: FormControl,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The FormControl component provides a wrapper for a single form
            element that includes a label, help text, and error message.
          </Description>
          <Primary />
          <Subheading>Mapping labels to inputs</Subheading>
          <Description>
            The FormControl reads the `id` prop of the form element it wraps and
            uses it to map the label to the form element.
          </Description>
          <ArgTypes of={FormControlMeta} />
          <Stories />
        </>
      ),
    },
  },
};

export default FormControlMeta;

export const LabelAfter: StoryObj<typeof FormControl> = {
  args: FormControlArgs.LabelAfter,
  render: (args) => (
    <FormControl {...args}>
      <Toggle id="my-toggle-label-after" size="small" />
    </FormControl>
  ),
};

export const WithHelper: StoryObj<typeof FormControl> = {
  args: FormControlArgs.WithHelper,
  render: (args) => (
    <FormControl {...args}>
      <Toggle id="my-toggle-with-helper" size="small" />
    </FormControl>
  ),
};

export const WithError: StoryObj<typeof FormControl> = {
  args: FormControlArgs.WithError,
  render: (props) => (
    <FormControl {...props}>
      <Toggle id="my-toggle-label-error" size="small" error />
    </FormControl>
  ),
};

export const Disabled: StoryObj<typeof FormControl> = {
  args: FormControlArgs.Disabled,
  render: (props) => (
    <FormControl {...props}>
      <Toggle id="my-toggle-label-disabled" size="small" disabled />
    </FormControl>
  ),
};

export const WithTooltip: StoryObj<typeof FormControl> = {
  args: FormControlArgs.WithTooltip,
  render: (props) => (
    <FormControl {...props}>
      <Toggle id="my-toggle-label-tooltip" size="small" />
    </FormControl>
  ),
};

export const LabelBefore: StoryObj<typeof FormControl> = {
  args: FormControlArgs.LabelBefore,
  render: (props) => (
    <FormControl {...props}>
      <Toggle id="my-toggle-label-before" size="small" />
    </FormControl>
  ),
};

export const LabelTop: StoryObj<typeof FormControl> = {
  args: FormControlArgs.LabelTop,
  render: (props) => (
    <FormControl {...props}>
      <Toggle id="my-toggle-label-top" size="small" />
    </FormControl>
  ),
};

export const LabelBottom: StoryObj<typeof FormControl> = {
  args: FormControlArgs.LabelBottom,
  render: (props) => (
    <FormControl {...props}>
      <Toggle id="my-toggle-label-bottom" size="small" />
    </FormControl>
  ),
};

export const LabelMedium: StoryObj<typeof FormControl> = {
  args: FormControlArgs.LabelMedium,
  render: (args) => (
    <FormControl {...args}>
      <Toggle id="my-toggle-label-medium" size="small" />
    </FormControl>
  ),
};

export const LabelLarge: StoryObj<typeof FormControl> = {
  args: FormControlArgs.LabelLarge,
  render: (args) => (
    <FormControl {...args}>
      <Toggle id="my-toggle-label-large" size="small" />
    </FormControl>
  ),
};
