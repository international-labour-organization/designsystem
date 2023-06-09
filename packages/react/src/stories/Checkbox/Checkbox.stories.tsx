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
import { FormControl } from "../../components/FormControl";
import { Fieldset } from "../../components";
import { FieldsetProps } from "../../components/Fieldset/Fieldset.props";
import { CheckboxProps } from "../../components/Checkbox/Checkbox.props";

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

const Template = ({
  fieldsetProps,
  checkBoxProps,
}: {
  fieldsetProps: FieldsetProps;
  checkBoxProps?: CheckboxProps;
}) => (
  <Fieldset legend="What world of work topics interest you?" {...fieldsetProps}>
    <FormControl label="Social Justice" labelPlacement="end" labelSize="small">
      <Checkbox {...CheckboxArgs.basic} {...checkBoxProps} />
    </FormControl>
    <FormControl label="Decent work" labelPlacement="end" labelSize="small">
      <Checkbox {...CheckboxArgs.basic} {...checkBoxProps} />
    </FormControl>
    <FormControl
      label="Ending child labour"
      labelPlacement="end"
      labelSize="small"
    >
      <Checkbox {...CheckboxArgs.basic} {...checkBoxProps} />
    </FormControl>
    <FormControl
      label="Achieving full employment"
      labelPlacement="end"
      labelSize="small"
    >
      <Checkbox {...CheckboxArgs.basic} {...checkBoxProps} />
    </FormControl>
  </Fieldset>
);

export const Default: StoryObj<typeof Checkbox> = {
  render: () => <Template fieldsetProps={{ direction: "column" }} />,
};

export const Row: StoryObj<typeof Checkbox> = {
  render: () => <Template fieldsetProps={{ direction: "row" }} />,
};

export const Disabled: StoryObj<typeof Checkbox> = {
  render: () => (
    <Template fieldsetProps={{ direction: "column", disabled: true }} />
  ),
};

export const Error: StoryObj<typeof Checkbox> = {
  render: () => (
    <Template
      fieldsetProps={{ direction: "column" }}
      checkBoxProps={{ ...CheckboxArgs.basic, error: true }}
    />
  ),
};

export default CheckboxMeta;
