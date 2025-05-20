import { ThemeTypes } from "../../types";

export interface RichTextProps {
  /**
   * Specify an optional className to be added to your RichText.
   */
  className?: string;

  /**
   * Specify the html content
   */
  content: string;

  /**
   * Specify the theme to be used for the RichText component.
   * @default "light"
   */
  theme?: ThemeTypes;
}
