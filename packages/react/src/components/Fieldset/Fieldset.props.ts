import { HTMLProps } from "react";

export interface FieldsetProps extends HTMLProps<HTMLFieldSetElement> {
  /**
   * Optional helper text for the fieldset
   */
  helper?: string;

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
}
