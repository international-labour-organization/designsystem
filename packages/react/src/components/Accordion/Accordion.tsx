import { getUpdatedItems } from "@ilo-org/utils";
import classNames from "classnames";
import { Children, FC, ReactElement, useEffect, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { checkArrayDuplicates } from "../../utils/checkArrayDuplicates";
import { AccordionProps } from "./Accordion.props";
import { AccordionContext } from "./AccordionCtx";

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
  }, [defaultAccordionsExpandedString, allowMultipleExpanded]);

  if (children) {
    const ids: string[] = [];
    Children.forEach(children, (child: ReactElement) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
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
