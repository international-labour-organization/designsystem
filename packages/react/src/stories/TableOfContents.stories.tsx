import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
} from "@storybook/addon-docs";
import { TableOfContents } from "../components/TableOfContents";
import { TableOfContentsProps } from "../components/TableOfContents/TableOfContents.props";
import tableOfContentsArgs from "../components/TableOfContents/TableOfContents.args";

/**
 * Empty Story
 *
 */
export default {
  title: "Components/TableOfContents",
  component: TableOfContents,
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The TableOfContents component displays a list of anchor links to aid
            users navigating within a page.
          </Description>
          <Primary />
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof TableOfContents>;

/**
 * TableOfContents Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const TableOfContentsTemplate: Story<TableOfContentsProps> = () => (
  <TableOfContents {...tableOfContentsArgs.toc} />
);

export const TableOfContents1 = TableOfContentsTemplate.bind({});
