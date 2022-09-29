import { MouseEvent } from "react";
export { default as AccordionItem } from "./AccordionItem";
import { headingLevel } from "../../types";
import { getUpdatedItems } from "@ilo-org/utils";

export interface AccordionProps {
  /**
   * Specify the content of your Accordion.
   */
  children: ReactElement<AccordionItem> | Array<ReactElement<AccordionItem>>;

  /**
   * Callback to onButtonClick event;
   */
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>, i: any) => void;

  /**
   * Allow multiple accordions to be expanded at once, default value is false
   */
  allowMultipleExpanded?: boolean;

  /**
   * Default accordions expanded on first load
   */
  defaultAccordionsExpanded?: string[];

  /**
   * Specify an optional className to be added to your accordion.
   */
  className?: string;
}

export interface AccordionContextProps {
  activeItems: string[];
  getUpdatedItems: getUpdatedItems;
  setActiveItems: Dispatch<SetStateAction<string[]>>;
  allowMultipleExpanded: boolean;
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>, i: any) => void;
}
