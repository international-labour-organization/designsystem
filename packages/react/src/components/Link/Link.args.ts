import { LinkProps } from "./Link.props";

const light: LinkProps = {
  children: "",
  label: "",
  target: "",
  theme: "light",
  url: "",
};

const dark: LinkProps = {
  children: "",
  label: "",
  target: "",
  theme: "dark",
  url: "",
};

const footer: LinkProps = {
  children: "",
  label: "",
  target: "",
  theme: "footer",
  url: "",
};

/**
 * Sample prop definitions for Link's enumerable properties (imported in stories and tests).
 */
const LinkArgs = {
  light,
  dark,
  footer,
};

export default LinkArgs;
