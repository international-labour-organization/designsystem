interface LinkProps {
  /**
   * Specify whether this link marks the end of a section
   */
  endsection?: boolean;

  /**
   * Specify the label for the the Context Menu's link
   */
  label?: Required<string>;

  /**
   * Specify the url for the Context Menu's link
   */
  url?: Required<string>;
}

export interface ContextMenuProps {
  /**
   * Specify an optional className to be added to your Context Menu component.
   */
  className?: string;

  /**
   * Specify the links to be displayed in the Context Menu
   */
  links?: Required<Array<LinkProps>>;
}
