import { LinkProps, ContextMenuProps } from "../ContextMenu/ContextMenu.props";
import { SearchFieldProps } from "../SearchField/SearchField.props";

export interface NavigationProps {
  /**
   * Props for the logo of the Navigation
   */
  logo?: Required<string>;

  /**
   * Props for the mobile logo of the Navigation
   */
  mobilelogo?: Required<string>;

  /**
   * Props for the home url of the Navigation
   */
  siteurl?: Required<string>;

  /**
   * Specify the tagline for the Navigation
   */
  tagline?: Required<TaglineProps>;

  /**
   * Specify the primary items for the Navigation
   */
  primarynav?: Required<PrimaryNavProps>;

  /**
   * Specify the secondary items for the Navigation
   */
  subnav?: Required<SubNavProps>;

  /**
   * Specify the tagline for the Navigation
   */
  searchlabel?: string;

  /**
   * Specify the searchfield props for the Navigation
   */
  searchfield?: SearchFieldProps;

  /**
   * Specify the menu label for the Navigation
   */
  menulabel?: string;

  /**
   * Specify the menu close label for the Navigation
   */
  menucloselabel?: string;

  /**
   * Specify the language label for the Navigation
   */
  languagelabel?: string;

  /**
   * Specify the language context menu for the Navigation
   */
  languagecontextmenu?: ContextMenuProps;
}

interface PrimaryNavProps {
  /**
   * Specify the label for Navigation
   */
  navlabel?: Required<string>;

  /**
   * Specify the close label for mobile Navigation
   */
  mobilecloselabel?: Required<string>;

  /**
   * Specify the links
   */
  items?: Required<Array<LinkProps>>;
}

interface SubNavProps {
  /**
   * Specify the label for sub Navigation
   */
  navlabel?: Required<string>;

  /**
   * Specify the button label for sub Navigation
   */
  buttonlabel?: Required<string>;

  /**
   * Specify the close label for mobile sub Navigation
   */
  mobilecloselabel?: Required<string>;

  /**
   * Specify the back label for mobile sub Navigation
   */
  mobilebacklabel?: Required<string>;

  /**
   * Specify the subnav links
   */
  items?: Required<Array<LinkProps>>;
}

interface TaglineProps {
  /**
   * Specify the main tagline text
   */
  tag?: Required<string>;

  /**
   * Specify the small tagline text
   */
  small?: Required<string>;
}
