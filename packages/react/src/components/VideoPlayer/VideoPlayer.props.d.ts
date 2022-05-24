export interface VideoPlayerControls {
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
  poster?: Required<Array>;

  /**
   * if self-hosted, specify the url of this video
   */
  src?: string | null;

  /**
   * if there are closed-caption tracks,
   */
  tracks?: Required<Array<TracksConfig>> | null;

  /**
   * if YouTube, specify a YouTube url or ID
   */
  youtube?: string | null;
}
