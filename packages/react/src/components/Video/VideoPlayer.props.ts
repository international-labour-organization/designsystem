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

export interface TracksConfig {
  /**
   * is this the default track?
   */
  default?: boolean;

  /**
   * What kind of track is it?
   */
  kind?: string;

  /**
   * url for the track
   */
  src?: string;

  /**
   * language of the track
   */
  srcLang?: string;
}

export interface VideoPlayerProps {
  /**
   * Specify an optional className to be added to your Media.
   */
  className?: string;

  /**
   * Specify the strings to be used as labels for the video controls
   */
  controls?: Required<VideoPlayerControls | false>;

  /**
   * Specify whether a video is to be shown
   */
  hasvideo?: Required<boolean>;

  /**
   *  poster image for video
   */
  poster?: string;

  /**
   * if self-hosted, specify the url of this video
   */
  src?: string | null;

  /**
   * if there are closed-caption tracks,
   */
  tracks?: Required<Array<TracksConfig>> | null;

  /**
   * if YouTube, set to true
   */
  youtube?: boolean;
}
