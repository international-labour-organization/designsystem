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

interface Video {
  /**
   * Specify whether a video is to be shown
   */
  hasvideo?: boolean;

  /**
   * if self-hosted, specify the url of this video
   */
  src?: string;

  /**
   * if YouTube, specify a YouTube url or ID
   */
  youtube?: string;
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
  url?: Required<Object<ImgageUrl>>;

  /**
   * Specify whether there is a video being shown
   */
  video?: Required<Object<Videol>>;
}
