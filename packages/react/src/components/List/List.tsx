import classNames from "classnames";
import { FC } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ListProps } from "./List.props";

const List: FC<ListProps> = ({
  children,
  className,
  alignment = "default",
  ordered = "unstyled",
  title,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--list`;
  const unstyledClass = `${baseClass}__unstyled`;
  const horizontalClass = `${baseClass}__horizontal`;
  const titleClass = `${baseClass}--title`;

  const listClasses = classNames(className, baseClass, {
    [unstyledClass]: ordered === "unstyled",
    [horizontalClass]: alignment === "horizontal",
  });

  return (
    <div className={listClasses}>
      {title && <h2 className={titleClass}>{title}</h2>}
      {ordered && ordered === "ordered" ? (
        <ol>{children}</ol>
      ) : (
        <ul>{children}</ul>
      )}
    </div>
  );
};

export default List;
