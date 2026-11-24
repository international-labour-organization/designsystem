import {
  Children,
  Fragment,
  isValidElement,
  PropsWithChildren,
  ReactNode,
} from "react";

function flattenChildren(children: ReactNode): ReactNode[] {
  const flat: ReactNode[] = [];

  for (const child of Children.toArray(children)) {
    const isFragment =
      isValidElement<PropsWithChildren>(child) && child.type === Fragment;

    if (isFragment) {
      flat.push(...flattenChildren(child.props.children));
    } else {
      flat.push(child);
    }
  }

  return flat;
}

export { flattenChildren };
