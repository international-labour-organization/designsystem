import { Poster } from "./Video.props";
import videojs from "video.js";

export interface VideoPlayerRef {
  player: videojs.Player | undefined;
}
export interface VideoPlayerControls {
  /**
   * Specify the label for the fullscreen button
   */
  fullscreen: string;

  /**
   * Specify the label for the  play button
   */
  play: string;

  /**
   * Specify the label for the pause button
   */
  pause: string;

  /**
   * Specify the label for the volume button
   */
  volume: string;
}

export interface VideoPlayerProps {
  src: string;

  /**
   * Specify an optional className to be added to your Media.
   */
  className?: string;

  /**
   * Specify the strings to be used as labels for the video controls
   */
  controls?: VideoPlayerControls;

  /**
   *  poster image for video
   */
  poster?: Poster;

  /**
   * if YouTube, set to true
   */
  youtube?: boolean;
}
