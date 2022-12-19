import { createContext } from "react";
import { ListContextProps } from "./List.props";
import { ListItemContextProps } from "./ListItem.props";

export const ListContext = createContext({} as ListContextProps);

export const ListItemContext = createContext({} as ListItemContextProps);
