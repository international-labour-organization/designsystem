import {
  useState,
  useEffect,
  createContext,
  FC,
  ReactElement,
  Children,
} from "react";
import classNames from "classnames";
import { getUpdatedItems } from "@ilo-org/utils";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { AccordionProps, AccordionContextProps } from "./Accordion.props";
import { checkArrayDuplicates } from "../../utils/checkArrayDuplicates";

export const AccordionContext = createContext({} as AccordionContextProps);

const Accordion: FC<AccordionProps> = ({
  children,
  allowMultipleExpanded = false,
  onButtonClick,
  defaultAccordionsExpanded = [],
  className,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--accordion`;
  const [activeItems, setActiveItems] = useState<string[]>([]);

  const accordionClasses = classNames(className, {
    [baseClass]: true,
  });

  const defaultAccordionsExpandedString = JSON.stringify(
    defaultAccordionsExpanded
  );

  useEffect(() => {
    const expandedOnLoad = allowMultipleExpanded
      ? defaultAccordionsExpanded
      : defaultAccordionsExpanded.length > 0
      ? [defaultAccordionsExpanded[0]]
      : defaultAccordionsExpanded;
    setActiveItems(expandedOnLoad);
  }, [defaultAccordionsExpandedString, allowMultipleExpanded]); //eslint-disable-line react-hooks/exhaustive-deps

  if (children) {
    const ids: string[] = [];
    Children.forEach(children, (child: ReactElement) => {
      ids.push(child.props.id);
    });
    if (checkArrayDuplicates(ids)) {
      console.warn("Warning: Accordion items must have unique ids.");
    }
  }

  return (
    <AccordionContext.Provider
      value={{
        activeItems,
        setActiveItems,
        getUpdatedItems,
        allowMultipleExpanded,
        onButtonClick,
      }}
    >
      <ul className={accordionClasses}>{children}</ul>
    </AccordionContext.Provider>
  );
};

export default Accordion;
