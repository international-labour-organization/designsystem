import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxArgs } from "../../components/Checkbox";
import {
  ArgTypes,
  Description,
  Heading,
  Primary,
  Stories,
  Subheading,
  Title,
} from "@storybook/blocks";
import { FormControl, FormControlProps } from "../../components/FormControl";
import { Fieldset } from "../../components";
import { CheckboxProps } from "../../components/Checkbox/Checkbox.props";
import { FieldsetProps } from "../../components/Fieldset/Fieldset.props";

const CheckboxMeta: Meta<typeof Checkbox> = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The checkbox component provides users with a switch they can use to
            turn a single option on or off or alternate between two different
            states.
          </Description>
          <Primary />
          <Subheading>Accessibility</Subheading>
          <Description>
            The Checkbox component must have an `id` prop to map a label to the
            form element.
          </Description>
          <Heading>Props</Heading>
          <ArgTypes of={CheckboxMeta} />
          <Stories />
        </>
      ),
    },
  },
};

const formControlArgs: FormControlProps = {
  label: "",
  labelPlacement: "end",
  labelSize: "small",
};

const fieldsetArgs: FieldsetProps = {
  legend: "What world of work topics interest you?",
  errorMessage: "You must choose at least one topic",
};

export const Default: StoryObj<CheckboxProps> = {
  args: CheckboxArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs}>
      <FormControl {...formControlArgs} label="Social Justice">
        <Checkbox {...args} />
      </FormControl>
      <FormControl label="Decent work" labelPlacement="end" labelSize="small">
        <Checkbox {...args} />
      </FormControl>
      <FormControl {...formControlArgs} label="Ending child labour">
        <Checkbox {...args} />
      </FormControl>
      <FormControl {...formControlArgs} label="Achieving full employment">
        <Checkbox {...args} />
      </FormControl>
    </Fieldset>
  ),
};

export const Row: StoryObj<CheckboxProps> = {
  args: CheckboxArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs} direction="row">
      <FormControl {...formControlArgs} label="Social Justice">
        <Checkbox {...args} />
      </FormControl>
      <FormControl label="Decent work" labelPlacement="end" labelSize="small">
        <Checkbox {...args} />
      </FormControl>
      <FormControl {...formControlArgs} label="Ending child labour">
        <Checkbox {...args} />
      </FormControl>
      <FormControl {...formControlArgs} label="Achieving full employment">
        <Checkbox {...args} />
      </FormControl>
    </Fieldset>
  ),
};

export const Helper: StoryObj<CheckboxProps> = {
  args: CheckboxArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs} helper="Choose at least one topic">
      <FormControl {...formControlArgs} label="Social Justice">
        <Checkbox {...args} />
      </FormControl>
      <FormControl label="Decent work" labelPlacement="end" labelSize="small">
        <Checkbox {...args} />
      </FormControl>
      <FormControl {...formControlArgs} label="Ending child labour">
        <Checkbox {...args} />
      </FormControl>
      <FormControl {...formControlArgs} label="Achieving full employment">
        <Checkbox {...args} />
      </FormControl>
    </Fieldset>
  ),
};

export const Error: StoryObj<CheckboxProps> = {
  args: CheckboxArgs.error,
  render: (args) => (
    <Fieldset {...fieldsetArgs}>
      <FormControl {...formControlArgs} label="Social Justice">
        <Checkbox {...args} />
      </FormControl>
      <FormControl label="Decent work" labelPlacement="end" labelSize="small">
        <Checkbox {...args} />
      </FormControl>
      <FormControl {...formControlArgs} label="Ending child labour">
        <Checkbox {...args} />
      </FormControl>
      <FormControl {...formControlArgs} label="Achieving full employment">
        <Checkbox {...args} />
      </FormControl>
    </Fieldset>
  ),
};

export const Disabled: StoryObj<CheckboxProps> = {
  args: CheckboxArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs} disabled>
      <FormControl {...formControlArgs} label="Social Justice">
        <Checkbox {...args} />
      </FormControl>
      <FormControl label="Decent work" labelPlacement="end" labelSize="small">
        <Checkbox {...args} />
      </FormControl>
      <FormControl {...formControlArgs} label="Ending child labour">
        <Checkbox {...args} />
      </FormControl>
      <FormControl {...formControlArgs} label="Achieving full employment">
        <Checkbox {...args} />
      </FormControl>
    </Fieldset>
  ),
};

export default CheckboxMeta;
