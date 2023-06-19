import { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioArgs } from "../../components/Radio";
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
import { RadioProps } from "../../components/Radio/Radio.props";
import { FieldsetProps } from "../../components/Fieldset/Fieldset.props";

const RadioMeta: Meta<typeof Radio> = {
  title: "Components/Forms/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Radio component provides users with a switch they can use to
            turn a single option on or off or alternate between multiple
            different states.
          </Description>
          <Primary />
          <Subheading>Accessibility</Subheading>
          <Description>
            The Radio component must have an `id` prop to map a label to the
            form element.
          </Description>
          <Heading>Props</Heading>
          <ArgTypes of={RadioMeta} />
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
  legend: "Which world of work topic interests you the most?",
  errorMessage: "You must choose a topic",
};

export const Default: StoryObj<RadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs}>
      <FormControl {...formControlArgs} label="Social Justice">
        <Radio {...args} id="Radio-1" />
      </FormControl>
      <FormControl label="Decent work" labelPlacement="end" labelSize="small">
        <Radio {...args} id="Radio-2" />
      </FormControl>
      <FormControl {...formControlArgs} label="Ending child labour">
        <Radio {...args} id="Radio-3" />
      </FormControl>
      <FormControl {...formControlArgs} label="Achieving full employment">
        <Radio {...args} id="Radio-4" />
      </FormControl>
    </Fieldset>
  ),
};

export const CheckedByDefault: StoryObj<RadioProps> = {
  args: RadioArgs.checked,
  render: (args) => (
    <Fieldset {...fieldsetArgs}>
      <FormControl {...formControlArgs} label="Social Justice">
        <Radio {...args} id="Radio-1" />
      </FormControl>
      <FormControl label="Decent work" labelPlacement="end" labelSize="small">
        <Radio {...args} id="Radio-2" />
      </FormControl>
      <FormControl {...formControlArgs} label="Ending child labour">
        <Radio {...args} id="Radio-3" />
      </FormControl>
      <FormControl {...formControlArgs} label="Achieving full employment">
        <Radio {...args} id="Radio-4" />
      </FormControl>
    </Fieldset>
  ),
};

export const Row: StoryObj<RadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs} direction="row">
      <FormControl {...formControlArgs} label="Social Justice">
        <Radio {...args} id="Radio-1" />
      </FormControl>
      <FormControl label="Decent work" labelPlacement="end" labelSize="small">
        <Radio {...args} id="Radio-2" />
      </FormControl>
      <FormControl {...formControlArgs} label="Ending child labour">
        <Radio {...args} id="Radio-3" />
      </FormControl>
      <FormControl {...formControlArgs} label="Achieving full employment">
        <Radio {...args} id="Radio-4" />
      </FormControl>
    </Fieldset>
  ),
};

export const Helper: StoryObj<RadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs} helper="Choose at least one topic">
      <FormControl {...formControlArgs} label="Social Justice">
        <Radio {...args} id="Radio-1" />
      </FormControl>
      <FormControl label="Decent work" labelPlacement="end" labelSize="small">
        <Radio {...args} id="Radio-2" />
      </FormControl>
      <FormControl {...formControlArgs} label="Ending child labour">
        <Radio {...args} id="Radio-3" />
      </FormControl>
      <FormControl {...formControlArgs} label="Achieving full employment">
        <Radio {...args} id="Radio-4" />
      </FormControl>
    </Fieldset>
  ),
};

export const Error: StoryObj<RadioProps> = {
  args: RadioArgs.error,
  render: (args) => (
    <Fieldset {...fieldsetArgs}>
      <FormControl {...formControlArgs} label="Social Justice">
        <Radio {...args} id="Radio-1" />
      </FormControl>
      <FormControl label="Decent work" labelPlacement="end" labelSize="small">
        <Radio {...args} id="Radio-2" />
      </FormControl>
      <FormControl {...formControlArgs} label="Ending child labour">
        <Radio {...args} id="Radio-3" />
      </FormControl>
      <FormControl {...formControlArgs} label="Achieving full employment">
        <Radio {...args} id="Radio-4" />
      </FormControl>
    </Fieldset>
  ),
};

export const Disabled: StoryObj<RadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs} disabled>
      <FormControl {...formControlArgs} label="Social Justice">
        <Radio {...args} id="Radio-1" />
      </FormControl>
      <FormControl label="Decent work" labelPlacement="end" labelSize="small">
        <Radio {...args} id="Radio-2" />
      </FormControl>
      <FormControl {...formControlArgs} label="Ending child labour">
        <Radio {...args} id="Radio-3" />
      </FormControl>
      <FormControl {...formControlArgs} label="Achieving full employment">
        <Radio {...args} id="Radio-4" />
      </FormControl>
    </Fieldset>
  ),
};

export default RadioMeta;
