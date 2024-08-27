import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgTypes,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Tag, TagSet } from "../../components/Tag";
import { TagProps } from "../../components/Tag/Tag.props";
import tagSetArgs from "../../components/Tag/TagSet.args";
import tagArgs from "../../components/Tag/Tag.args";

const themeDoc = `
By changing the \`type\` prop you can set the which kind of tag to use.

| Prop   |  Description  |
|----------|-------------|
| \`anochor\` | The tag is a link. Useful for taxonomies that have landing pages. |
| \`button\` | The tag is a button. Useful for tags that are used to filter search results. |
| \`display\` | The tag is static (not clickable). Useful for displaying non-actionable info. |
`;

const TagMeta: Meta<typeof Tag> = {
  title: "Components/User Interface/Tag",
  tags: ["autodocs"],
  component: Tag,
  argTypes: {
    type: {
      options: ["anchor", "button", "display"],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The tag component creates an anchor tag with a specific theme.
          </Description>
          <Primary />
          <Subheading>Types of tags</Subheading>
          <Description>{themeDoc}</Description>
          <Stories title="Examples"></Stories>
          <Subheading>Default props</Subheading>
          <ArgTypes />
        </>
      ),
    },
  },
};

export default TagMeta;

const DisplayTagTemplate: StoryFn<TagProps> = (args) => (
  <TagSet {...tagSetArgs.tag} {...args}>
    <Tag {...tagArgs.tag} type="display">
      Economy
    </Tag>
    <Tag {...tagArgs.tag} id="tag2" type="display">
      Trade
    </Tag>
    <Tag {...tagArgs.tag} id="tag3" type="display">
      Statistics
    </Tag>
    <Tag {...tagArgs.tag} id="tag4" type="display">
      Human rights
    </Tag>
    <Tag {...tagArgs.tag} id="tag5" type="display">
      Employment
    </Tag>
  </TagSet>
);

const AnchorTagTemplate: StoryFn<TagProps> = (args) => (
  <TagSet {...tagSetArgs.tag} {...args}>
    <Tag {...tagArgs.tag} url="https://www.google.com/" type="anchor">
      Economy
    </Tag>
    <Tag {...tagArgs.tag} id="tag2" url="https://www.google.com/" type="anchor">
      Trade
    </Tag>
    <Tag {...tagArgs.tag} id="tag3" url="https://www.google.com/" type="anchor">
      Statistics
    </Tag>
    <Tag {...tagArgs.tag} id="tag4" url="https://www.google.com/" type="anchor">
      Human rights
    </Tag>
    <Tag {...tagArgs.tag} id="tag5" url="https://www.google.com/" type="anchor">
      Employment
    </Tag>
  </TagSet>
);

const ButtonTagTemplate: StoryFn<TagProps> = (args) => (
  <TagSet {...tagSetArgs.buttonTag} {...args}>
    <Tag {...tagArgs.tag} id="tag1" url="https://www.google.com/" type="button">
      Economy
    </Tag>
    <Tag {...tagArgs.tag} id="tag2" url="https://www.google.com/" type="button">
      Trade
    </Tag>
    <Tag {...tagArgs.tag} id="tag3" url="https://www.google.com/" type="button">
      Statistics
    </Tag>
    <Tag {...tagArgs.tag} id="tag4" url="https://www.google.com/" type="button">
      Human rights
    </Tag>
    <Tag {...tagArgs.tag} id="tag5" url="https://www.google.com/" type="button">
      Employment
    </Tag>
  </TagSet>
);

export const DisplayTag: StoryFn<TagProps> = DisplayTagTemplate.bind({});

export const AnchorTag: StoryFn<TagProps> = AnchorTagTemplate.bind({});

export const ButtonTag: StoryFn<TagProps> = ButtonTagTemplate.bind({});

DisplayTag.args = tagSetArgs.tag;
DisplayTag.storyName = "Display";

AnchorTag.args = tagSetArgs.tag;
AnchorTag.storyName = "Anchor";

ButtonTag.args = tagSetArgs.buttonTag;
ButtonTag.storyName = "Button";
