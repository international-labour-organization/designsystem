import React from "react";
import { FC, createContext } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import {
  AccordionItemProps,
  AccordionItemContextProps,
} from "./AccordionItem.props";

export const AccordionItemContext = createContext(
  {} as AccordionItemContextProps
);

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  id,
  className,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--accordion__item`;
  const accordionItemClasses = classNames(className, {
    [baseClass]: true,
  });
  return (
    <AccordionItemContext.Provider value={{ id }}>
      <li className={accordionItemClasses} {...rest}>
        {children}
      </li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
