import { FormFieldProps } from "../../types";

export interface ToggleProps extends FormFieldProps<HTMLInputElement> {
  /**
   * Specify the size of your Toggle. Defaults to "medium".
   */
  size?: "large" | "medium" | "small";

  /**
   * Specify whether your Toggle is checked by default. Defaults to false.
   *
   */
  defaultChecked?: boolean;

  /**
   * Specify whether your Toggle is checked. Defaults to undefined.
   */
  checked?: boolean;

  /**
   * OnClick handler for the input element.
   */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}
