import classNames from "classnames";
import { FC } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ListItemContext } from "./ListCtx";
import { ListItemProps } from "./ListItem.props";

const ListItem: FC<ListItemProps> = ({ children, id, className, ...rest }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--list__item`;
  const listItemClasses = classNames(className, {
    [baseClass]: true,
  });
  return (
    <ListItemContext.Provider value={{ id }}>
      <li className={listItemClasses} {...rest}>
        {children}
      </li>
    </ListItemContext.Provider>
  );
};

export default ListItem;
