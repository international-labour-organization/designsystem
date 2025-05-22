export interface PaginationProps {
  /**
   * Specify the callback of your Button.
   */
  callback: (e: React.MouseEvent<Element, MouseEvent>) => unknown;

  /**
   * Specify an optional className to be added to your Pagination component.
   */
  className?: string;

  /**
   * current page number that the user is on, zero-indexed
   */
  currentPage: number;

  /**
   * link to the first page
   */
  firstPageUrl: string;

  /**
   * title label for the first page
   */
  firstPageTitle: string;

  /**
   * link to the last page
   */
  lastPageUrl: string;

  /**
   * title label for the last page
   */
  lastPageTitle: string;

  /**
   * linking word for the page counts
   */
  pageCountPreposition?: string;

  /**
   * link the following page
   */
  nextPageUrl: string;

  /**
   * title label for the next page
   */
  nextPageTitle: string;

  /**
   * link of the previous page
   */
  prevPageUrl: string;

  /**
   * title label for the prev page
   */
  prevPageTitle: string;

  /**
   * total number of pages that are available
   */
  totalPages: number;

  /**
   * theme of the pagination
   */
  theme?: "dark" | "light";
}
