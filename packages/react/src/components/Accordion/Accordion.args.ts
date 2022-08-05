import { AccordionProps } from "./Accordion.props";

const large: AccordionProps = {
  onButtonClick: (e) => {
    console.log(e.target);
  },
  allowMultipleExpanded: true,
  defaultAccordionsExpanded: ["l1", "l2"],
  children: "",
};

/**
 * Sample prop definitions for Accordions's enumerable properties (imported in stories and tests).
 */
const AccordionArgs = {
  large,
};

export default AccordionArgs;
