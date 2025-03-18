import { ElementType, forwardRef } from "react";
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

  component?: ElementType;
  componentProps?: Record<string, unknown>;
};

const BreadcrumbLink = ({
  component: Component,
  componentProps,
  first,
  label,
  url,
}: BreadcrumbItemProps) => {
  const { prefix } = useGlobalSettings();
  const child = (
    <span className={`${prefix}--breadcrumb--link--label`}>{label}</span>
  );
  const common = {
    href: url,
    className: `${prefix}--breadcrumb--link`,
    ["aria-label"]: label,
  };

  if (Component) {
    return (
      <Component {...common} {...componentProps}>
        {!first && child}
      </Component>
    );
  }

  return <a {...common}>{!first && child}</a>;
};

const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ url, label, className, first, ...rest }, ref) => {
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
        <BreadcrumbLink label={label} url={url} first={first} {...rest} />
      </li>
    );
  }
);

export { BreadcrumbItem };
