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
import { Dropdown } from "../../components/Dropdown";
import dropdownArgs from "../../components/Dropdown/Dropdown.args";
import { FormControl } from "../../components/FormControl";

const DropdownMeta: Meta<typeof Dropdown> = {
  title: "Components/Forms/Dropdown",
  component: Dropdown,
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
            The Dropdown displays a select element with options, and is most
            commonly used in forms.
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

export default DropdownMeta;

export const Basic: StoryObj<typeof Dropdown> = {
  args: dropdownArgs.basic,
};

export const WithLabel: StoryObj<typeof Dropdown> = {
  args: dropdownArgs.basic,
  render: (props) => (
    <FormControl
      label="Choose among the following options"
      labelPlacement="top"
      labelSize="medium"
      style={{ width: "100%" }}
    >
      <Dropdown {...props} />
    </FormControl>
  ),
};

export const WithHelperText: StoryObj<typeof Dropdown> = {
  args: dropdownArgs.basic,
  render: (props) => (
    <FormControl
      label="Choose among the following options"
      labelPlacement="top"
      labelSize="medium"
      style={{ width: "100%" }}
      helper="This is helper text"
    >
      <Dropdown {...props} />
    </FormControl>
  ),
};

export const Error: StoryObj<typeof Dropdown> = {
  args: dropdownArgs.haserror,
  render: (props) => (
    <FormControl
      label="Choose among the following options"
      labelPlacement="top"
      labelSize="medium"
      style={{ width: "100%" }}
      errorMessage="This is an error"
    >
      <Dropdown {...props} />
    </FormControl>
  ),
};

export const Disabled: StoryObj<typeof Dropdown> = {
  args: dropdownArgs.isdisabled,
  render: (props) => (
    <FormControl
      label="Choose among the following options"
      labelPlacement="top"
      labelSize="medium"
      style={{ width: "100%" }}
    >
      <Dropdown {...props} />
    </FormControl>
  ),
};

export const WithToolTip: StoryObj<typeof Dropdown> = {
  args: dropdownArgs.basic,
  render: (props) => (
    <FormControl
      label="Choose among the following options"
      labelPlacement="top"
      labelSize="medium"
      style={{ width: "100%" }}
      tooltip="This is a tooltip"
    >
      <Dropdown {...props} />
    </FormControl>
  ),
};
