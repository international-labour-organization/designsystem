import { ReactElement } from "react";
import { DropdownProps } from "../Dropdown/Dropdown.props";
import { InputProps } from "../Input/Input.props";
import { TextareaProps } from "../Textarea/Textarea.props";
import { ToggleProps } from "../Toggle";

export interface FormControlProps {
  /**
   * The form element component to render
   */
  children:
    | ReactElement<ToggleProps>
    | ReactElement<InputProps>
    | ReactElement<DropdownProps>
    | ReactElement<TextareaProps>;

  /**
   * Optional className to add to the FormControl wrapper
   */
  className?: string;

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
}
