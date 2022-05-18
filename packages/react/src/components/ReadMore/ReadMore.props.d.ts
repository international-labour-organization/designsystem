export interface ReadMoreProps {
  /**
   * Specify a label for the "Read More" button.
   */
  buttonlabel?: string;

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
