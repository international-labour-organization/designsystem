import React from "react";
import { FC, useContext } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { default as AccordionPanelProps } from "./AccordionPanel.props";
import { AccordionContext } from "./Accordion";
import { AccordionItemContext } from "./AccordionItem";
import { Collapse } from "../Collapse";

const AccordionPanel: FC<AccordionPanelProps> = ({
  children,
  className,
  timeout = 600,
  ...rest
}) => {
  const { activeItems } = useContext(AccordionContext);
  const { id } = useContext(AccordionItemContext);
  const open = activeItems.indexOf(id) > -1;
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--accordion__panel`;

  const accordionaPanelClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--open`]: open,
  });

  return (
    <Collapse panelIn={open} dimension="height" timeout={timeout}>
      <div
        className={accordionaPanelClasses}
        id={`panel-${id}`}
        aria-labelledby={`button-${id}`}
        role="region"
        {...rest}
      >
        {children}
      </div>
    </Collapse>
  );
};

export default AccordionPanel;
