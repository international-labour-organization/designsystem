import { SearchFieldProps } from "./SearchField.props";

const searchfield: SearchFieldProps = {
  action: "",
  button: {
    label: "Search",
  },
  callback: "",
  input: {
    callback: "",
    disabled: false,
    name: "search",
    placeholder: "Search Field",
    type: "search",
  },
};

const searchfielderror: SearchFieldProps = {
  action: "",
  button: {
    label: "Search",
  },
  callback: "",
  input: {
    callback: "",
    disabled: false,
    error: "Error message",
    name: "search",
    placeholder: "Search Field",
    type: "search",
  },
};

const searchfielddisabled: SearchFieldProps = {
  action: "",
  button: {
    label: "Search",
  },
  callback: "",
  input: {
    callback: "",
    disabled: true,
    name: "search",
    placeholder: "Search Field",
    type: "search",
  },
};

/**
 * Sample prop definitions for SearchField's enumerable properties (imported in stories and test)
 */
const SearchFieldArgs = {
  searchfield,
  searchfielderror,
  searchfielddisabled,
};

export default SearchFieldArgs;
