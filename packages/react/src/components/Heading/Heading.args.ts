
import { HeadingProps } from './Heading.props';

const heading1: HeadingProps = {
  children: 'Heading 1',
  headingLevel: 'h1',
  color: 'blue'
};

const heading2: HeadingProps = {
  children: 'Heading 2',
  headingLevel: 'h2'
};

const heading3: HeadingProps = {
  children: 'Heading 3',
  headingLevel: 'h3'
};

const heading4: HeadingProps = {
  children: 'Heading 4',
  headingLevel: 'h4'
};

const heading5: HeadingProps = {
  children: 'Heading 5',
  headingLevel: 'h5'
};

const heading6: HeadingProps = {
  children: 'Heading 6',
  headingLevel: 'h6'
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
  heading6
};

export default HeadingArgs;