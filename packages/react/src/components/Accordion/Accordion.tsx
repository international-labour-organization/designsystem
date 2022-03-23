import React, { useState, useEffect, createContext, FC } from 'react';
import classNames from 'classnames';
import { getUpdatedItems } from '@ilo/utils';
import useGlobalSettings from '../../hooks/useGlobalSettings';
import { AccordionProps, AccordionContextProps } from './Accordion.props';

export const AccordionContext = createContext({} as AccordionContextProps);

const Accordion: FC<AccordionProps> = ({
  children,
  allowMultipleExpanded = false,
  onButtonClick,
  defaultAccordionsExpanded = [],
  size = 'small',
  headingLevel = 'h3',
  className,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--accordion`;
  const [activeItems, setActiveItems] = useState<string[]>([]);

  const accordionClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${size}`]: size,
  });

  useEffect(() => {
    const expandedOnLoad = allowMultipleExpanded ? defaultAccordionsExpanded : defaultAccordionsExpanded.length > 0 ? [defaultAccordionsExpanded[0]] : defaultAccordionsExpanded;
    setActiveItems(expandedOnLoad);
  }, [defaultAccordionsExpanded, allowMultipleExpanded]);

  return (
    <AccordionContext.Provider value={{
      activeItems,
      setActiveItems,
      getUpdatedItems,
      allowMultipleExpanded,
      onButtonClick,
      size,
      headingLevel,
    }}>
      <ul className={accordionClasses}>
        {children}
      </ul>
    </AccordionContext.Provider>
  );
};

export default Accordion;
