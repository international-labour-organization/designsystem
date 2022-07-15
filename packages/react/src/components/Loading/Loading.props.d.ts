import { loadingStatus, loadingSize } from "../../types";

export interface LoadingProps {
  /**
   * Specify an optional className to be added to your empty component.
   */
  className?: string;

  /**
   * Specify the loading message
   */
  message?: string;

  /**
   * Specify the loader's size
   */
  size?: Required<loadingSize>;

  /**
   * Specify the loading status
   */
  status?: Required<loadingStatus>;
}
