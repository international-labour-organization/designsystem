import { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Subheading,
  ArgTypes,
} from "@storybook/addon-docs";
import { DatePicker } from "../../components";
import DatePickerArgs from "../../components/DatePicker/DatePicker.args";
import { FormControlPublicProps } from "../../components/FormControl/FormControl.props";
import { labelledFormFieldArgTypes } from "../../types/forms.args";

const DatePickerMeta: Meta<typeof DatePicker> = {
  title: "Components/Forms/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    max: {
      description: "The maximum date that can be selected",
      control: {
        type: "date",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    min: {
      description: "The minimum date that can be selected",
      control: {
        type: "date",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    step: {
      description: "The step value for the date picker",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    placeholder: {
      description: "The placeholder text for the date picker",
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
            The DatePicker component allows users to select a date from a
            calendar.
          </Description>
          <Primary />
          <Subheading>Props</Subheading>
          <ArgTypes of={DatePickerMeta} />
          <Stories title="Examples" />
        </>
      ),
    },
  },
};

export default DatePickerMeta;

const startFormCtrlProps: FormControlPublicProps = {
  label: "Select a date",
  labelPlacement: "top",
  labelSize: "medium",
  style: { width: "50%" },
  errorMessage: "There was an error selecting your date",
};

export const Basic: StoryObj<typeof DatePicker> = {
  args: { ...DatePickerArgs.basic, ...startFormCtrlProps },
  render: (args) => <DatePicker {...args} />,
};

export const Error: StoryObj<typeof DatePicker> = {
  args: { ...DatePickerArgs.haserror, ...startFormCtrlProps },
  render: (args) => <DatePicker {...args} />,
};

export const Disabled: StoryObj<typeof DatePicker> = {
  args: { ...DatePickerArgs.basic, disabled: true, ...startFormCtrlProps },
  render: (args) => <DatePicker {...args} />,
};
