import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ContextMenuProps } from "./ContextMenu.props";

const ContextMenu: FC<ContextMenuProps> = ({ className, links }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--context-menu`;
  const contextMenuClasses = classNames(className, {
    [baseClass]: true,
  });

  return (
    <ul className={contextMenuClasses}>
      {links &&
        links.map((link, i) => (
          <li
            className={`${baseClass}--item ${
              link.endsection ? "endsection" : ""
            }`}
            key={`${baseClass}--item-${i}`}
          >
            <a href={link.url}>
              <span>{link.label}</span>
            </a>
          </li>
        ))}
    </ul>
  );
};

export default ContextMenu;
