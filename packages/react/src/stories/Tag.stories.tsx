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
    <Tag {...tagArgs.tag} type="display">
      Test 1
    </Tag>
    <Tag {...tagArgs.tag} id="tag2" type="display">
      Test 2
    </Tag>
    <Tag {...tagArgs.tag} id="tag3" type="display">
      Test 3
    </Tag>
    <Tag {...tagArgs.tag} id="tag4" type="display">
      Test 4
    </Tag>
    <Tag {...tagArgs.tag} id="tag5" type="display">
      Test 5
    </Tag>
    <Tag {...tagArgs.tag} id="tag6" type="display">
      Test 6
    </Tag>
    <Tag {...tagArgs.tag} id="tag7" type="display">
      Test 7
    </Tag>
    <Tag {...tagArgs.tag} id="tag8" type="display">
      Test 8
    </Tag>
    <Tag {...tagArgs.tag} id="tag9" type="display">
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
    <Tag {...tagArgs.tag} url="https://www.google.com/" type="anchor">
      Test 1
    </Tag>
    <Tag {...tagArgs.tag} id="tag2" url="https://www.google.com/" type="anchor">
      Test 2
    </Tag>
    <Tag {...tagArgs.tag} id="tag3" url="https://www.google.com/" type="anchor">
      Test 3
    </Tag>
    <Tag {...tagArgs.tag} id="tag4" url="https://www.google.com/" type="anchor">
      Test 4
    </Tag>
    <Tag {...tagArgs.tag} id="tag5" url="https://www.google.com/" type="anchor">
      Test 5
    </Tag>
    <Tag {...tagArgs.tag} id="tag6" url="https://www.google.com/" type="anchor">
      Test 6
    </Tag>
    <Tag {...tagArgs.tag} id="tag7" url="https://www.google.com/" type="anchor">
      Test 7
    </Tag>
    <Tag {...tagArgs.tag} id="tag8" url="https://www.google.com/" type="anchor">
      Test 8
    </Tag>
    <Tag {...tagArgs.tag} id="tag9" url="https://www.google.com/" type="anchor">
      Test 9
    </Tag>
  </TagSet>
);

/**
 * Button Tag Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const ButtonTagTemplate: Story<TagProps> = (args) => (
  <TagSet {...tagSetArgs.buttonTag} {...args}>
    <Tag {...tagArgs.tag} id="tag1" url="https://www.google.com/" type="button">
      Test 1
    </Tag>
    <Tag {...tagArgs.tag} id="tag2" url="https://www.google.com/" type="button">
      Test 2
    </Tag>
    <Tag {...tagArgs.tag} id="tag3" url="https://www.google.com/" type="button">
      Test 3
    </Tag>
    <Tag {...tagArgs.tag} id="tag4" url="https://www.google.com/" type="button">
      Test 4
    </Tag>
    <Tag {...tagArgs.tag} id="tag5" url="https://www.google.com/" type="button">
      Test 5
    </Tag>
    <Tag {...tagArgs.tag} id="tag6" url="https://www.google.com/" type="button">
      Test 6
    </Tag>
    <Tag {...tagArgs.tag} id="tag7" url="https://www.google.com/" type="button">
      Test 7
    </Tag>
    <Tag {...tagArgs.tag} id="tag8" url="https://www.google.com/" type="button">
      Test 8
    </Tag>
    <Tag {...tagArgs.tag} id="tag9" url="https://www.google.com/" type="button">
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

/**
 * Button Tag Instance
 *
 */
export const ButtonTag = ButtonTagTemplate.bind({});

// enumerate the props for the light tag.
DisplayTag.args = tagSetArgs.tag;
DisplayTag.storyName = "Display Tag";

// enumerate the props for the light tag.
AnchorTag.args = tagSetArgs.tag;
AnchorTag.storyName = "Anchor Tag";

// enumerate the props for the light tag.
ButtonTag.args = tagSetArgs.buttonTag;
ButtonTag.storyName = "Button Tag";
