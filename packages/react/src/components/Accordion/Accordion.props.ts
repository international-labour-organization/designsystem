import { Dispatch, MouseEvent, ReactElement, SetStateAction } from "react";
export { default as AccordionItem } from "./AccordionItem";
import { getUpdatedItems } from "@ilo-org/utils";
import { AccordionItemProps } from "./AccordionItem.props";

export interface AccordionProps {
  /**
   * Specify the content of your Accordion.
   */
  children?:
    | ReactElement<AccordionItemProps>
    | Array<ReactElement<AccordionItemProps>>;

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
  getUpdatedItems: typeof getUpdatedItems;
  setActiveItems: Dispatch<SetStateAction<string[]>>;
  allowMultipleExpanded: boolean;
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>, i: any) => void;
}
