import classNames from "classnames";
import { FC, useContext, useLayoutEffect, useRef, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { AccordionContext } from "./Accordion";
import { AccordionItemContext } from "./AccordionItem";
import { default as AccordionPanelProps } from "./AccordionPanel.props";

const AccordionPanel: FC<AccordionPanelProps> = ({
  children,
  className,
  timeout = 600,
  ...rest
}) => {
  const { activeItems } = useContext(AccordionContext);
  const { id } = useContext(AccordionItemContext);
  const [panelHeight, setPanelHeight] = useState(0);
  const open = activeItems.indexOf(id) > -1;
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--accordion--panel`;

  const accordionaPanelClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--open`]: open,
  });

  const ref = useRef<HTMLInputElement>();

  useLayoutEffect(() => {
    ref.current && setPanelHeight(ref.current.scrollHeight);
  });

  return (
    <div
      className={accordionaPanelClasses}
      id={`panel-${id}`}
      aria-labelledby={`button-${id}`}
      role="region"
      ref={ref as any}
      style={{ ["--height" as any]: `${panelHeight}px` }}
      {...rest}
    >
      <div className={`${prefix}--accordion--innerpanel`}>{children}</div>
    </div>
  );
};

export default AccordionPanel;
