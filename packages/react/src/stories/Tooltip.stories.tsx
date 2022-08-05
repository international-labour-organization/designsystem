import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Tooltip } from "../components/Tooltip";
import { TooltipProps } from "../components/Tooltip/Tooltip.props";
import tooltipArgs from "../components/Tooltip/Tooltip.args";

const themeDoc = `
By changing the \`theme\` prop you can set whether the tooltip has a light or dark theme.`;

/**
 * Tooltip Story
 *
 */
export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The link component creates an anchor link with a specific theme.
          </Description>
          <Primary />
          <ArgsTable />
          <Subheading>Theme Prop</Subheading>
          <Description>{themeDoc}</Description>
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Tooltip>;

/**
 * Tooltip Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const TooltipTemplate: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <a href="https://www.google.com/">This is testing for the tooltip</a>
  </Tooltip>
);

/**
 * Tooltip Instance
 *
 */
export const Light = TooltipTemplate.bind({});

export const Dark = TooltipTemplate.bind({});

export const LightIcon = TooltipTemplate.bind({});

export const DarkIcon = TooltipTemplate.bind({});

// enumerate the props for the tooltip
Light.args = tooltipArgs.light;
Light.storyName = "Tooltip - Light";

Dark.args = tooltipArgs.dark;
Dark.storyName = "Tooltip - Dark";

LightIcon.args = tooltipArgs.lighticon;
LightIcon.storyName = "Tooltip - Light, with Icon";

DarkIcon.args = tooltipArgs.darkicon;
DarkIcon.storyName = "Tooltip - Dark, with Icon";
