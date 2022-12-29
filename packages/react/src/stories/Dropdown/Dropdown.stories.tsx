import { Meta, StoryFn } from "@storybook/react";
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
import { DropdownProps } from "../../components/Dropdown/Dropdown.props";
import dropdownArgs from "../../components/Dropdown/Dropdown.args";

const propsDoc = `
The Dropdown receives a prop for 'options,' which has three parameters:

| Prop  |  Description  |
|----------|-------------|
| \`disabled\` | Is *this* option disabled? |
| \`label\` | The human-readable label for the option. |
| \`value\` | The value of the option which is what is submitted with the form. |
`;

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
          <Subheading>Options</Subheading>
          <Description>{propsDoc}</Description>
          <Stories title="Examples" />
          <Subheading>Default Props</Subheading>
          <ArgsTable />
        </>
      ),
    },
  },
};

export default DropdownMeta;

/**
 * Dropdown Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const DropdownTemplate: StoryFn<DropdownProps> = (args) => (
  <Dropdown {...args} />
);

export const Basic: StoryFn<DropdownProps> = DropdownTemplate.bind({});

export const HasError: StoryFn<DropdownProps> = DropdownTemplate.bind({});

export const HasHelper: StoryFn<DropdownProps> = DropdownTemplate.bind({});

export const HasTooltip: StoryFn<DropdownProps> = DropdownTemplate.bind({});

export const IsDisabled: StoryFn<DropdownProps> = DropdownTemplate.bind({});

// enumerate the props for the variations on the Dropdown component
Basic.args = dropdownArgs.basic;
Basic.storyName = "Basic";

HasError.args = dropdownArgs.haserror;
HasError.storyName = "Error";

HasHelper.args = dropdownArgs.hashelper;
HasHelper.storyName = "Helper";

HasTooltip.args = dropdownArgs.hastooltip;
HasTooltip.storyName = "Tooltip";

IsDisabled.args = dropdownArgs.isdisabled;
IsDisabled.storyName = "Disabled";
