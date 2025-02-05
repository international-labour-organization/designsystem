import { List as ListCore, ListProps } from "./List";
import { ListItem, ListItemProps } from "./ListItem";

const List = Object.assign(ListCore, { Item: ListItem });

export { List };
export type { ListProps, ListItemProps };
