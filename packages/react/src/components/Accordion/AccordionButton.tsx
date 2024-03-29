import classNames from "classnames";
import { FC, MouseEvent, useContext } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { default as AccordionButtonProps } from "./AccordionButton.props";
import { AccordionContext, AccordionItemContext } from "./AccordionCtx";

const AccordionButton: FC<AccordionButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--accordion--button`;

  const {
    activeItems,
    setActiveItems,
    getUpdatedItems,
    allowMultipleExpanded,
    onButtonClick,
  } = useContext(AccordionContext);
  const { id } = useContext(AccordionItemContext);
  const open = activeItems.indexOf(id) > -1;

  const accordionButtonClasses = classNames(className, {
    [baseClass]: true,
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
    e.currentTarget.blur();
  };

  return (
    <div className={`${prefix}--h3`}>
      <button
        className={accordionButtonClasses}
        aria-expanded={open}
        onClick={(e) => handleClick(e, id)}
        aria-controls={`panel-${id}`}
        id={`button-${id}`}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default AccordionButton;
