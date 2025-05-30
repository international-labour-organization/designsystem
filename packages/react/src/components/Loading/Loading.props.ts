import { ThemeTypes } from "../../types";

export type LoadingStatus = "loading" | "loaded" | "idle";

export type LoadingSize = "small" | "large";

export interface LoadingProps {
  /**
   * Specify an optional className to be added to your empty component.
   */
  className?: string;

  /**
   * Specify the loader's size
   */
  size: LoadingSize;

  /**
   * Specify the loading status
   */
  status: LoadingStatus;

  /**
   * Specify the theme of the loading component
   */
  theme?: ThemeTypes;
}
