interface LinkProps {
  /**
   * Specify the label for the the Profile's link
   */
  label?: Required<string>;

  /**
   * Specify the url for the Profile's link
   */
  url?: Required<string>;
}

export interface ProfileProps {
  /**
   * Specify an optional avatar to be added to your Profile component. Image *must* be a perfect square. CMS backend should provide a fallback if the avatar is not populated.
   */
  avatar?: Required<string>;

  /**
   * Specify an optional className to be added to your Profile component.
   */
  className?: string;

  /**
   * Specify an optional description to be added to your Profile component.
   */
  description?: string;

  /**
   * Specify an optional link to be added to your Profile component.
   */
  link?: LinkProps;

  /**
   * Specify the name to be added to your Profile component.
   */
  name?: Required<string>;

  /**
   * Specify an optional role to be added to your Profile component.
   */
  role?: string;
}
