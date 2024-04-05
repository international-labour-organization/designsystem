import { FormControlPublicProps } from "../components/FormControl/FormControl.props";

// export type AccordionSize = "small" | "large";
export type ThemeTypes = "light" | "dark";
export type ButtonFunctions = "button" | "submit" | "reset";
export type ButtonTypes = "primary" | "secondary" | "tertiary" | "alert";
export type CalloutTypes = "info" | "error" | "success" | "warning";
export type ChoiceGroupFieldTypes = "checkbox" | "radio";
export type FieldTypes =
  | "checkbox"
  | "date"
  | "dropdown"
  | "formgroup"
  | "input"
  | "number"
  | "radio"
  | "textarea"
  | "toggle"
  | "file";
export type FormGroupTypes = "default" | "filter";
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TextInputTypes =
  | "email"
  | "hidden"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "url";
export type Language = "en" | "fr" | "es";
export type LabelTypes = "default" | "actionable" | "light";
export type LinkTypes = "light" | "dark" | "footer" | "button";
export type LinkListThemes = "light" | "dark";
export type TooltipThemes = "light" | "dark";
export type TooltipIconThemes = "light" | "dark";
export type TooltipAlignment = "top" | "right" | "bottom" | "left";
export type TooltipPlacement = "negative" | "center" | "positive";
export type LoadingStatus = "idle" | "loading" | "loaded";
export type LoadingSize = "small" | "large";
export type NotificationPlacement = "dialog" | "inline";
export type NotificationTypes = "error" | "info" | "success" | "warning";
export type PositionTypes = "top" | "bottom" | "left" | "right";
export type SizeTypes = "small" | "medium" | "large";
export type TagTypes = "anchor" | "display" | "button";
export type SocialTypes =
  | "facebook"
  | "twitter"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "tiktok"
  | "flickr";
export type CardColor = "turquoise" | "green" | "yellow" | "blue";
export type CardSize = "wide" | "standard" | "narrow" | "fluid";
export type CardCornerType = boolean;
export type CardAlignment = "left" | "right";
export type CardTypes =
  | "stat"
  | "multilink"
  | "text"
  | "promo"
  | "feature"
  | "detail"
  | "factlist"
  | "data";

export type HeadingTypes = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type EventDate = {
  unix?: string;
  human?: string;
};

export interface FormFieldProps<T> {
  /**
   * The input's onChange callback.
   */
  onChange?: (e: React.ChangeEvent<T>) => any;

  /**
   * The input's onBlur callback.
   */
  onBlur?: (e: React.FocusEvent<T>) => any;

  /**
   * Specify an optional className to be added to your input.
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
   * The input's id attribute. Will otherwise be set to the same value as `name`.
   */
  id?: string;

  /**
   * The input's name attribute.
   */
  name: string;

  /**
   * Specify whether this input is required
   */
  required?: boolean;

  /**
   * Inline styles applies to the outermost container
   */
  style?: React.CSSProperties;
}

export interface ChoiceFieldProps<T> extends FormFieldProps<T> {
  /**
   * Whether the input should be checked by default
   **/
  defaultChecked?: boolean;

  /**
   * Whether the input is checked
   */
  checked?: boolean;

  /**
   * The input's value attribute.
   */
  value?: string;
}

export type LabelledFormFieldProps<T> = T &
  FormControlPublicProps & { inputStyle?: React.CSSProperties };
