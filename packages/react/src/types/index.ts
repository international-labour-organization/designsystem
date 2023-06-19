// export type AccordionSize = "small" | "large";
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
export type HeroCardAlignment = "left" | "center" | "right";
export type HeroCardTypes =
  | "home"
  | "publication"
  | "graphic"
  | "project"
  | "article"
  | "portal";
export type HeroCardTheme = "dark" | "light";
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
export type TooltipAlignment = "top" | "right" | "bottom" | "left";
export type TooltipPlacement = "negative" | "center" | "positive";
export type ListAlignment = "default" | "horizontal";
export type ListOrder = "unordered" | "ordered" | "unstyled";
export type LoadingStatus = "idle" | "loading" | "loaded";
export type LoadingSize = "small" | "large";
export type NotificationPlacement = "dialog" | "inline";
export type NotificationTypes = "error" | "info" | "success" | "warning";
export type PositionTypes = "top" | "bottom" | "left" | "right";
export type SizeTypes = "small" | "medium" | "large";
export type TagTypes = "anchor" | "display" | "button";
export type SocialTypes = "instagram" | "facebook" | "twitter" | "youtube";
export type CardColor = "turquoise" | "green" | "yellow" | "blue";
export type CardSize = "wide" | "standard" | "narrow";
export type CardCornerType = "cornercut" | "corner";
export type CardAlignment = "left" | "right";
export type CardTypes =
  | "stat"
  | "multilink"
  | "graphic"
  | "graphicpromo"
  | "feature"
  | "detail"
  | "factlist"
  | "data";
export interface FormFieldProps<T> {
  /**
   * The input's onChange callback.
   */
  onChange?: (e: React.ChangeEvent<T>) => any;

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
   * The input's id attribute
   */
  id: string;

  /**
   * The input's name attribute
   */
  name?: string;

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
}
