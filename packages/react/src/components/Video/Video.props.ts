import { TracksConfig } from "./VideoPlayer.props";

export interface Poster {
  url: { src: string }[];
  alt: string;
}

interface VideoPlayerControls {
  /**
   * Specify the label for the fullscreen button
   */
  fullscreen?: Required<string>;

  /**
   * Specify the label for the  play button
   */
  play?: Required<string>;

  /**
   * Specify the label for the pause button
   */
  pause?: Required<string>;

  /**
   * Specify the label for the volume button
   */
  volume?: Required<string>;
}

interface Video {
  /**
   * Specify the strings to be used as labels for the video controls
   */
  controls?: Required<VideoPlayerControls | false>;

  /**
   * if self-hosted, specify the url of this video
   */
  src?: string | null;

  /**
   * if there are closed-caption tracks,
   */
  tracks?: TracksConfig[];

  /**
   * if YouTube, set to true
   */
  youtube?: boolean;
}

export interface VideoProps {
  /**
   * Specify the alt for the image
   */
  alt: string;

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

  /**
   * Specify whether there is a video being shown
   */
  video: Video;
}
