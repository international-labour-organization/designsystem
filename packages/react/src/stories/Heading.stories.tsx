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
import { Heading } from "../components/Heading";
import { HeadingProps } from "../components/Heading/Heading.props";
import headingArgs from "../components/Heading/Heading.args";

const headingDoc = `
By changing the \`level\` prop you can use different heading levels. The default heading level if not specified is \`h3\`.

| level   |  Description  |
|----------|-------------|
| \`h1\` | heading level 1. |
| \`h2\` | heading level 2. |
| \`h3\` | heading level 3. |
| \`h4\` | heading level 4. |
| \`h5\` | heading level 5. |
| \`h6\` | heading level 6. |
`;

const typeDoc = `
By changing the \`type\` prop you can change the color of the heading. If not specified, the heading will inherit the color.

| type |  Description  |
|----------|-------------|
| \`default\` | Set the heading color to the base/default label theme. |
| \`actionable\` | set the heading color to the actionable label theme. |
| \`light\` | Set the heading color to the light label theme. |
`;

/**
 * Accordion Story
 *
 */
export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    level: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Primary />
          <ArgsTable />
          <Subheading>Heading Level Prop</Subheading>
          <Description>{headingDoc}</Description>
          <Subheading>Color Prop</Subheading>
          <Description>{typeDoc}</Description>
          <Stories title="Examples" />
        </>
      ),
    },
  },
} as Meta<typeof Heading>;

/**
 * Heading 1 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading1Template: Story<HeadingProps> = () => (
  <Heading {...headingArgs.heading1} />
);

/**
 * Heading 2 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading2Template: Story<HeadingProps> = () => (
  <Heading {...headingArgs.heading2} />
);

/**
 * Heading 3 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading3Template: Story<HeadingProps> = () => (
  <Heading {...headingArgs.heading3} />
);

/**
 * Heading 4 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading4Template: Story<HeadingProps> = () => (
  <Heading {...headingArgs.heading4} />
);

/**
 * Heading 5 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading5Template: Story<HeadingProps> = () => (
  <Heading {...headingArgs.heading5} />
);

/**
 * Heading 6 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading6Template: Story<HeadingProps> = () => (
  <Heading {...headingArgs.heading6} />
);

/**
 * Heading 1 Instance
 *
 */
export const Heading1 = Heading1Template.bind({});

/**
 * Heading 2 Instance
 *
 */
export const Heading2 = Heading2Template.bind({});

/**
 * Heading 3 Instance
 *
 */
export const Heading3 = Heading3Template.bind({});

/**
 * Heading 4 Instance
 *
 */
export const Heading4 = Heading4Template.bind({});

/**
 * Heading 5 Instance
 *
 */
export const Heading5 = Heading5Template.bind({});

/**
 * Heading 6 Instance
 *
 */
export const Heading6 = Heading6Template.bind({});

// enumerate the props for the heading 1.
Heading1.storyName = "Heading Level 1";

// enumerate the props
Heading2.storyName = "Heading Level 2";

// enumerate the props
Heading3.storyName = "Heading Level 3";

// enumerate the props
Heading4.storyName = "Heading Level 4";

// enumerate the props
Heading5.storyName = "Heading Level 5";

// enumerate the props
Heading6.storyName = "Heading Level 6";
