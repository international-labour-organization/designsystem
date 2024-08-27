import { Meta, StoryFn } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgTypes,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Heading } from "../../components/Heading";
import { HeadingProps } from "../../components/Heading/Heading.props";
import headingArgs from "../../components/Heading/Heading.args";

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
const HeadingMeta: Meta<typeof Heading> = {
  title: "Components/Content/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Primary />
          <ArgTypes />
          <Subheading>Heading Level Prop</Subheading>
          <Description>{headingDoc}</Description>
          <Subheading>Color Prop</Subheading>
          <Description>{typeDoc}</Description>
          <Stories title="Examples" />
          <Subheading>Default Props</Subheading>
          <ArgTypes />
        </>
      ),
    },
  },
};

export default HeadingMeta;

/**
 * Heading 1 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading1Template: StoryFn<HeadingProps> = () => (
  <Heading {...headingArgs.heading1} />
);

/**
 * Heading 2 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading2Template: StoryFn<HeadingProps> = () => (
  <Heading {...headingArgs.heading2} />
);

/**
 * Heading 3 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading3Template: StoryFn<HeadingProps> = () => (
  <Heading {...headingArgs.heading3} />
);

/**
 * Heading 4 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading4Template: StoryFn<HeadingProps> = () => (
  <Heading {...headingArgs.heading4} />
);

/**
 * Heading 5 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading5Template: StoryFn<HeadingProps> = () => (
  <Heading {...headingArgs.heading5} />
);

/**
 * Heading 6 Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const Heading6Template: StoryFn<HeadingProps> = () => (
  <Heading {...headingArgs.heading6} />
);

/**
 * Heading 1 Instance
 *
 */
export const Heading1: StoryFn<HeadingProps> = Heading1Template.bind({});

/**
 * Heading 2 Instance
 *
 */
export const Heading2: StoryFn<HeadingProps> = Heading2Template.bind({});

/**
 * Heading 3 Instance
 *
 */
export const Heading3: StoryFn<HeadingProps> = Heading3Template.bind({});

/**
 * Heading 4 Instance
 *
 */
export const Heading4: StoryFn<HeadingProps> = Heading4Template.bind({});

/**
 * Heading 5 Instance
 *
 */
export const Heading5: StoryFn<HeadingProps> = Heading5Template.bind({});

/**
 * Heading 6 Instance
 *
 */
export const Heading6: StoryFn<HeadingProps> = Heading6Template.bind({});

// enumerate the props for the heading 1.
Heading1.storyName = "Heading 1";

// enumerate the props
Heading2.storyName = "Heading 2";

// enumerate the props
Heading3.storyName = "Heading 3";

// enumerate the props
Heading4.storyName = "Heading 4";

// enumerate the props
Heading5.storyName = "Heading 5";

// enumerate the props
Heading6.storyName = "Heading 6";
