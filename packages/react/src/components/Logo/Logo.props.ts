type LogoSrc =
  | string
  | {
      /**
       * The url of the logo to use with light theme
       */
      light: string;

      /**
       * The url of the logo to use with dark theme
       */
      dark: string;
    };

export interface LogoProps {
  /**
   * The location of the image file
   */
  src: LogoSrc;

  /**
   * Alt text for the logo
   */
  alt: string;

  /**
   * The name of the sub-brand if there is one
   */
  subbrand?: string;

  /**
   * The width of the logo or 'fluid' width
   */
  size?: number | "fluid";

  /**
   * Styles to be applied to the outermost element
   */
  style?: React.CSSProperties;

  /**
   * Optional className to be passed to the outermost element of the component
   */
  className?: string;

  /**
   * Optional destination if the logo is a link
   */
  url?: string;

  /**
   * Optional target if the logo is a link
   */
  target?: "_blank" | "_self" | "_parent" | "_top";

  /**
   * Theme of the logo component
   */
  theme?: "light" | "dark";
}

export interface InnerLogoProps extends LogoProps {
  /**
   * The base class of the logo component
   */
  baseClass: string;
}
