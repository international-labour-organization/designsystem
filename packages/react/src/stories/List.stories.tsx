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
By changing the \`ordered\` prop you can use switch from a \`<ol>\` to a \`<ul>\`

| ordered   |  Description  |
|----------|-------------|
| \`ordered\` | make a \`<ol>\` |
| \`unordered\` | make a \`<ul>\`   |
| \`unstyled\` | make a \`<ul>\` without markers  |
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
      <p>Arabica. Arabica is the most popular type of coffee, hands down.</p>
    </ListItem>
    <ListItem id="ordered2">
      <p>Robusta. While Arabica is the most popular, Robusta is cheaper and stronger.</p>
    </ListItem>
    <ListItem id="ordered3">
      <p>Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm.</p>
    </ListItem>
    <ListItem id="ordered4">
      <p>Latte. Made with espresso and hot steamed milk, milkier than a cappuccino.</p>
    </ListItem>
    <ListItem id="ordered5">
      <p>Cappuccino. Made with espresso and milk that has been frothed up with pressurized steam.</p>
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
      <p>Arabica. Arabica is the most popular type of coffee, hands down.</p>
    </ListItem>
    <ListItem id="unordered2">
      <p>Robusta. While Arabica is the most popular, Robusta is cheaper and stronger.</p>
    </ListItem>
    <ListItem id="unordered3">
      <p>Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm.</p>
    </ListItem>
    <ListItem id="unordered4">
      <p>Latte. Made with espresso and hot steamed milk, milkier than a cappuccino.</p>
    </ListItem>
    <ListItem id="unordered5">
      <p>Cappuccino. Made with espresso and milk that has been frothed up with pressurized steam.</p>
    </ListItem>
  </List>
);

/**
 * Unstyled Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
 const UnstyledTemplate: Story<ListProps> = () => (
  <List {...listArgs.unstyled}>
    <ListItem id="unstyled1">
      <p>Arabica. Arabica is the most popular type of coffee, hands down.</p>
    </ListItem>
    <ListItem id="unstyled2">
      <p>Robusta. While Arabica is the most popular, Robusta is cheaper and stronger.</p>
    </ListItem>
    <ListItem id="unstyled3">
      <p>Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm.</p>
    </ListItem>
    <ListItem id="unstyled4">
      <p>Latte. Made with espresso and hot steamed milk, milkier than a cappuccino.</p>
    </ListItem>
    <ListItem id="unstyled5">
      <p>Cappuccino. Made with espresso and milk that has been frothed up with pressurized steam.</p>
    </ListItem>
  </List>
);

/**
 * Horizontal Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
 const HorizontalTemplate: Story<ListProps> = () => (
  <List {...listArgs.horizontal}>
    <ListItem id="horizontal1">
      <p>Arabica</p>
    </ListItem>
    <ListItem id="horizontal2">
      <p>Robusta</p>
    </ListItem>
    <ListItem id="horizontal3">
      <p>Black coffee</p>
    </ListItem>
    <ListItem id="horizontal4">
      <p>Latte</p>
    </ListItem>
    <ListItem id="horizontal5">
      <p>Cappuccino</p>
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
 * Unstyled List Instance
 *
 */
 export const ListUnstyled = UnstyledTemplate.bind({});

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
ListUnstyled.args = listArgs.unstyled;
ListUnstyled.storyName = "Unstyled List";

// enumerate the props
ListHorizontal.args = listArgs.horizontal;
ListHorizontal.storyName = "Horizontal List";
