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
import { Callout } from "../components/Callout";
import { CalloutProps } from "../components/Callout/Callout.props";
import calloutArgs from "../components/Callout/Callout.args";

const themeDoc = `
By changing the \`type\` prop you can change base coloring of the links. By default this is set to \`info\`.

| Theme   |  Description  |
|----------|-------------|
| \`info\` | Callout color and icon for info block. |
| \`error\` | Callout color and icon for error block. |
| \`success\` | Callout color and icon for success block. |
| \`warning\` | Callout color and icon for warning block. |
`;

/**
 * Callout Story
 *
 */
export default {
  title: "Components/Callout",
  component: Callout,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The Callout component provides an inline alert or message to end
            users.
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
} as Meta<typeof Callout>;

/**
 * Info Callout Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const InfoCalloutTemplate: Story<CalloutProps> = (args) => (
  <Callout {...calloutArgs.infoCallout} {...args}>
    That Biff, what a character. Always trying to get away with something. Been
    on top of Biff ever since high school. Although, if it wasn't for him - Yes,
    yes, I'm George, George McFly, and I'm your density. I mean, I'm your
    destiny. Right.
  </Callout>
);

/**
 * Error Callout Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const ErrorCalloutTemplate: Story<CalloutProps> = (args) => (
  <Callout {...calloutArgs.errorCallout} {...args}>
    That Biff, what a character. Always trying to get away with something. Been
    on top of Biff ever since high school. Although, if it wasn't for him - Yes,
    yes, I'm George, George McFly, and I'm your density. I mean, I'm your
    destiny. Right.
  </Callout>
);

/**
 * Success Callout Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const SuccessCalloutTemplate: Story<CalloutProps> = (args) => (
  <Callout {...calloutArgs.successCallout} {...args}>
    That Biff, what a character. Always trying to get away with something. Been
    on top of Biff ever since high school. Although, if it wasn't for him - Yes,
    yes, I'm George, George McFly, and I'm your density. I mean, I'm your
    destiny. Right.
  </Callout>
);

/**
 * Warning Callout Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const WarningCalloutTemplate: Story<CalloutProps> = (args) => (
  <Callout {...calloutArgs.warningCallout} {...args}>
    That Biff, what a character. Always trying to get away with something. Been
    on top of Biff ever since high school. Although, if it wasn't for him - Yes,
    yes, I'm George, George McFly, and I'm your density. I mean, I'm your
    destiny. Right.
  </Callout>
);

/**
 * Info Callout Instance
 *
 */
export const InfoCallout = InfoCalloutTemplate.bind({});

/**
 * Error Callout Instance
 *
 */
export const ErrorCallout = ErrorCalloutTemplate.bind({});

/**
 * Success Callout Instance
 *
 */
export const SuccessCallout = SuccessCalloutTemplate.bind({});

/**
 * Warning Callout Instance
 *
 */
export const WarningCallout = WarningCalloutTemplate.bind({});

// enumerate the props for the Info Callout
InfoCallout.storyName = "Info Callout";
InfoCallout.parameters = {
  docs: {
    description: {
      story: "The Info Callout is for",
    },
  },
};

// enumerate the props Error Callout
ErrorCallout.storyName = "Error Callout";
ErrorCallout.parameters = {
  docs: {
    description: {
      story: "The Error Callout is for",
    },
  },
};

// enumerate the props Success Callout
SuccessCallout.storyName = "Success Callout";
SuccessCallout.parameters = {
  docs: {
    description: {
      story: "The Success Callout is for",
    },
  },
};

// enumerate the props Warning Callout
WarningCallout.storyName = "Warning Callout";
WarningCallout.parameters = {
  docs: {
    description: {
      story: "The Warning Callout is for",
    },
  },
};
