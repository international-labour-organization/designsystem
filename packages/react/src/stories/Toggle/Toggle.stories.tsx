import { Meta, StoryObj } from "@storybook/react";
import { Toggle, ToggleArgs } from "../../components/Toggle";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from "@storybook/blocks";
import { FormControl } from "../../components/FormControl";

const ToggleMeta: Meta<typeof Toggle> = {
  title: "Components/Forms/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The toggle component provides users with a switch they can use to
            turn a single option on or off or alternate between two different
            states.
          </Description>
          <Primary />
          <Subheading>Uncontrolled</Subheading>
          <Description>
            The Toggle is uncontrolled by default. Use `inputProps` if you need
            to control the state of the Toggle programatically.
          </Description>
          <Subheading>Accessibility</Subheading>
          <Description>
            Like all form elements, the Toggle component must have an `id` prop
            to map a label to the form element.
          </Description>
          <ArgTypes of={ToggleMeta} />
          <Stories />
        </>
      ),
    },
  },
};

export default ToggleMeta;

export const Default: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Default,
};

export const DefaultChecked: StoryObj<typeof Toggle> = {
  args: ToggleArgs.DefaultChecked,
};

export const Disabled: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Disabled,
};

export const Error: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Error,
};

export const Controlled: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Controlled,
};

export const Small: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Small,
};

export const Medium: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Medium,
};

export const Large: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Large,
};

export const WithLabel: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Small,
  render: (props) => (
    <FormControl
      label="Accept all cookies?"
      labelPlacement="end"
      labelSize="small"
    >
      <Toggle {...props} />
    </FormControl>
  ),
};
