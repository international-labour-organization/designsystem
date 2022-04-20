import { ListProps } from "./List.props";

const unordered: ListProps = {
  children: "",
  ordered: false,
  title: "Unordered",
};

const ordered: ListProps = {
  children: "",
  ordered: true,
  title: "Ordered",
};

const horizontal: ListProps = {
  children: "",
  horizontal: true,
  ordered: false,
  title: "Horizontal",
};

/**
 * Sample prop definitions for Lists's enumerable properties (imported in stories and test)
 */
const ListArgs = {
  horizontal,
  ordered,
  unordered,
};

export default ListArgs;
