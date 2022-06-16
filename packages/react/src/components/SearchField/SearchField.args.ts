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

/**
 * Sample prop definitions for SearchField's enumerable properties (imported in stories and test)
 */
const SearchFieldArgs = {
  searchfield,
};

export default SearchFieldArgs;
