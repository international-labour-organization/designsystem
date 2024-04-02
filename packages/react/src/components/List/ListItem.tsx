import classNames from "classnames";
import { FC } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ListItemProps } from "./ListItem.props";

const ListItem: FC<ListItemProps> = ({ children, className, ...rest }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--list--item`;
  const listItemClasses = classNames(className, baseClass);
  return (
    <li className={listItemClasses} {...rest}>
      {children}
    </li>
  );
};

export default ListItem;
