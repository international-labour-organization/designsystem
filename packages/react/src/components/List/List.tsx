import { forwardRef, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import { useGlobalSettings } from "../../hooks";
import { DynamicHeading, TitleLevel } from "../DynamicHeading/DynamicHeading";

export type ListProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The content of the list
   */
  children: ReactNode;

  /**
   * Specify an optional className to be added to your list.
   */
  className?: string;

  /**
   * The alignment of the list items
   */
  alignment?: "default" | "horizontal";

  /**
   * The type of list
   */
  ordered?: "unstyled" | "ordered" | "unordered";

  /**
   * The title of the list
   */
  title?: string;

  /**
   * The level of the title
   */
  titleLevel?: Extract<TitleLevel, "h2" | "h3" | "h4" | "h5">;

  /**
   * The theme of the list
   */
  theme?: "light" | "dark";
};

const List = forwardRef<HTMLDivElement, ListProps>(
  (
    {
      children,
      className,
      alignment = "default",
      ordered = "unstyled",
      title,
      theme = "light",
      titleLevel = "h2",
      ...rest
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--list`;

    const listClasses = classNames(className, baseClass, {
      [`${baseClass}__unstyled`]: ordered === "unstyled",
      [`${baseClass}__horizontal`]: alignment === "horizontal",
      [`${baseClass}__theme__${theme}`]: theme,
    });

    return (
      <div className={listClasses} ref={ref} {...rest}>
        {title && (
          <DynamicHeading level={titleLevel} className={`${baseClass}--title`}>
            {title}
          </DynamicHeading>
        )}
        {ordered === "ordered" ? <ol>{children}</ol> : <ul>{children}</ul>}
      </div>
    );
  }
);

export { List };
