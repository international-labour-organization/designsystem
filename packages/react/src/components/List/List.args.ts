import { ListProps } from "./List.props";

const unordered: ListProps = {
  children: "",
  ordered: "unordered",
  title: "Unordered List Title",
};

const unstyled: ListProps = {
  children: "",
  ordered: "unstyled",
  title: "Unstyled List Title",
};

const ordered: ListProps = {
  children: "",
  ordered: "ordered",
  title: "Ordered List Title",
};

const horizontal: ListProps = {
  children: "",
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
