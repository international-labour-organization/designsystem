import { ElementType, forwardRef, useId } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import { useFocusTrap } from "../../hooks";
import mergeRefs from "merge-refs";

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

  /**
   * Callback function when the Context Menu is closed;
   */
  onClose?: () => void;

  /**
   * Whether the Context Menu is open
   */
  isOpen: boolean;
};

const ContextMenu = forwardRef<HTMLOListElement, ContextMenuProps>(
  ({ className, links, withPortal = false, onClose, isOpen }, ref) => {
    const id = useId();
    const focusTrapRef = useFocusTrap<HTMLOListElement>({
      isActive: isOpen,
      restoreFocus: true,
      onEscape: () => {
        if (onClose) {
          onClose();
        }
      },
    });

    const Component = (
      <ol
        className={classNames("ilo--context-menu", className)}
        id={`ilo--context-menu-${id}`}
        ref={mergeRefs(ref, focusTrapRef)}
      >
        {links.map((link) => {
          return (
            <li
              className={classNames("ilo--context-menu--item", {
                endsection: link.endsection,
                className: link.className,
              })}
              key={`${link.label}-${link.url}`}
            >
              {link.component ? (
                <link.component
                  className="ilo--context-menu--link"
                  href={link.url}
                  {...link.componentProps}
                >
                  <span className="ilo--context-menu--label">{link.label}</span>
                </link.component>
              ) : (
                <a href={link.url} className="ilo--context-menu--link">
                  <span className="ilo--context-menu--label">{link.label}</span>
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
