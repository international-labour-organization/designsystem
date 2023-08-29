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
import { Fieldset } from "../../components";
import { RadioProps } from "../../components/Radio/Radio.props";
import { FieldsetProps } from "../../components/Fieldset/Fieldset.props";
import { labelledChoiceFieldArgTypes } from "../../types/forms.args";

const RadioMeta: Meta<typeof Radio> = {
  title: "Components/Forms/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    ...labelledChoiceFieldArgTypes("HTMLInputElement"),
  },
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
          <Heading>Props</Heading>
          <ArgTypes of={RadioMeta} />
          <Stories />
        </>
      ),
    },
  },
};

const fieldsetArgs: FieldsetProps = {
  legend: "Which world of work topic interests you the most?",
  errorMessage: "You must choose a topic",
};

export const Default: StoryObj<RadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs}>
      <Radio
        {...args}
        id="Radio-1"
        label="Social Justice"
        labelPlacement="end"
        labelSize="small"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="Decent Work"
        labelPlacement="end"
        labelSize="small"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="Ending child labour"
        labelPlacement="end"
        labelSize="small"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="Achieving full employment"
        labelPlacement="end"
        labelSize="small"
      />
    </Fieldset>
  ),
};

export const CheckedByDefault: StoryObj<RadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs}>
      <Radio
        {...args}
        id="Radio-1"
        label="Social Justice"
        labelPlacement="end"
        labelSize="small"
        defaultChecked
      />
      <Radio
        {...args}
        id="Radio-1"
        label="Decent Work"
        labelPlacement="end"
        labelSize="small"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="Ending child labour"
        labelPlacement="end"
        labelSize="small"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="Achieving full employment"
        labelPlacement="end"
        labelSize="small"
      />
    </Fieldset>
  ),
};

export const Helper: StoryObj<RadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset
      {...fieldsetArgs}
      legend="Which organization was established in 1919 to promote workers’ rights and address labor issues on an international scale?"
      helper="Hint, it's the oldest of the four organizations."
    >
      <Radio
        {...args}
        id="Radio-1"
        label="International Monetary Fund"
        labelPlacement="end"
        labelSize="small"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="World Trade Organization"
        labelPlacement="end"
        labelSize="small"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="Food and Agriculture Organization"
        labelPlacement="end"
        labelSize="small"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="International Labour Organization"
        labelPlacement="end"
        labelSize="small"
      />
    </Fieldset>
  ),
};

export const Error: StoryObj<RadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset
      {...fieldsetArgs}
      legend="Which organization was established in 1919 to promote workers’ rights and address labor issues on an international scale?"
      helper="Hint, it's the oldest of the four organizations."
      errorMessage="The correct answer is the International Labour Organization."
    >
      <Radio
        {...args}
        id="Radio-1"
        label="International Monetary Fund"
        labelPlacement="end"
        labelSize="small"
        checked
      />
      <Radio
        {...args}
        id="Radio-1"
        label="World Trade Organization"
        labelPlacement="end"
        labelSize="small"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="Food and Agriculture Organization"
        labelPlacement="end"
        labelSize="small"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="International Labour Organization"
        labelPlacement="end"
        labelSize="small"
        error
      />
    </Fieldset>
  ),
};

export default RadioMeta;
