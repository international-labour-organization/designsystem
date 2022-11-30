import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
} from "@storybook/addon-docs";
import { LinkList } from "../components/LinkList";
import { LinkListProps } from "../components/LinkList/LinkList.props";
import profileArgs from "../components/LinkList/LinkList.args";

/**
 * LinkList Story
 *
 */
export default {
  title: "Components/LinkList",
  component: LinkList,
  argTypes: {
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The Link List component is used to display a meaingfully-grouped set
            of links.
          </Description>
          <Primary />
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof LinkList>;

/**
 * LinkList Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const LinkListTemplate: Story<LinkListProps> = (args) => <LinkList {...args} />;

export const Basic = LinkListTemplate.bind({});

export const WithIndented = LinkListTemplate.bind({});

export const WithSections = LinkListTemplate.bind({});

export const WithSectionsIndented = LinkListTemplate.bind({});

// enumerate the props for the variations on the LinkList component
Basic.args = profileArgs.basic;
Basic.storyName = "LinkList - Basic";

WithIndented.args = profileArgs.withindented;
WithIndented.storyName = "LinkList - With Some Indented Items";

WithSections.args = profileArgs.withsections;
WithSections.storyName = "LinkList - With Sections";

WithSectionsIndented.args = profileArgs.withsectionsindented;
WithSectionsIndented.storyName =
  "LinkList - With Sections and Some Indented Items";
