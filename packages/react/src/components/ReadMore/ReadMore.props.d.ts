export interface ReadMoreButtonLabelProps {
  /**
   * Specify the label for the closed state of the "Read More" button
   */
  closed?: Required<string>;

  /**
   * Specify the label for the opened state of the "Read More" button
   */
  opened?: Required<string>;
}

export interface ReadMoreProps {
  /**
   * Specify labels for the "Read More" button.
   */
  buttonlabel?: Required<ReadMoreButtonLabelProps>;

  /**
   * Specify an optional className to be added to your Button.
   */
  className?: string;

  /**
   * Specify the excerpt text
   */
  excerpt?: html;

  /**
   * Specify the complete text
   */
  fulltext?: html;

  /**
   * Specify the open/closed state on component load
   */
  openatstart?: boolean;
}
