import { StoryFn, Meta } from "@storybook/react";
import { Title, Description, Primary, Stories } from "@storybook/addon-docs";
import { LinkList } from "../../components/LinkList";
import { LinkListProps } from "../../components/LinkList/LinkList.props";
import linkListArgs from "./LinkList.args";

const LinkListMeta: Meta<typeof LinkList> = {
  title: "Components/Navigation/LinkList",
  component: LinkList,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
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
};

export default LinkListMeta;

const LinkListTemplate: StoryFn<LinkListProps> = (args) => (
  <LinkList {...args} />
);

export const Basic: StoryFn<LinkListProps> = LinkListTemplate.bind({});

export const WithIndented: StoryFn<LinkListProps> = LinkListTemplate.bind({});

export const WithSections: StoryFn<LinkListProps> = LinkListTemplate.bind({});

export const WithSectionsIndented: StoryFn<LinkListProps> =
  LinkListTemplate.bind({});

// enumerate the props for the variations on the LinkList component
Basic.args = linkListArgs.basic;
Basic.storyName = "Basic";

WithIndented.args = linkListArgs.withindented;
WithIndented.storyName = "Indentation";

WithSections.args = linkListArgs.withsections;
WithSections.storyName = "Sections";

WithSectionsIndented.args = linkListArgs.withsectionsindented;
WithSectionsIndented.storyName = "Sections and indentation";
