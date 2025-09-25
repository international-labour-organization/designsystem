import { ThemeTypes } from "../../types";

export interface ImageUrl {
  /**
   * Specify the breakpoint at which this image src should be used
   */
  breakpoint: number;

  /**
   * Specify the url of this breakpoint's image src
   */
  src: string;
}

export interface ImageProps {
  /**
   * Specify the alt for the image
   */
  alt?: Required<string>;

  /**
   * Specify the caption for the image/video
   */
  caption?: string;

  /**
   * Specify an optional className to be added to your Media.
   */
  className?: string;

  /**
   * Specify the credit for the image/video
   */
  credit?: Required<string>;

  /**
   * Specify the image src for the image
   */
  url: ImageUrl[];

  /**
   * Value to pass to lading attribute
   */
  loading?: "lazy" | "eager";

  /**
   * Will render the component to appear on light or dark backgrounds
   */
  theme?: ThemeTypes;
}
