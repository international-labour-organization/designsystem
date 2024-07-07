import React from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ContextMenuProps } from "./ContextMenu.props";

const ContextMenu = React.forwardRef<HTMLOListElement, ContextMenuProps>(
  ({ className, links }, ref) => {
    const { prefix } = useGlobalSettings();
    const baseClass = `${prefix}--context-menu`;
    const contextMenuClasses = classNames(className, {
      [baseClass]: true,
    });

    return (
      <ol className={contextMenuClasses} ref={ref}>
        {links &&
          links.map((link, i) => (
            <li
              className={`${baseClass}--item ${
                link.endsection ? "endsection" : ""
              }`}
              key={`${baseClass}--item-${i}`}
            >
              <a href={link.url} className={`${baseClass}--link`}>
                <span className={`${baseClass}--label`}>{link.label}</span>
              </a>
            </li>
          ))}
      </ol>
    );
  }
);

export default ContextMenu;
