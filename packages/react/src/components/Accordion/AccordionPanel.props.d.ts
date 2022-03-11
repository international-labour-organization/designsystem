import { ReactNode} from 'react';

export default interface AccordionPanelProps {
  /**
   * Specify the content of your Button.
   */
  children: ReactNode;

  /** 
   * Specify an optional className to be added to your Button.
   */
  className?: string;

  /**
   * Duration of the collapse animation in milliseconds, to ensure that
   * finishing callbacks are fired even if the original browser transition end
   * events are canceled
   */
  timeout?: number;
}