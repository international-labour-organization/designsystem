import { LinkProps } from "./Link.props";

const light: LinkProps = {
  children: '',
  label: '',
  theme: 'light',
  url: '',
};

const dark: LinkProps = {
  children: '',
  label: '',
  theme: 'dark',
  url: '',
};

/**
 * Sample prop definitions for Link's enumerable properties (imported in stories and tests).
 */
const LinkArgs = {
  light,
  dark,
};

export default LinkArgs;