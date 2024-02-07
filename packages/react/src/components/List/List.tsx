import classNames from "classnames";
import { FC, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ListProps } from "./List.props";
import { ListContext } from "./ListCtx";

const List: FC<ListProps> = ({
  children,
  className,
  alignment,
  ordered,
  title,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--list`;
  const [activeItems] = useState<string[]>([]);

  const listClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${alignment}`]: alignment,
    [`${baseClass}--${ordered}`]: true,
  });

  return (
    <ListContext.Provider
      value={{
        activeItems,
      }}
    >
      <div className={listClasses}>
        {title && <h5 className={`${baseClass}__title`}>{title}</h5>}
        {ordered && ordered === "ordered" && <ol>{children}</ol>}
        {ordered && ordered !== "ordered" && (
          <ul className={`${baseClass}--${alignment}`}>{children}</ul>
        )}
      </div>
    </ListContext.Provider>
  );
};

export default List;
