import { SearchFieldProps } from "./SearchField.props";

const searchfield: SearchFieldProps = {
  callback: () => {},
  disabled: false,
  name: "search",
  placeholder: "Search Field",
};

const searchfielderror: SearchFieldProps = {
  callback: () => {},
  disabled: false,
  error: true,
  errorMessage: "Error message",
  name: "search",
  placeholder: "Search Field",
};

const searchfielddisabled: SearchFieldProps = {
  callback: () => {},
  disabled: true,
  name: "search",
  placeholder: "Search Field",
};

const searchfieldlabel: SearchFieldProps = {
  callback: () => {},
  label: "Search Field",
  name: "search",
  placeholder: "Search Field",
};

const searchfieldhelper: SearchFieldProps = {
  callback: () => {},
  helper: "Search Field Helper text",
  name: "search",
  placeholder: "Search Field",
};

const searchfielddynamic: SearchFieldProps = {
  callback: () => {},
  onInputChange: (value: string) => {
    console.log("Dynamic search triggered:", value);
  },
  name: "search",
  placeholder: "Type to search dynamically...",
};

const searchfieldsmall: SearchFieldProps = {
  callback: () => {},
  label: "Search",
  name: "search",
  placeholder: "Search Field",
  size: "small",
  value: "",
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
  searchfieldsmall,
};

export default SearchFieldArgs;
