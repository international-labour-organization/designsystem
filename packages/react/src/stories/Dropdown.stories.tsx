import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Dropdown } from "../components/Dropdown";
import { DropdownProps } from "../components/Dropdown/Dropdown.props";
import dropdownArgs from "../components/Dropdown/Dropdown.args";

const propsDoc = `
The Dropdown receives a prop for 'options,' which has three parameters:

| Prop  |  Description  |
|----------|-------------|
| \`disabled\` | Is *this* option disabled? |
| \`label\` | The human-readable label for the option. |
| \`value\` | The value of the option which is what is submitted with the form. |
`;

/**
 * Profile Story
 *
 */
export default {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    componentSubtitle: "Component",
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
          <Description>{propsDoc}</Description>
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Dropdown>;

/**
 * Dropdown Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const DropdownTemplate: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Basic = DropdownTemplate.bind({});

export const HasError = DropdownTemplate.bind({});

export const HasHelper = DropdownTemplate.bind({});

export const HasTooltip = DropdownTemplate.bind({});

export const IsDisabled = DropdownTemplate.bind({});

// enumerate the props for the variations on the Dropdown component
Basic.args = dropdownArgs.basic;
Basic.storyName = "Dropdown - Basic";

HasError.args = dropdownArgs.haserror;
HasError.storyName = "Dropdown - Has Error";

HasHelper.args = dropdownArgs.hashelper;
HasHelper.storyName = "Dropdown - Has Helper";

HasTooltip.args = dropdownArgs.hastooltip;
HasTooltip.storyName = "Dropdown - Has Tooltip";

IsDisabled.args = dropdownArgs.isdisabled;
IsDisabled.storyName = "Dropdown - Is Disabled";
