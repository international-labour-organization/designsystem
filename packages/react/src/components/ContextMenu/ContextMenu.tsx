import { forwardRef } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";

export type LinkProps = {
  /**
   * Specify whether this link marks the end of a section
   */
  endsection?: boolean;

  /**
   * Specify the label for the the Context Menu's link
   */
  label: string;

  /**
   * Specify the url for the Context Menu's link
   */
  url: string;

  className?: string;
};

export type ContextMenuProps = {
  /**
   * Specify an optional className to be added to your Context Menu component.
   */
  className?: string;

  /**
   * Specify the links to be displayed in the Context Menu
   */
  links: Array<LinkProps>;
};

const ContextMenu = forwardRef<HTMLOListElement, ContextMenuProps>(
  ({ className, links }, ref) => {
    const { prefix } = useGlobalSettings();

    return (
      <ol
        className={classNames(`${prefix}--context-menu`, className)}
        ref={ref}
      >
        {links.map((link) => (
          <li
            className={classNames(`${prefix}--context-menu--item`, {
              endsection: link.endsection,
              className: link.className,
            })}
            key={`${link.label}-${link.url}`}
          >
            <a href={link.url} className={`${prefix}--context-menu--link`}>
              <span className={`${prefix}--context-menu--label`}>
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    );
  }
);

export { ContextMenu };
