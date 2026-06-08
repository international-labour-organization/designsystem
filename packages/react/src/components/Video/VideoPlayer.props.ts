import { Poster } from "./Video.props";
import videojs from "video.js";

export interface VideoPlayerRef {
  player: videojs.Player | undefined;
}

export interface VideoTextTrack {
  src: string;
  srclang: string;
  label: string;
  kind?: "captions" | "subtitles";
  default?: boolean;
}

export interface VideoPlayerControls {
  /**
   * Specify the label for the fullscreen button
   */
  fullscreen: string;

  /**
   * Specify the label for the play button
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

  /**
   * Specify the heading shown in the subtitles menu
   */
  chooseSubtitlesText?: string;

  /**
   * Specify the label for the option that turns subtitles off
   */
  noCaptionsText?: string;
}

export const defaultVideoControls: Required<VideoPlayerControls> = {
  fullscreen: "Fullscreen",
  play: "Play",
  pause: "Pause",
  volume: "Volume",
  chooseSubtitlesText: "Choose subtitles",
  noCaptionsText: "None",
};

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
  tracks?: VideoTextTrack[];
}
