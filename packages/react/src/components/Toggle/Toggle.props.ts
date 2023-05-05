export interface ToggleProps {
  /**
   * Specify the id of your Toggle. This is required for accessibility.
   */
  id: string;

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
   * Specify an optional className to be added to your Toggle.
   */
  className?: string;

  /**
   * Specify whether your Toggle is disabled. Defaults to false.
   */
  disabled?: boolean;

  /**
   * Set your toggle to show an error state. Defaults to false.
   */
  error?: boolean;

  /**
   * Specify the name of your Toggle.
   */
  name?: string;

  /**
   * Is the toggle required? Defaults to false.
   */
  required?: boolean;

  /**
   * OnChange handler for the input element.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * OnClick handler for the input element.
   */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}
