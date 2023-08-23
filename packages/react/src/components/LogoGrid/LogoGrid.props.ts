export interface LogoGridItemProps {
  /**
   * The label of the logo
   */
  label: string;

  /**
   * The image src of the logo
   */
  src: string | URL;

  /**
   * The link of the logo
   */
  url?: string;
}

export interface LogoGridProps {
  /**
   * The logos to display
   */
  logos: LogoGridItemProps[];

  /**
   * The theme of the logo grid
   */
  theme?: "dark" | "light";
}
