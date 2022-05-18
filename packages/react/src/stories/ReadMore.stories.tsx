import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Subheading,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import { ReadMore } from "../components/ReadMore";
import { ReadMoreProps } from "../components/ReadMore/ReadMore.props";
import readMoreArgs from "../components/ReadMore/readMore.args";

const stateDoc = `
By changing the \`openatstart\` prop you can set whether it should display the full text or the excerpt on component load. By default this is set to \`false\`.

| openatstart   |  Description  |
|----------|-------------|
| \`false\` | The "excerpt" text is displayed. |
| \`true\` | The "fulltext" text is displayed. |`;

/**
 * ReadMore Story
 *
 */
export default {
  title: "Components/ReadMore",
  component: ReadMore,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The ReadMore component display an excerpt in its "closed" state and
            the full text in its "open" state. Displays text as HTML using the
            RichText component.
          </Description>
          <Primary />
          <ArgsTable />
          <Subheading>openatstart Prop</Subheading>
          <Description>{stateDoc}</Description>
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof ReadMore>;

/**
 * ReadMore Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const ReadMoreTemplate: Story<ReadMoreProps> = (args) => <ReadMore {...args} />;

/**
 * ReadMore Instance
 *
 */
export const BaseReadMore = ReadMoreTemplate.bind({});

/**
 * ReadMore Instance - openatstart is true
 *
 */
export const OpenedReadMore = ReadMoreTemplate.bind({});

// enumerate the props for the read more component
BaseReadMore.args = readMoreArgs.closedatstart;
BaseReadMore.storyName = "ReadMore - default";

OpenedReadMore.args = readMoreArgs.openedatstart;
OpenedReadMore.storyName = "ReadMore - opened on component load";
