import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgTypes,
  Subheading,
} from "@storybook/addon-docs";
import { TableOfContents } from "../../components/TableOfContents";
import { TableOfContentsProps } from "../../components/TableOfContents/TableOfContents.props";
import tableOfContentsArgs from "../../components/TableOfContents/TableOfContents.args";

/**
 * Empty Story
 *
 */
const TableOfContentsMeta: Meta<TableOfContentsProps> = {
  title: "Components/Navigation/Table Of Contents",
  component: TableOfContents,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Table Of Contents component displays a list of anchor links to
            aid users navigating within a page.
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

export default TableOfContentsMeta;

/**
 * TableOfContents Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const TableOfContentsTemplate: StoryFn<TableOfContentsProps> = () => (
  <TableOfContents {...tableOfContentsArgs.toc} />
);

export const TableOfContents1: StoryFn<TableOfContentsProps> =
  TableOfContentsTemplate.bind({});
