import React, { FC, useContext, MouseEvent } from "react";
import classNames from "classnames";
import { Add24, Minus24 } from "@ilo/icons-react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { default as AccordionButtonProps } from "./AccordionButton.props";
import { AccordionContext } from "./Accordion";
import { AccordionItemContext } from "./AccordionItem";
import { Heading } from "../Heading";

const AccordionButton: FC<AccordionButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--accordion__button`;
  const {
    activeItems,
    setActiveItems,
    getUpdatedItems,
    allowMultipleExpanded,
    onButtonClick,
    headingLevel,
    size,
  } = useContext(AccordionContext);
  const { id } = useContext(AccordionItemContext);
  const open = activeItems.indexOf(id) > -1;

  const accordionButtonClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${size}`]: size,
  });

  /**
   * On click, get id of clicked item, and set that item in state to 'open', all others to 'closed'
   */
  const handleClick = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    setActiveItems(
      getUpdatedItems({ id, itemStatuses: activeItems, allowMultipleExpanded })
    );
    if (onButtonClick) {
      onButtonClick(e, id);
    }
  };

  return (
    <Heading level={headingLevel}>
      <button
        className={accordionButtonClasses}
        aria-expanded={open}
        onClick={(e) => handleClick(e, id)}
        aria-controls={`panel-${id}`}
        id={`button-${id}`}
        {...rest}
      >
        {children}
        {open ? <Add24 /> : <Minus24 />}
      </button>
    </Heading>
  );
};

export default AccordionButton;
