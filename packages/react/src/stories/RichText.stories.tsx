import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import { RichText } from "../components/RichText";
import { RichTextProps } from "../components/RichText/RichText.props";
import richTextArgs from "../components/RichText/richText.args";

/**
 * RichText Story
 *
 */
export default {
  title: "Components/RichText",
  component: RichText,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The rich text component displays HTML as composed in a WYSIWYG
            editor.
          </Description>
          <Primary />
          <ArgsTable />
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof RichText>;

/**
 * RichText Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const RichTextTemplate: Story<RichTextProps> = (args) => <RichText {...args} />;

/**
 * RichText Instance
 *
 */
export const BaseRichText = RichTextTemplate.bind({});

// enumerate the props for the rich text component
BaseRichText.args = richTextArgs.richtext;
BaseRichText.storyName = "Rich Text";
