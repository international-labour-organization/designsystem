import { SocialTypes } from "../../types";

export interface SocialMediaIcons {
  /**
   * The name of the icon to display
   */
  icon: SocialTypes;

  /**
   * The url to link to
   */
  url: string;

  /**
   * The alt text of the link
   */
  label: string;

  /**
   * An optional className to add to the icon
   */
  className?: string;
}

export interface SocialMediaProps {
  /**
   * An optional headline to display above the icons
   */
  headline?: string;

  /**
   * Specify an optional className to be added to your SocialMedia.
   */
  className?: string;

  /**
   * Specify the theme of the SocialMedia.
   */
  theme?: "light" | "dark";

  /**
   * The justification of the icons
   */
  justify?: "start" | "center";

  /**
   * Specify the icons to display.
   */
  icons: SocialMediaIcons[];

  /**
   * The size of the social media icons
   */
  iconSize: "normal" | "large";
}
