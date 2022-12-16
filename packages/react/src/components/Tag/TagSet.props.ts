import { Dispatch, ReactElement, SetStateAction } from "react";

export { default as TagSet } from "./TagSet";

export interface TagSetProps {
  /**
   * Allow multiple tags to be active at once
   */
  allowMultipleActive?: boolean;

  /**
   * Callback to onButtonClick event;
   */
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>, i: number) => any;

  /**
   * Specify the content of your Tag.
   */
  children?: ReactElement<TagSetProps> | ReactElement<TagSetProps>[];

  /**
   * Specify an optional className to be added to your accordion.
   */
  className?: string;

  /**
   * Default Tags that are active
   */
  defaultTagActive?: string[];
}

export interface TagSetContextProps {
  activeItems: string[];
  setActiveItems: Dispatch<SetStateAction<string[]>>;
  allowMultipleActive: boolean;
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>, i: number) => void;
}
