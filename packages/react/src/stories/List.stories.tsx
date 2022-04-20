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
import {
  List,
  ListItem,
} from "../components/List";
import { ListProps } from "../components/List/List.props";
import listArgs from "../components/List/List.args";

const sizeDoc = `
By changing the \`ordered\` prop you can use switch from a <ol> to a <ul>.

| ordered   |  Description  |
|----------|-------------|
| \`true\` | make a <ol> |
| \`false\` | make a <ul>   |
`;

/**
 * List Story
 *
 */
export default {
  title: "Components/List",
  component: List,
  argTypes: {},
  subcomponents: {
    ListItem,
  },
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The list component allows the user to show and hide sections of
            related content on a page. Click the lists below to
            expand/collapse the list content.
          </Description>
          <Primary />
          <ArgsTable />
          <Subheading>Size Prop</Subheading>
          <Description>{sizeDoc}</Description>
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof List>;

/**
 * Ordered Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const OrderedTemplate: Story<ListProps> = () => (
  <List {...listArgs.ordered}>
    <ListItem id="ordered1">
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
    </ListItem>
    <ListItem id="ordered2">
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
    </ListItem>
  </List>
);

/**
 * Unordered Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const UnorderedTemplate: Story<ListProps> = () => (
  <List {...listArgs.unordered}>
    <ListItem id="unordered1">
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
    </ListItem>
    <ListItem id="unordered2">
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
    </ListItem>
  </List>
);

/**
 * Unordered Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
 const HorizontalTemplate: Story<ListProps> = () => (
  <List {...listArgs.unordered}>
    <ListItem id="unordered1">
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
      <p>Content of Item 1</p>
    </ListItem>
    <ListItem id="unordered2">
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
      <p>Content of Item 2</p>
    </ListItem>
  </List>
);

/**
 * Ordered List Instance
 *
 */
export const ListOrdered = OrderedTemplate.bind({});

/**
 * Unordered List Instance
 *
 */
export const ListUnordered = UnorderedTemplate.bind({});

/**
 * Horizontal List Instance
 *
 */
 export const ListHorizontal = HorizontalTemplate.bind({});

// enumerate the props for the ordered list.
ListOrdered.args = listArgs.ordered;
ListOrdered.storyName = "Ordered List";

// enumerate the props
ListUnordered.args = listArgs.unordered;
ListUnordered.storyName = "Unordered List";

// enumerate the props
ListHorizontal.args = listArgs.horizontal;
ListHorizontal.storyName = "horizListHorizontal List";
