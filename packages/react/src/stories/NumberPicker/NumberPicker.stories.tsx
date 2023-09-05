import { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Subheading,
  ArgsTable,
  ArgTypes,
} from "@storybook/addon-docs";
import { NumberPicker } from "../../components";
import NumberPickerArgs from "../../components/NumberPicker/NumberPicker.args";
import { labelledFormFieldArgTypes } from "../../types/forms.args";

const NumberPickerMeta: Meta<typeof NumberPicker> = {
  title: "Components/Forms/NumberPicker",
  component: NumberPicker,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      description: "The placeholder text for the number picker",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    ...labelledFormFieldArgTypes("HTMLInputElement"),
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
          <ArgTypes of={NumberPickerMeta} />
          <Stories title="Examples" />
        </>
      ),
    },
  },
};

export default NumberPickerMeta;

export const Basic: StoryObj<typeof NumberPicker> = {
  args: NumberPickerArgs.basic,
  render: (args) => <NumberPicker {...args} />,
};

export const Error: StoryObj<typeof NumberPicker> = {
  args: NumberPickerArgs.haserror,
  render: (args) => <NumberPicker {...args} />,
};

export const Disabled: StoryObj<typeof NumberPicker> = {
  args: { ...NumberPickerArgs.basic, disabled: true },
  render: (args) => <NumberPicker {...args} />,
};
