import { SearchFieldProps } from "./SearchField.props";

const searchfield: SearchFieldProps = {
  action: "",
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
  callback: "",
  input: {
    callback: "",
    disabled: true,
    name: "search",
    placeholder: "Search Field",
    type: "search",
  },
};

const searchfieldlabel: SearchFieldProps = {
  action: "",
  callback: "",
  input: {
    label: "Search Field",
    name: "search",
    placeholder: "Search Field",
    type: "search",
  },
};

const searchfieldhelper: SearchFieldProps = {
  action: "",
  callback: "",
  input: {
    helper: "Search Field Helper text",
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
  searchfieldlabel,
  searchfieldhelper,
};

export default SearchFieldArgs;
