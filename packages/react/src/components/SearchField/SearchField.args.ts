import { SearchFieldProps } from "./SearchField.props";

export const searchfield: SearchFieldProps = {
  callback: () => {},
  disabled: false,
  name: "search",
  placeholder: "Search Field",
};

export const searchfielderror: SearchFieldProps = {
  callback: () => {},
  disabled: false,
  error: true,
  errorMessage: "Error message",
  name: "search",
  placeholder: "Search Field",
};

export const searchfielddisabled: SearchFieldProps = {
  callback: () => {},
  disabled: true,
  name: "search",
  placeholder: "Search Field",
};

export const searchfieldlabel: SearchFieldProps = {
  callback: () => {},
  label: "Search Field",
  name: "search",
  placeholder: "Search Field",
};

export const searchfieldhelper: SearchFieldProps = {
  callback: () => {},
  helper: "Search Field Helper text",
  name: "search",
  placeholder: "Search Field",
};

export const searchfieldsmall: SearchFieldProps = {
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
  searchfieldsmall,
};

export default SearchFieldArgs;
