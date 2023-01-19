import { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Subheading,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import { ReadMore } from "../../components/ReadMore";
import { ReadMoreProps } from "../../components/ReadMore/ReadMore.props";
import readMoreArgs from "../../components/ReadMore/ReadMore.args";

const stateDoc = `
By changing the \`openatstart\` prop you can set whether it should display the full text or the excerpt on component load. By default this is set to \`false\`.

| openatstart   |  Description  |
|----------|-------------|
| \`false\` | The "excerpt" text is displayed. |
| \`true\` | The "fulltext" text is displayed. |`;

const ReadMoreMeta: Meta<typeof ReadMore> = {
  title: "Components/User Interface/ReadMore",
  component: ReadMore,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The ReadMore component display an excerpt in its "closed" state and
            the full text in its "open" state. Displays text as HTML using the
            RichText component.
          </Description>
          <Primary />
          <Subheading>Open on component load</Subheading>
          <Description>{stateDoc}</Description>
          <Stories title="Examples"></Stories>
          <Subheading>Default Props</Subheading>
          <ArgsTable />
        </>
      ),
    },
  },
};

export default ReadMoreMeta;

export const BaseReadMore: StoryObj<ReadMoreProps> = {
  args: readMoreArgs.base,
  name: "Default",
};

export const OpenedReadMore: StoryObj<ReadMoreProps> = {
  args: readMoreArgs.open,
  name: "Open",
};
