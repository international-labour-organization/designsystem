import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgTypes,
  Stories,
  Subheading,
} from "@storybook/blocks";
import { List, ListItem } from "../../components/List";
import { ListProps } from "../../components/List/List.props";

const sizeDoc = `
By changing the \`ordered\` prop you can use switch from a \`<ol>\` to a \`<ul>\`

| ordered   |  Description  |
|----------|-------------|
| \`ordered\` | make a \`<ol>\` |
| \`unordered\` | make a \`<ul>\`   |
| \`unstyled\` | make a \`<ul>\` without markers  |
`;

const ListMeta: Meta<typeof List> = {
  title: "Components/Content/List",
  tags: ["autodocs"],
  component: List,
  argTypes: {
    alignment: {
      options: ["horizontal", "default"],
      control: { type: "select" },
    },
    ordered: {
      options: ["ordered", "unordered", "unstyled"],
      control: { type: "select" },
    },
  },
  subcomponents: {
    ListItem,
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The list component allows the user to show and hide sections of
            related content on a page. Click the lists below to expand/collapse
            the list content.
          </Description>
          <Primary />
          <Subheading>Size Prop</Subheading>
          <Description>{sizeDoc}</Description>
          <Stories title="Examples"></Stories>
          <Subheading>Default Props</Subheading>
          <ArgTypes />
        </>
      ),
    },
  },
};

export default ListMeta;

const longTitle =
  "Four strategic objectives at the heart of the Decent Work agenda";

const shortTitle = "The Decent Work agenda";

const OrderedTemplate: StoryFn<ListProps> = () => (
  <List title={longTitle} ordered="ordered">
    <ListItem id="ordered1">
      <p>
        Set and promote standards and fundamental principles and rights at work
      </p>
    </ListItem>
    <ListItem id="ordered2">
      <p>
        Create greater opportunities for women and men to decent employment and
        income
      </p>
    </ListItem>
    <ListItem id="ordered3">
      <p>Enhance the coverage and effectiveness of social protection for all</p>
    </ListItem>
    <ListItem id="ordered4">
      <p>Strengthen tripartism and social dialogue</p>
    </ListItem>
  </List>
);

const UnorderedTemplate: StoryFn<ListProps> = () => (
  <List title={longTitle} ordered="unordered">
    <ListItem id="unordered1">
      <p>
        Set and promote standards and fundamental principles and rights at work{" "}
      </p>
    </ListItem>
    <ListItem id="unordered2">
      <p>
        Create greater opportunities for women and men to decent employment and
        income
      </p>
    </ListItem>
    <ListItem id="unordered3">
      <p>Enhance the coverage and effectiveness of social protection for all</p>
    </ListItem>
    <ListItem id="unordered4">
      <p>Strengthen tripartism and social dialogue</p>
    </ListItem>
  </List>
);

const UnstyledTemplate: StoryFn<ListProps> = () => (
  <List title={longTitle} ordered="unstyled">
    <ListItem id="unstyled1">
      <p>
        Set and promote standards and fundamental principles and rights at work{" "}
      </p>
    </ListItem>
    <ListItem id="unstyled2">
      <p>
        Create greater opportunities for women and men to decent employment and
        income
      </p>
    </ListItem>
    <ListItem id="unstyled3">
      <p>Enhance the coverage and effectiveness of social protection for all</p>
    </ListItem>
    <ListItem id="unstyled4">
      <p>Strengthen tripartism and social dialogue</p>
    </ListItem>
  </List>
);

const HorizontalTemplate: StoryFn<ListProps> = () => (
  <List title={shortTitle} alignment="horizontal" ordered="unstyled">
    <ListItem id="horizontal1">
      <p>Labour standards</p>
    </ListItem>
    <ListItem id="horizontal2">
      <p>Employment</p>
    </ListItem>
    <ListItem id="horizontal3">
      <p>Social protection</p>
    </ListItem>
    <ListItem id="horizontal4">
      <p>Tripartism</p>
    </ListItem>
  </List>
);

export const ListOrdered: StoryFn<ListProps> = OrderedTemplate.bind({});

export const ListUnordered: StoryFn<ListProps> = UnorderedTemplate.bind({});

export const ListUnstyled: StoryFn<ListProps> = UnstyledTemplate.bind({});

export const ListHorizontal: StoryFn<ListProps> = HorizontalTemplate.bind({});

ListOrdered.storyName = "Ordered";

ListUnordered.storyName = "Unordered";

ListUnstyled.storyName = "Unstyled";

ListHorizontal.storyName = "Horizontal";
