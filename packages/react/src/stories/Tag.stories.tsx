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
import { Tag, TagSet } from "../components/Tag";
import { TagProps } from "../components/Tag/Tag.props";
import tagSetArgs from "../components/Tag/TagSet.args";
import tagArgs from "../components/Tag/Tag.args";

const themeDoc = `
By changing
`;

/**
 * Tag Story
 *
 */
export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The tag component creates an anchor tag with a specific theme.
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
} as Meta<typeof Tag>;

/**
 * Tag Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const TagTemplate: Story<TagProps> = (args) => (
  <TagSet {...tagSetArgs.tag} {...args}>
    <Tag {...tagArgs.tag}>Test 1</Tag>
    <Tag {...tagArgs.tag}>Test 2</Tag>
    <Tag {...tagArgs.tag}>Test 3</Tag>
    <Tag {...tagArgs.tag}>Test 4</Tag>
    <Tag {...tagArgs.tag}>Test 5</Tag>
    <Tag {...tagArgs.tag}>Test 6</Tag>
    <Tag {...tagArgs.tag}>Test 7</Tag>
    <Tag {...tagArgs.tag}>Test 8</Tag>
    <Tag {...tagArgs.tag}>Test 9</Tag>
  </TagSet>
);

/**
 * Light Tag Instance
 *
 */
export const DefaultTag = TagTemplate.bind({});

// enumerate the props for the light tag.
DefaultTag.args = tagSetArgs.tag;
DefaultTag.storyName = "Tag";
