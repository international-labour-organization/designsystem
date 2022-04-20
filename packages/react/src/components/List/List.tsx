import {
  useState,
  useEffect,
  createContext,
  FC,
  ReactElement,
  Children,
} from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ListProps, ListContextProps } from "./List.props";

export const ListContext = createContext({} as ListContextProps);

const List: FC<ListProps> = ({
  children,
  className,
  horizontal,
  ordered,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--list`;
  const [activeItems, setActiveItems] = useState<string[]>([]);

  const listClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${horizontal}`]: horizontal,
    [`${baseClass}--${ordered}`]: ordered,
  });

  return (
    <ListContext.Provider
      value={{
        activeItems,
      }}
    >
      {ordered && <ol className={listClasses}>{children}</ol>}
      {!ordered && <ul className={listClasses}>{children}</ul>}
    </ListContext.Provider>
  );
};

export default List;
