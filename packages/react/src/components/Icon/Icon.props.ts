export type IconSize = 16 | 20 | 24 | 32;

export interface IconProps {
  /**
   * Specify if this should be hidden from screen readers
   */
  hidden?: boolean;

  /**
   * Specify the icon
   */
  name?: string;

  /**
   * Specify the icon's size
   */
  size?: IconSize;

  /**
   * Specify the icon's color. This can also be a CSS variable. Defaults to `currentColor`
   */
  color?: string;

  /**
   * Give the icon a class name
   */
  className?: string;

  /**
   * Give the icon an id
   */
  id?: string;
}
