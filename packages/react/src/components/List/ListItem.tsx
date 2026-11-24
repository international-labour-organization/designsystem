import { forwardRef, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type ListItemProps = HTMLAttributes<HTMLLIElement> & {
  /**
   * Specify the content of your ListItem.
   */
  children: ReactNode;

  /**
   * Specify an optional className to be added to your ListItem.
   */
  className?: string;
};

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, className, ...rest }, ref) => {
    const baseClass = "ilo--list--item";
    const listItemClasses = classNames(className, baseClass);

    return (
      <li className={listItemClasses} ref={ref} {...rest}>
        {children}
      </li>
    );
  }
);

export { ListItem };
