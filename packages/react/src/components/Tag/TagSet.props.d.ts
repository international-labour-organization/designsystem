export { default as TagSet } from "./TagSet";

export interface TagSetProps {
  /**
   * Allow multiple tags to be active at once
   */
  allowMultipleActive?: boolean;

  /**
   * Callback to onButtonClick event;
   */
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>, i: any) => void;

  /**
   * Specify the content of your Tag.
   */
  children: ReactElement<TagSet> | Array<ReactElement<TagSet>>;

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
  getUpdatedItems: getUpdatedItems;
  setActiveItems: Dispatch<SetStateAction<string[]>>;
  allowMultipleActive: boolean;
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>, i: any) => void;
}
