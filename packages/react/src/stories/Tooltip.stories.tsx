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
By changing the \`alignment\` prop you can change the placement of the box in relation to the indicator. It will also assign an arrow on the side relative to the alignment.

By changing the \`placement\` prop you can change the location of the arrow on the side of the Tooltip box.

| placement   |  Description  |
|----------|-------------|
| \`negative\` | left or above center  |
| \`middle\` | middle of the side |
| \`positive\` | right or below center |
`;

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
  <Tooltip {...args}>This is a tooltip</Tooltip>
);

/**
 * Light Tooltip Instance
 *
 */
export const BaseTooltip = TooltipTemplate.bind({});

// enumerate the props for the light link.
BaseTooltip.args = tooltipArgs.tooltip;
BaseTooltip.storyName = "Tooltip";
