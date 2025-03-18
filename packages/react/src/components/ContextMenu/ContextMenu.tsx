import { ElementType, forwardRef, useId } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { createPortal } from "react-dom";

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

  component?: ElementType;
  componentProps?: Record<string, unknown>;
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

  /**
   * Specify whether the Context Menu should be rendered in a portal
   */
  withPortal?: boolean;
};

const ContextMenu = forwardRef<HTMLOListElement, ContextMenuProps>(
  ({ className, links, withPortal = false }, ref) => {
    const { prefix } = useGlobalSettings();
    const id = useId();

    const Component = (
      <ol
        className={classNames(`${prefix}--context-menu`, className)}
        id={`${prefix}--context-menu-${id}`}
        ref={ref}
      >
        {links.map((link) => {
          return (
            <li
              className={classNames(`${prefix}--context-menu--item`, {
                endsection: link.endsection,
                className: link.className,
              })}
              key={`${link.label}-${link.url}`}
            >
              {link.component ? (
                <link.component
                  className={`${prefix}--context-menu--link`}
                  href={link.url}
                  {...link.componentProps}
                >
                  <span className={`${prefix}--context-menu--label`}>
                    {link.label}
                  </span>
                </link.component>
              ) : (
                <a href={link.url} className={`${prefix}--context-menu--link`}>
                  <span className={`${prefix}--context-menu--label`}>
                    {link.label}
                  </span>
                </a>
              )}
            </li>
          );
        })}
      </ol>
    );

    if (!withPortal) {
      return Component;
    }

    return createPortal(Component, document.body);
  }
);

export { ContextMenu };
