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

export interface VideoPlayerProps {
  /**
   * Specify an optional className to be added to your Media.
   */
  className?: string;

  /**
   * Specify the labels for the controls
   */
  controls?: Required<Object<VideoPlayerControls>>;

  /**
   * if self-hosted, specify the url of this video
   */
  src?: string;

  /**
   * if YouTube, specify a YouTube url or ID
   */
  youtube?: string;
}
