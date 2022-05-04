import { FC, createContext } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ListItemProps, ListItemContextProps } from "./ListItem.props";

export const ListItemContext = createContext({} as ListItemContextProps);

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
