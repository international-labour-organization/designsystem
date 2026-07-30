import { ThemeTypes } from "../../types";
import { VideoPlayerControls, VideoTextTrack } from "./VideoPlayer.props";

export interface Poster {
  src: string;
  alt: string;
}

export interface VideoProps {
  src: string;

  /**
   * Specify the strings to be used as labels for the video controls
   */
  controls?: VideoPlayerControls;

  /**
   * if YouTube, set to true
   */
  youtube?: boolean;

  /**
   * Specify the caption for the image/video
   */
  caption?: string;

  /**
   * Specify an optional className to be added to your Media.
   */
  className?: string;

  /**
   * Specify the image src for the image
   */
  poster?: Poster;

  // Optional closed-caption tracks
  tracks?: VideoTextTrack[];

  /**
   * Specify the theme for the video component, either light or dark
   */
  theme?: ThemeTypes;
}
