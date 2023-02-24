import { LinkGroupProps } from "../LinkList/LinkList.props";
import { LinkProps } from "../LinkList/LinkList.props";
import { SocialTypes } from "../../types";

export interface FooterProps {
  /**
   * Specify an optional className to be added to your Footer.
   */
  className?: string;

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
  socials?: FooterSocialProps;

  /**
   * Specify the legal statement for the Footer
   */
  subscribe?: LinkProps;

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

interface FooterSocialProps {
  /**
   * Specify the headline for social links
   */
  headline?: Required<string>;

  /**
   * Specify the social links
   */
  links?: Required<SocialLinkProps>[];
}

interface SocialLinkProps {
  /**
   * Specify the type for social link
   */
  type?: Required<SocialTypes>;

  /**
   * Specify the url for social link
   */
  url?: Required<string>;
}
