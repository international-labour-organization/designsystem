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
import { labelledChoiceFieldArgTypes } from "../../types/forms.args";

const ToggleMeta: Meta<typeof Toggle> = {
  title: "Components/Forms/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    ...labelledChoiceFieldArgTypes("HTMLInputElement"),
    size: {
      description: "The size of the toggle",
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      table: {
        defaultValue: { summary: "medium" },
        type: {
          summary: "small | medium | large",
        },
      },
    },
    onClick: {
      description: "The click event handler",
      table: {
        type: {
          summary: "React.MouseEventHandler<HTMLInputElement>",
        },
      },
    },
  },
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
};

export const DefaultChecked: StoryObj<typeof Toggle> = {
  args: ToggleArgs.DefaultChecked,
};

export const Disabled: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Disabled,
};

export const Helper: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Helper,
};

export const Tooltip: StoryObj<typeof Toggle> = {
  args: ToggleArgs.Tooltip,
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
