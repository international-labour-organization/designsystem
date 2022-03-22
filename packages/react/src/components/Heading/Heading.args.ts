import { HeadingProps } from "./Heading.props";

const heading1: HeadingProps = {
  children: "Heading 1",
  level: "h1",
  type: "actionable",
};

const heading2: HeadingProps = {
  children: "Heading 2",
  level: "h2",
};

const heading3: HeadingProps = {
  children: "Heading 3",
  level: "h3",
};

const heading4: HeadingProps = {
  children: "Heading 4",
  level: "h4",
};

const heading5: HeadingProps = {
  children: "Heading 5",
  level: "h5",
};

const heading6: HeadingProps = {
  children: "Heading 6",
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
