import { ReactNode } from 'react';

export interface AccordionItemContextProps {
  /**
   * The accordion item's unique id.
   */
  id: string;
}


export interface AccordionItemProps {
  /**
   * Specify the id of the accordion item.
   */
  id: string;

  /**
   * Specify the content of your Button.
   */
  children: ReactNode;

  /** 
   * Specify an optional className to be added to your Button.
   */
  className?: string;
}