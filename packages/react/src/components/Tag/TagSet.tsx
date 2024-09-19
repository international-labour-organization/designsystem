/* @ESLINT-DEBT During new eslint refactoring this file was omitted because of heavy type refactoring */
/* eslint-disable */
import classNames from "classnames";
import { Children, FC, ReactElement, useEffect, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { checkArrayDuplicates } from "../../utils/checkArrayDuplicates";
import { TagSetContext } from "./TagCtx";
import { TagSetProps } from "./TagSet.props";

const TagSet: FC<TagSetProps> = ({
  className,
  children,
  onButtonClick,
  defaultTagActive = [],
  allowMultipleActive = true,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--tag-set`;
  const [activeItems, setActiveItems] = useState<string[]>([]);

  const defaultTagActiveString = JSON.stringify(defaultTagActive);

  useEffect(() => {
    const tagOnLoad = allowMultipleActive
      ? defaultTagActive
      : defaultTagActive.length > 0
        ? [defaultTagActive[0]]
        : defaultTagActive;
    setActiveItems(tagOnLoad);
  }, [defaultTagActiveString, allowMultipleActive]);

  if (children) {
    const ids: string[] = [];
    Children.forEach(children, (child: ReactElement) => {
      ids.push(child.props.id);
    });
    if (checkArrayDuplicates(ids)) {
      console.warn("Warning: Tags must have unique ids.");
    }
  }

  const tagClasses = classNames(className, {
    [baseClass]: true,
  });

  return (
    <TagSetContext.Provider
      value={{
        activeItems,
        setActiveItems,
        allowMultipleActive,
        onButtonClick,
      }}
    >
      <ul className={tagClasses} {...rest}>
        {children}
      </ul>
    </TagSetContext.Provider>
  );
};

export default TagSet;
