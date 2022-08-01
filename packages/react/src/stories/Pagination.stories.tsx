import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Subheading,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import { Pagination } from "../components/Pagination";
import { PaginationProps } from "../components/Pagination/Pagination.props";
import paginationArgs from "../components/Pagination/Pagination.args";

const typeDoc = `
Generic pagination component with a first, previous, last and next button`;

/**
 * Pagination Story
 *
 */
export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>The Pagination component</Description>
          <Primary />
          <ArgsTable />
          <Subheading>type Prop</Subheading>
          <Description>{typeDoc}</Description>
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Pagination>;

/**
 * Pagination Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const PaginationTemplate: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
);

/**
 * Pagination Instance without CTA
 *
 */
export const BasePagination = PaginationTemplate.bind({});

BasePagination.args = paginationArgs.pagination;
BasePagination.storyName = "Pagination";
