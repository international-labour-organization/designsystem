import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgTypes,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { RichText } from "../../components/RichText";
import { RichTextProps } from "../../components/RichText/RichText.props";
import richTextArgs from "../../components/RichText/richText.args";

/**
 * RichText Story
 *
 */
const RichTextMeta: Meta<typeof RichText> = {
  title: "Components/Content/RichText",
  component: RichText,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The rich text component displays HTML as composed in a WYSIWYG
            editor.
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

export default RichTextMeta;

/**
 * RichText Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const RichTextTemplate: StoryFn<RichTextProps> = (args) => (
  <RichText {...args} />
);

/**
 * RichText Instance
 *
 */
export const BaseRichText: StoryFn<RichTextProps> = RichTextTemplate.bind({});

// enumerate the props for the rich text component
BaseRichText.args = richTextArgs.richtext;
BaseRichText.storyName = "Rich Text";
