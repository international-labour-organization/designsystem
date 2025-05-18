import { ReactElement } from "react";
import { DropdownProps } from "../Dropdown/Dropdown.props";
import { InputProps } from "../Input/Input.props";
import { TextareaProps } from "../Textarea";
import { ToggleProps } from "../Toggle";
import { ThemeTypes } from "../../types";

export interface FormControlPublicProps {
  /**
   * Optional className to add to the FormControl wrapper
   */
  className?: string;

  /**
   * Is the input disabled?
   */
  disabled?: boolean;

  /**
   * Does the input have an error?
   */
  error?: boolean;

  /**
   * The message to display in case of an error
   */
  errorMessage?: string;

  /**
   * Helper text to display with the label
   */
  helper?: string;

  /**
   * The FormControl's label
   */
  label: string;

  /**
   * Where to place the label
   */
  labelPlacement?: "top" | "start" | "bottom" | "end";

  /**
   * The size of your label. Defaults to "medium"
   */
  labelSize?: "small" | "medium" | "large";

  /**
   * Inline styles for the input
   */
  style?: React.CSSProperties;

  /**
   * Optional text to render in a tooltip
   */
  tooltip?: string;

  /**
   * Theme to use for the FormControl. This will be overridden by the theme of the Form.
   */
  theme?: ThemeTypes;
}

export interface FormControlPrivateProps {
  /**
   * The id of the underlying input element
   */
  fieldId: string;

  children:
    | ReactElement<ToggleProps>
    | ReactElement<InputProps>
    | ReactElement<DropdownProps>
    | ReactElement<TextareaProps>;
}

export type FormControlProps = FormControlPublicProps & FormControlPrivateProps;
