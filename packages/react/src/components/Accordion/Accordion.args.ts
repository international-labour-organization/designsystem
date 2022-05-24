import { AccordionProps } from "./Accordion.props";

const small: AccordionProps = {
  onButtonClick: e => {
    console.log(e.target);
  },
  allowMultipleExpanded: true,
  defaultAccordionsExpanded: ["s1", "s2"],
  size: "small",
  children: "",
};

const large: AccordionProps = {
  onButtonClick: e => {
    console.log(e.target);
  },
  allowMultipleExpanded: true,
  defaultAccordionsExpanded: ["l1", "l2"],
  size: "large",
  children: "",
};

/**
 * Sample prop definitions for Accordions's enumerable properties (imported in stories and tests).
 */
const AccordionArgs = {
  small,
  large,
};

export default AccordionArgs;
