import { forwardRef, ReactNode, useContext } from "react";
import { AccordionContext } from "./Accordion";
import { useGlobalSettings } from "../../hooks";
import classNames from "classnames";

export type AccordionItemProps = {
  /**
   * The value of the accordion item
   */
  value: string;

  /**
   * The label of the accordion item
   */
  label: string;

  className?: string;

  children: ReactNode;
};

const AccordionItem = forwardRef<HTMLLIElement, AccordionItemProps>(
  ({ value, children, label, className }, ref) => {
    const { prefix } = useGlobalSettings();
    const context = useContext(AccordionContext);

    if (!context) {
      throw new Error("AccordionItem must be used within an Accordion");
    }
    const { value: selectedValue, onChange, multiple, scrollable } = context;
    const isSelected = multiple
      ? (selectedValue as string[]).includes(value)
      : selectedValue === value;

    function handleClick() {
      if (multiple) {
        const selected = selectedValue as string[];
        const newValue = isSelected
          ? selected.filter((v) => v !== value)
          : [...selected, value];

        onChange(newValue);
      } else {
        onChange(isSelected ? "" : value);
      }
    }

    return (
      <li
        ref={ref}
        className={classNames(`${prefix}--accordion-item`, className)}
      >
        <div className={`${prefix}--h3`}></div>
        <button
          onClick={handleClick}
          className={`${prefix}--accordion--button ${prefix}--accordion--button__${context.size}`}
          aria-expanded={isSelected}
          aria-controls={value}
        >
          <span className={`${prefix}--accordion--label`}>{label}</span>
          <span className={`${prefix}--accordion--icon`}></span>
        </button>
        <div
          className={classNames(`${prefix}--accordion--panel`, {
            [`${prefix}--accordion--panel__open`]: isSelected,
            [`${prefix}--accordion--panel__scroll`]: scrollable,
          })}
          role="region"
          aria-hidden={!isSelected}
        >
          <div className={`${prefix}--accordion--innerpanel`}>{children}</div>
        </div>
      </li>
    );
  }
);

export { AccordionItem };
