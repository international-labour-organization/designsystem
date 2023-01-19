import classNames from "classnames";
import { FC } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { AccordionItemContext } from "./AccordionCtx";
import { AccordionItemProps } from "./AccordionItem.props";

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  id,
  className,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--accordion--item`;
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
