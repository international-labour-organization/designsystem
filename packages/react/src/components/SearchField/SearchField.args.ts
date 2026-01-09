import { SearchFieldProps } from "./SearchField.props";

const searchfield: SearchFieldProps = {
  callback: () => {},
  input: {
    callback: () => {},
    disabled: false,
    name: "search",
    placeholder: "Search Field",
    type: "search",
    value: "",
  },
};

const searchfielderror: SearchFieldProps = {
  callback: () => {},
  input: {
    callback: () => {},
    disabled: false,
    error: "Error message",
    name: "search",
    placeholder: "Search Field",
    type: "search",
    value: "",
  },
};

const searchfielddisabled: SearchFieldProps = {
  callback: () => {},
  input: {
    callback: () => {},
    disabled: true,
    name: "search",
    placeholder: "Search Field",
    type: "search",
    value: "",
  },
};

const searchfieldlabel: SearchFieldProps = {
  callback: () => {},
  input: {
    label: "Search Field",
    name: "search",
    placeholder: "Search Field",
    type: "search",
    value: "",
  },
};

const searchfieldhelper: SearchFieldProps = {
  callback: () => {},
  input: {
    helper: "Search Field Helper text",
    name: "search",
    placeholder: "Search Field",
    type: "search",
    value: "",
  },
};

const searchfielddynamic: SearchFieldProps = {
  callback: () => {},
  onInputChange: (value: string) => {
    console.log("Dynamic search triggered:", value);
  },
  input: {
    name: "search",
    placeholder: "Type to search dynamically...",
    type: "search",
    value: "",
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
  searchfielddynamic,
};

export default SearchFieldArgs;
