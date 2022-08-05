import { PaginationProps } from "./Pagination.props";

const pagination: PaginationProps = {
  className: "storybook",
  callback: "",
  currentPage: 1,
  firstPageUrl: "https://www.google.com?s=first",
  firstPageTitle: "First",
  lastPageUrl: "https://www.google.com?s=last",
  lastPageTitle: "Last",
  nextPageUrl: "https://www.google.com?s=next",
  nextPageTitle: "Next",
  pageCountPreposition: "of",
  prevPageUrl: "https://www.google.com?s=prev",
  prevPageTitle: "Prev",
  totalPages: 8,
};

const firstDisabled: PaginationProps = {
  className: "storybook",
  callback: "",
  currentPage: 0,
  firstPageUrl: "https://www.google.com?s=first",
  firstPageTitle: "First",
  lastPageUrl: "https://www.google.com?s=last",
  lastPageTitle: "Last",
  nextPageUrl: "https://www.google.com?s=next",
  nextPageTitle: "Next",
  pageCountPreposition: "of",
  prevPageUrl: "https://www.google.com?s=prev",
  prevPageTitle: "Prev",
  totalPages: 1,
};

/**
 * Sample prop definitions for Pagination's enumerable properties (imported in stories and test)
 */
const PaginationArgs = {
  pagination,
  firstDisabled,
};

export default PaginationArgs;
