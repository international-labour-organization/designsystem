import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { AnchorLink, TableOfContentsProps } from "./TableOfContents.props";

const TableOfContents: FC<TableOfContentsProps> = ({ className, items }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--table-of-contents`;

  const TableOfContentsClasses = classNames(className, {
    [baseClass]: true,
  });

  return (
    <nav className={TableOfContentsClasses}>
      <ul className={`${baseClass}--list`}>
        {items &&
          items.map((item: AnchorLink, index: number) => {
            return (
              <li className={`${baseClass}--list--item`} key={index}>
                <a className={`${baseClass}--link`} href={item.href}>
                  {item.label}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
