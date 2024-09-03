import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Subheading,
  Description,
  Primary,
  ArgTypes,
  Stories,
} from "@storybook/addon-docs";
import { Pagination } from "../../components/Pagination";
import { PaginationProps } from "../../components/Pagination/Pagination.props";
import paginationArgs from "../../components/Pagination/Pagination.args";

const typeDoc = `
Generic pagination component with a first, previous, last and next button`;

/**
 * Pagination Story
 *
 */
const PaginationMeta: Meta<typeof Pagination> = {
  title: "Components/Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Pagination allows users to view lists of content items in chunks or
            "pages". It's ideal when infinite loading isn't used or in contexts
            where SEO is important, such as articles or blog posts.
          </Description>
          <Primary />
          <Subheading>Type</Subheading>
          <Description>{typeDoc}</Description>
          <Stories title="Examples"></Stories>
          <Subheading>Default props</Subheading>
          <ArgTypes />
        </>
      ),
    },
  },
};

export default PaginationMeta;

/**
 * Pagination Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const PaginationTemplate: StoryFn<PaginationProps> = (args) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: "300px",
      }}
    >
      <Pagination {...args} />
    </div>
  </div>
);

/**
 * Pagination Instance without CTA
 *
 */
export const BasePagination: StoryFn<PaginationProps> = PaginationTemplate.bind(
  {}
);

BasePagination.args = paginationArgs.pagination;
BasePagination.storyName = "Pagination";
