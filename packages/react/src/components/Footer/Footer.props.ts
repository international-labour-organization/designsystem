//import { ImageProps } from "../Image/Image.props";
import { LinkGroupProps } from "../LinkList/LinkList.props";
import { LinkProps } from "../LinkList/LinkList.props";
import { SocialProps } from "../Hero/HeroCard.props";

export interface FooterProps {
  /**
   * Props for the logo of the Footer
   */
  logo?: string;

  /**
   * Specify the tagline for the Footer
   */
  tagline?: string;

  /**
   * Specify the subtagline for the Footer
   */
  subtagline?: string;

  /**
   * Specify the address for the Footer, in multiple lines
   */
  address?: string[];

  /**
   * Specify the linkgroup for the Footer's links
   */
  linkgroup?: Required<Array<LinkGroupProps>>;

  /**
   * Specify the links to be displayed in this link group
   */
  socials?: SocialProps[];

  /**
   * Specify the legal statement for the Footer
   */
  subscribe?: SocialProps;

  /**
   * Specify the legal statement for the Footer
   */
  legal?: string;

  /**
   * Specify the secondary links for the Footer
   */
  secondarylinks?: LinkProps[];

  /**
   * Specify the anchor link for the Footer
   */
  anchorlink?: LinkProps;
}
