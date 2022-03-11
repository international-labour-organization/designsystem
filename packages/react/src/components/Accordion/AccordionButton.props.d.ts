import { ReactNode, MouseEvent } from 'react';

export default interface AccordionButtonProps {
  /**
   * Specify the content of your Button.
   */
  children: ReactNode;

  /** 
   * Specify an optional className to be added to your Button.
   */
  className?: string;
}