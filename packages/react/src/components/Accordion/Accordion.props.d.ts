import { ReactNode, MouseEvent } from 'react';
export { default as AccordionItem } from './AccordionItem';
import { accordionSize, headingLevel } from '../../types';
import { getUpdatedItems } from "@ilo/utils";

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
   * FOR DESIGNERS
   * Specify whether the accordion represents a large or small variant, default size is small.
   */
  size?: accordionSize;

  /**
   * Specify the heading level that the accordion items, default level is h3.
   */
  headingLevel?: headingLevel;

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
  size?: accordionSize;
  headingLevel?: headingLevel;
}
