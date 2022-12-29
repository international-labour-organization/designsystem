import { HeadingProps } from "./Heading.props";

const text =
  "The ILO brings together governments, employers and workers to set labour standards and promote decent work";

const heading1: HeadingProps = {
  children: text,
  level: "h1",
  type: "actionable",
};

const heading2: HeadingProps = {
  children: text,
  level: "h2",
};

const heading3: HeadingProps = {
  children: text,
  level: "h3",
};

const heading4: HeadingProps = {
  children: text,
  level: "h4",
};

const heading5: HeadingProps = {
  children: text,
  level: "h5",
};

const heading6: HeadingProps = {
  children: text,
  level: "h6",
};

/**
 * Sample prop definitions for Headings's enumerable properties (imported in stories and test)
 */
const HeadingArgs = {
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
};

export default HeadingArgs;
