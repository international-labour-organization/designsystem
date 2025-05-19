import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { PaginationProps } from "./Pagination.props";

const Pagination: FC<PaginationProps> = ({
  className,
  callback,
  currentPage,
  firstPageUrl,
  firstPageTitle = "First page",
  lastPageUrl,
  lastPageTitle = "Last page",
  nextPageUrl,
  nextPageTitle = "Next page",
  pageCountPreposition = "of",
  prevPageUrl,
  prevPageTitle = "Previous page",
  totalPages,
  theme = "light",
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--pagination`;
  const themeClass = `${baseClass}__theme__${theme}`;

  const paginationClasses = classNames(className, baseClass, themeClass);

  const isFirst = currentPage === 0;
  const isLast = currentPage + 1 === totalPages;

  const firstClasses = classNames(className, {
    [`${baseClass}--first-page`]: true,
    [`${baseClass}--link`]: true,
    [`${baseClass}--disable`]: isFirst,
  });

  const prevClasses = classNames(className, {
    [`${baseClass}--prev-page`]: true,
    [`${baseClass}--link`]: true,
    [`${baseClass}--disable`]: isFirst,
  });

  const nextClasses = classNames(className, {
    [`${baseClass}--next-page`]: true,
    [`${baseClass}--link`]: true,
    [`${baseClass}--disable`]: isLast,
  });

  const lastClasses = classNames(className, {
    [`${baseClass}--last-page`]: true,
    [`${baseClass}--link`]: true,
    [`${baseClass}--disable`]: isLast,
  });

  /**
   * On click, if there is a callback, call it
   */
  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (callback) {
      callback(e);
    }
  };

  return (
    <div className={paginationClasses}>
      <div className={`${baseClass}--previous-set`}>
        <a
          className={firstClasses}
          onClick={(e) => handleClick(e)}
          href={firstPageUrl}
          title={firstPageTitle}
        >
          {firstPageTitle}
        </a>

        <a
          className={prevClasses}
          onClick={(e) => handleClick(e)}
          href={prevPageUrl}
          title={prevPageTitle}
        >
          {prevPageTitle}
        </a>
      </div>

      <p className={`${baseClass}--page`}>
        <span>{currentPage + 1}</span>
        <span>{pageCountPreposition}</span>
        <span>{totalPages}</span>
      </p>

      <div className={`${baseClass}--next-set`}>
        <a
          className={nextClasses}
          onClick={(e) => handleClick(e)}
          href={nextPageUrl}
          title={nextPageTitle}
        >
          {nextPageTitle}
        </a>

        <a
          className={lastClasses}
          onClick={(e) => handleClick(e)}
          href={lastPageUrl}
          title={lastPageTitle}
        >
          {lastPageTitle}
        </a>
      </div>
    </div>
  );
};

export default Pagination;
