import {
  createContext,
  forwardRef,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { useGlobalSettings } from "../../hooks";
import classNames from "classnames";

export type AccordionProps = {
  /**
   * The size of the accordion default is small
   */
  size?: "small" | "large";

  /**
   * Whether or not multiple accordion items can be expanded at the same time default is true
   */
  multiple?: boolean;

  /**
   * The value of the accordion, when multiple is true this should be an array of strings
   */
  value?: string | string[];

  /**
   * The callback function that is called when the value of the accordion changes
   */
  onChange?: (value: string | string[]) => void;

  /**
   * Whether or not the accordion panel should be scrollable default is false
   */
  scrollable?: boolean;

  className?: string;

  children: ReactNode;
};

type AccordionContextValue = {
  size: "small" | "large";
  multiple: boolean;
  value: string | string[];
  scrollable?: boolean;
  onChange: (value: string | string[]) => void;
};

const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined
);

const Accordion = forwardRef<HTMLUListElement, AccordionProps>(
  (
    {
      size = "small",
      scrollable = false,
      multiple = true,
      value: controlledValue,
      onChange,
      children,
      className,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const [value, setValue] = useState<string | string[]>(
      controlledValue || multiple ? [] : ""
    );

    const handleChange = useCallback(
      (updated: string | string[]) => {
        if (onChange) {
          onChange(updated);
        } else {
          setValue(updated);
        }
      },
      [onChange, setValue]
    );

    return (
      <AccordionContext.Provider
        value={{ size, multiple, scrollable, value, onChange: handleChange }}
      >
        <ul ref={ref} className={classNames(`${prefix}--accordion`, className)}>
          {children}
        </ul>
      </AccordionContext.Provider>
    );
  }
);

export { AccordionContext, Accordion };
