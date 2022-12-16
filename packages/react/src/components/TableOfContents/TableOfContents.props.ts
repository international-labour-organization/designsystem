export interface AnchorLink {
  /**
   * Specify the label for the anchor link
   */
  label?: Required<string>;

  /**
   * Specify the href for the anchor link
   */
  href?: Required<string>;
}

export interface TableOfContentsProps {
  /**
   * Specify an optional className to be added to your accordion.
   */
  className?: string;

  /**
   * Specify the items in the table of contents
   */
  items?: Required<Array<AnchorLink>>;
}
