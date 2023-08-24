import { Meta, StoryObj } from "@storybook/react";
import { Toggle, ToggleArgs } from "../../components/Toggle";
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
          <Subheading>Accessibility</Subheading>
          <Description>
            The Toggle component must have an `id` prop to map a label to the
            form element.
          </Description>
          <Subheading>Uncontrolled</Subheading>
          <Description>
            The Toggle is uncontrolled by default. Use the `checked` and
            `onClick` props if you need to control the state of the Toggle
            programatically.
          </Description>
          <Heading>Props</Heading>
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
  render: (args) => <Toggle {...args} />,
};

export const DefaultChecked: StoryObj<typeof Toggle> = {
  args: ToggleArgs.DefaultChecked,
  render: (args) => <Toggle {...args} />,
};

export const Disabled: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Disabled,
  render: (args) => <Toggle {...args} />,
};

export const Helper: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Helper,
  render: (args) => <Toggle {...args} />,
};

export const Tooltip: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Tooltip,
  render: (args) => <Toggle {...args} />,
};

export const Error: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Error,
  render: (args) => <Toggle {...args} />,
};

export const Controlled: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Controlled,
  render: (args) => <Toggle {...args} />,
};

export const Small: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Small,
  render: (args) => <Toggle {...args} />,
};

export const Medium: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Medium,
  render: (args) => <Toggle {...args} />,
};

export const Large: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Large,
  render: (args) => <Toggle {...args} />,
};
