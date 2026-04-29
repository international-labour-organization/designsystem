import { FormControlPublicProps } from "../FormControl/FormControl.props";

/**
 * @deprecated Pass these properties at the top level of `SearchFieldProps`
 * instead. This shape will be removed in a future major release.
 */
export interface SearchFieldInputProps {
  disabled?: boolean;
  /**
   * @deprecated Use the top-level `error` (boolean) together with
   * `errorMessage` (string) instead.
   */
  error?: string | false;
  helper?: string | false;
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
}

export interface SearchFieldProps
  extends Omit<FormControlPublicProps, "label"> {
  /**
   * The FormControl's label. Optional on SearchField.
   */
  label?: string;

  /**
   * Specify the action attribute for the search form
   */
  action?: string;

  /**
   * The search field submit button's click function.
   */
  callback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => unknown;

  /**
   * Placeholder text for the search input
   */
  placeholder?: string;

  /**
   * Name attribute for the search input
   */
  name?: string;

  /**
   * Id attribute for the search input. Defaults to an auto-generated id.
   */
  id?: string;

  /**
   * @deprecated Pass `value`, `placeholder`, `label`, `name`, `id`, `helper`,
   * `disabled`, `error`, and `errorMessage` at the top level of
   * `SearchFieldProps` instead. This prop will be removed in a future
   * major release.
   */
  input?: SearchFieldInputProps;

  /**
   * Callback function triggered on input change for dynamic search.
   * Receives the current search value as the user types, enabling
   * real-time search functionality.
   */
  onInputChange?: (value: string) => void;
}
