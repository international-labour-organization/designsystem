import { createContext } from "react";
import { AccordionContextProps } from "./Accordion.props";
import { AccordionItemContextProps } from "./AccordionItem.props";

export const AccordionContext = createContext({} as AccordionContextProps);

export const AccordionItemContext = createContext(
  {} as AccordionItemContextProps
);
