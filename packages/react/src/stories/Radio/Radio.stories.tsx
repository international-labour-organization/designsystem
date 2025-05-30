import { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioArgs } from "../../components/Radio";
import {
  ArgTypes,
  Description,
  Heading,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";
import { Fieldset } from "../../components";
import {
  LabelledRadioProps,
  RadioProps,
} from "../../components/Radio/Radio.props";
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

export const Default: StoryObj<LabelledRadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs} theme={args.theme || "light"}>
      <Radio
        {...args}
        id="Radio-1"
        label="Social Justice"
        labelPlacement="end"
        labelSize="small"
        value="social-justice"
        name="radio-group-1"
      />
      <Radio
        {...args}
        id="Radio-2"
        label="Decent Work"
        labelPlacement="end"
        labelSize="small"
        value="decent-work"
        name="radio-group-1"
      />
      <Radio
        {...args}
        id="Radio-3"
        label="Ending child labour"
        labelPlacement="end"
        labelSize="small"
        value="ending-child-labour"
        name="radio-group-1"
      />
      <Radio
        {...args}
        id="Radio-4"
        label="Achieving full employment"
        labelPlacement="end"
        labelSize="small"
        value="achieving-full-employment"
        name="radio-group-1"
      />
    </Fieldset>
  ),
};

export const CheckedByDefault: StoryObj<LabelledRadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset {...fieldsetArgs} theme={args.theme || "light"}>
      <Radio
        {...args}
        id="Radio-1"
        label="Social Justice"
        labelPlacement="end"
        labelSize="small"
        defaultChecked
        value="social-justice"
        name="radio-group-2"
      />
      <Radio
        {...args}
        id="Radio-2"
        label="Decent Work"
        labelPlacement="end"
        labelSize="small"
        value="decent-work"
        name="radio-group-2"
      />
      <Radio
        {...args}
        id="Radio-3"
        label="Ending child labour"
        labelPlacement="end"
        labelSize="small"
        value="ending-child-labour"
        name="radio-group-2"
      />
      <Radio
        {...args}
        id="Radio-4"
        label="Achieving full employment"
        labelPlacement="end"
        labelSize="small"
        value="achieving-full-employment"
        name="radio-group-2"
      />
    </Fieldset>
  ),
};

export const Helper: StoryObj<LabelledRadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset
      {...fieldsetArgs}
      legend="Which organization was established in 1919 to promote workers’ rights and address labor issues on an international scale?"
      helper="Hint, it's the oldest of the four organizations."
      theme={args.theme || "light"}
    >
      <Radio
        {...args}
        id="Radio-1"
        label="International Monetary Fund"
        labelPlacement="end"
        labelSize="small"
        value="international-monetary-fund"
        name="radio-group-3"
      />
      <Radio
        {...args}
        id="Radio-2"
        label="World Trade Organization"
        labelPlacement="end"
        labelSize="small"
        value="world-trade-organization"
        name="radio-group-3"
      />
      <Radio
        {...args}
        id="Radio-3"
        label="Food and Agriculture Organization"
        labelPlacement="end"
        labelSize="small"
        value="food-and-agriculture-organization"
        name="radio-group-3"
      />
      <Radio
        {...args}
        id="Radio-4"
        label="International Labour Organization"
        labelPlacement="end"
        labelSize="small"
        value="international-labour-organization"
        name="radio-group-3"
      />
    </Fieldset>
  ),
};

export const Error: StoryObj<LabelledRadioProps> = {
  args: RadioArgs.basic,
  render: (args) => (
    <Fieldset
      {...fieldsetArgs}
      legend="Which organization was established in 1919 to promote workers’ rights and address labor issues on an international scale?"
      helper="Hint, it's the oldest of the four organizations."
      errorMessage="The correct answer is the International Labour Organization."
      theme={args.theme || "light"}
    >
      <Radio
        {...args}
        id="Radio-1"
        label="International Monetary Fund"
        labelPlacement="end"
        labelSize="small"
        checked
        value="international-monetary-fund"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="World Trade Organization"
        labelPlacement="end"
        labelSize="small"
        value="world-trade-organization"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="Food and Agriculture Organization"
        labelPlacement="end"
        labelSize="small"
        value="food-and-agriculture-organization"
      />
      <Radio
        {...args}
        id="Radio-1"
        label="International Labour Organization"
        labelPlacement="end"
        labelSize="small"
        error
        value="international-labour-organization"
      />
    </Fieldset>
  ),
};

export default RadioMeta;
