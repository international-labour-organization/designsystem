import { TableOfContentsProps } from "./TableOfContents.props";

const toc: TableOfContentsProps = {
  items: [
    {
      href: "#example",
      label: "Item One",
    },
    {
      href: "#example",
      label: "Item Two",
    },
    {
      href: "#example",
      label: "Item Three",
    },
    {
      href: "#example",
      label: "Item Four",
    },
    {
      href: "#example",
      label: "Item Five",
    },
  ],
};

/**
 * Sample prop definitions for Lists's enumerable properties (imported in stories and test)
 */
const TableOfContentsArgs = {
  toc,
};

export default TableOfContentsArgs;
