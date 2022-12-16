import { ListProps } from "./List.props";

const unordered: ListProps = {
  ordered: "unordered",
  title: "Unordered List Title",
};

const unstyled: ListProps = {
  ordered: "unstyled",
  title: "Unstyled List Title",
};

const ordered: ListProps = {
  ordered: "ordered",
  title: "Ordered List Title",
};

const horizontal: ListProps = {
  alignment: "horizontal",
  ordered: "unordered",
  title: "Horizontal List Title",
};

/**
 * Sample prop definitions for Lists's enumerable properties (imported in stories and test)
 */
const ListArgs = {
  horizontal,
  ordered,
  unstyled,
  unordered,
};

export default ListArgs;
