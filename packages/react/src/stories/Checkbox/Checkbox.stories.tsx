import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxArgs } from "../../components/Checkbox";
import { CheckboxProps } from "../../components/Checkbox/Checkbox.props";
import {
  ArgTypes,
  Description,
  Heading,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";
import { Fieldset } from "../../components";
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
          <Heading>Props</Heading>
          <ArgTypes of={CheckboxMeta} />
          <Stories />
        </>
      ),
    },
  },
};

const fieldSetDefaults: FieldsetProps = {
  legend: "What world of work topics interest you?",
  errorMessage: "You must choose at least one topic",
};

const renderCheckboxes = (
  args: Omit<CheckboxProps, "name" | "label">,
  fieldsetArgs: FieldsetProps = fieldSetDefaults
) => (
  <Fieldset {...fieldsetArgs}>
    <Checkbox
      {...args}
      labelPlacement="end"
      labelSize="small"
      label="Social Justice"
      name="checkbox-1"
    />
    <Checkbox
      {...args}
      labelPlacement="end"
      labelSize="small"
      label="Decent work"
      name="checkbox-2"
    />
    <Checkbox
      {...args}
      labelPlacement="end"
      labelSize="small"
      label="Ending child labour"
      name="checkbox-3"
    />
    <Checkbox
      {...args}
      labelPlacement="end"
      labelSize="small"
      label="Achieving full employment"
      name="checkbox-4"
    />
  </Fieldset>
);

export const Default: StoryObj<CheckboxProps> = {
  args: CheckboxArgs.basic,
  render: (args) => renderCheckboxes(args),
};

export const CheckedByDefault: StoryObj<CheckboxProps> = {
  args: CheckboxArgs.checked,
  render: (args) => renderCheckboxes(args),
};

export const Row: StoryObj<CheckboxProps> = {
  args: CheckboxArgs.basic,
  render: (args) => renderCheckboxes(args),
};

export const Helper: StoryObj<CheckboxProps> = {
  args: CheckboxArgs.basic,
  render: (args) =>
    renderCheckboxes(args, {
      ...fieldSetDefaults,
      helper: "Choose at least one topic",
    }),
};

export const Error: StoryObj<CheckboxProps> = {
  args: CheckboxArgs.error,
  render: (args) => renderCheckboxes(args),
};

export const Disabled: StoryObj<CheckboxProps> = {
  args: CheckboxArgs.basic,
  render: (args) =>
    renderCheckboxes(args, { ...fieldSetDefaults, disabled: true }),
};

export default CheckboxMeta;
