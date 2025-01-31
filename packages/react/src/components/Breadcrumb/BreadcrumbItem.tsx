import { forwardRef } from "react";
import classNames from "classnames";

import { useGlobalSettings } from "../../hooks";

export type BreadcrumbItemProps = {
  /**
   * Optional additional className of the BreadcrumbLink
   */
  className?: string;

  /**
   * Specify the label for this link
   */
  label: string;

  /**
   * Specify the url for this link
   */
  url: string;

  /**
   * Specify whether this link is the first in the Breadcrumb
   */
  first?: boolean;
};

const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ url, label, className, first }, ref) => {
    const { prefix } = useGlobalSettings();

    return (
      <li
        className={classNames({
          [`${prefix}--breadcrumb--item`]: true,
          [`${prefix}--breadcrumb--item__first`]: first,
          className,
        })}
        ref={ref}
      >
        <a
          className={`${prefix}--breadcrumb--link`}
          href={url}
          aria-label={label}
        >
          {!first && (
            <span className={`${prefix}--breadcrumb--link--label`}>
              {label}
            </span>
          )}
        </a>
      </li>
    );
  }
);

export { BreadcrumbItem };
