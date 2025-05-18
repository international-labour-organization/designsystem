import { HTMLProps } from "react";

export interface FieldsetProps extends HTMLProps<HTMLFieldSetElement> {
  /**
   * Optional helper text for the fieldset
   */
  helper?: string;

  /**
   * Optional error text for the fieldset
   */
  errorMessage?: string;

  /**
   * Optional tooltip text for the fieldset
   */
  tooltip?: string;

  /**
   * The fieldset's legend
   */
  legend?: string;

  /**
   * The direction of the Fieldset's children
   */
  direction?: "row" | "column" | "row-reverse" | "column-reverse";

  /**
   * How the Fieldset children will wrap
   */
  wrap?: "reverse" | "nowrap" | "wrap" | "wrap-reverse";

  /**
   * The theme of the Fieldset. This will be overridden by the theme of the Form.
   */
  theme?: "light" | "dark";
}
