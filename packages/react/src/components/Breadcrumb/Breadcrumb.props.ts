export interface BreadcrumbItemProps {
  /**
   * Optional additional className of the BreadcrumbLink
   */
  className?: string;

  /**
   * Specify the label for this link
   */
  label: string;

  /**
   * Should the label appear as readable text on the screen or an aria-label
   */
  labelShown?: boolean;

  /**
   * Specify the url for this link
   */
  url: string;
}

export interface BreadcrumbProps {
  /**
   * An additional classname to add to the outer most element of the component
   */
  className?: string;

  /**
   * The accessible label to apply to the ellipsis button that appears when the Breadcrumb is collapsed
   */
  buttonLabel: string;

  /**
   * Specify the links to be displayed in the Breadcrumb
   */
  links: BreadcrumbItemProps[];
}
