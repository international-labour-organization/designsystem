import { InputProps } from "../Input/Input.props";

export interface ButtonProps {
  /**
   * The button's label.
   */
  label: Required<string>;
}

export interface SearchFieldProps {
  /**
   * Specify the action attribute for the search form
   */
  action?: string;

  /**
   * Specify the properties of the submit button
   */
  button?: Required<ButtonProps>;

  /**
   * The search field submit button's click function.
   */
  callback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => unknown;

  /**
   * Specify an optional className to be added to your Button.
   */
  className?: string;

  /**
   * Specify the properties of the search field input
   */
  input?: InputProps;

  /**
   * Callback function triggered on input change for dynamic search.
   * Receives the current search value as the user types, enabling
   * real-time search functionality.
   */
  onInputChange?: (value: string) => void;
}
