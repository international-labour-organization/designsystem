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

interface ImageUrl {
  /**
   * Specify the breakpoint at which this image src should be used
   */
  breakpoint?: number;

  /**
   * Specify the url of this breakpoint's image src
   */
  src?: string;
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

interface Video {
  /**
   * Specify the strings to be used as labels for the video controls
   */
  controls?: Required<VideoPlayerControls | false>;

  /**
   * Specify whether a video is to be shown
   */
  hasvideo?: Required<boolean>;

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

export interface MediaProps {
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
  url?: Required<ImgageUrl>;

  /**
   * Specify whether there is a video being shown
   */
  video?: Required<Video>;
}
