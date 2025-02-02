import { forwardRef, AnchorHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { LinkTypes } from "../../types";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /**
   * Specify the url for the link's href
   */
  url: string;

  /**
   * Specify the content of your Link.
   */
  children?: ReactNode;

  /**
   * Specify the label for the link
   */
  label?: string;

  /**
   * Specify the target for the link
   */
  target?: string;

  /**
   * Specify an optional className to be added to your Link.
   */
  theme?: LinkTypes;

  /**
   * Specify an optional className to be added to your Link.
   */
  className?: string;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { children, className, label, target, theme = "light", url, ...props },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const baseClass =
      typeof className !== "undefined" && className.includes("button")
        ? ""
        : `${prefix}--link`;

    const linkClasses = classNames(className, {
      [baseClass]: true,
      [`${baseClass}--${theme}`]: theme,
    });

    return (
      <a
        ref={ref}
        className={linkClasses}
        href={url}
        target={target}
        rel={target ? "noopener noreferrer" : ""}
        {...props}
      >
        {label && <span className="link__label">{label}</span>}
        {children}
      </a>
    );
  }
);

export { Link };
