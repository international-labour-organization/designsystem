import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgTypes,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Tooltip } from "../../components/Tooltip";
import { TooltipProps } from "../../components/Tooltip/Tooltip.props";
import tooltipArgs from "../../components/Tooltip/Tooltip.args";

const TooltipMeta: Meta<typeof Tooltip> = {
  title: "Components/Feedback/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: [true, false],
      control: { type: "boolean" },
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
    iconTheme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Tooltips display informative text when a user hovers over, focus on,
            or taps an element.
          </Description>
          <Primary />
          <Stories title="Examples"></Stories>
          <Subheading>Default props</Subheading>
          <ArgTypes />
        </>
      ),
    },
  },
};

export default TooltipMeta;

/**
 * Tooltip Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const TooltipTemplate: StoryFn<TooltipProps> = (args) => (
  <Tooltip {...args}>Hover over this to see a tooltip</Tooltip>
);

/**
 * Tooltip Instance
 *
 */
export const Light: StoryFn<TooltipProps> = TooltipTemplate.bind({});

export const Dark: StoryFn<TooltipProps> = TooltipTemplate.bind({});

export const DarkIcon: StoryFn<TooltipProps> = TooltipTemplate.bind({});

// enumerate the props for the tooltip
Light.args = tooltipArgs.light;
Light.storyName = "Light";

Dark.args = tooltipArgs.dark;
Dark.storyName = "Dark";

DarkIcon.args = tooltipArgs.darkicon;
DarkIcon.storyName = "Icon";
