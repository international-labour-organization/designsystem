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
const DisplayTagTemplate: Story<TagProps> = (args) => (
  <TagSet {...tagSetArgs.tag} {...args}>
    <Tag {...tagArgs.tag}>Test 1</Tag>
    <Tag {...tagArgs.tag} id="tag2">
      Test 2
    </Tag>
    <Tag {...tagArgs.tag} id="tag3">
      Test 3
    </Tag>
    <Tag {...tagArgs.tag} id="tag4">
      Test 4
    </Tag>
    <Tag {...tagArgs.tag} id="tag5">
      Test 5
    </Tag>
    <Tag {...tagArgs.tag} id="tag6">
      Test 6
    </Tag>
    <Tag {...tagArgs.tag} id="tag7">
      Test 7
    </Tag>
    <Tag {...tagArgs.tag} id="tag8">
      Test 8
    </Tag>
    <Tag {...tagArgs.tag} id="tag9">
      Test 9
    </Tag>
  </TagSet>
);

/**
 * Tag Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const AnchorTagTemplate: Story<TagProps> = (args) => (
  <TagSet {...tagSetArgs.tag} {...args}>
    <Tag {...tagArgs.tag} url="https://www.google.com/">
      Test 1
    </Tag>
    <Tag {...tagArgs.tag} id="tag2" url="https://www.google.com/">
      Test 2
    </Tag>
    <Tag {...tagArgs.tag} id="tag3" url="https://www.google.com/">
      Test 3
    </Tag>
    <Tag {...tagArgs.tag} id="tag4" url="https://www.google.com/">
      Test 4
    </Tag>
    <Tag {...tagArgs.tag} id="tag5" url="https://www.google.com/">
      Test 5
    </Tag>
    <Tag {...tagArgs.tag} id="tag6" url="https://www.google.com/">
      Test 6
    </Tag>
    <Tag {...tagArgs.tag} id="tag7" url="https://www.google.com/">
      Test 7
    </Tag>
    <Tag {...tagArgs.tag} id="tag8" url="https://www.google.com/">
      Test 8
    </Tag>
    <Tag {...tagArgs.tag} id="tag9" url="https://www.google.com/">
      Test 9
    </Tag>
  </TagSet>
);

/**
 * Display Tag Instance
 *
 */
export const DisplayTag = DisplayTagTemplate.bind({});

/**
 * Anchor Tag Instance
 *
 */
export const AnchorTag = AnchorTagTemplate.bind({});

// enumerate the props for the light tag.
DisplayTag.args = tagSetArgs.tag;
DisplayTag.storyName = "Display Tag";

// enumerate the props for the light tag.
AnchorTag.args = tagSetArgs.tag;
AnchorTag.storyName = "Anchor Tag";
