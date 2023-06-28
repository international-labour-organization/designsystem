import { LinkProps } from "../LinkList/LinkList.props";

export interface BreadcrumbProps {
  /**
   * Specify the HOME link in the Breadcrumb
   */
  home: Required<LinkProps>;

  /**
   * Specify the links to be displayed in the Breadcrumb
   */
  links: Required<Array<LinkProps>>;
}
