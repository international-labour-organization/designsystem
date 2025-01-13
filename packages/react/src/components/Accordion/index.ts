import { Accordion as AccordionCore } from "./Accordion";
import { AccordionItem } from "./AccordionItem";

const Accordion = Object.assign(AccordionCore, { Item: AccordionItem });

export { Accordion };
