import { ContextMenuProps } from "./ContextMenu.props";

const basic: ContextMenuProps = {
  links: [
    {
      label: "Link One",
      url: "http://www.google.com",
    },
    {
      label: "Link Two",
      url: "http://www.google.com",
    },
    {
      label: "Link Three",
      url: "http://www.google.com",
    },
    {
      label: "Link Four",
      url: "http://www.google.com",
    },
    {
      label: "Link Five Is Much Longer",
      url: "http://www.google.com",
    },
  ],
};

const withsection: ContextMenuProps = {
  links: [
    {
      label: "Link One",
      url: "http://www.google.com",
    },
    {
      label: "Link Two",
      url: "http://www.google.com",
    },
    {
      endsection: true,
      label: "Link Three Ends A Section",
      url: "http://www.google.com",
    },
    {
      label: "Link Four",
      url: "http://www.google.com",
    },
    {
      label: "Link Five Is Much Longer",
      url: "http://www.google.com",
    },
  ],
};

/**
 * Sample prop definitions for ContextMenus's enumerable properties (imported in stories and test)
 */
const ContextMenuArgs = {
  basic,
  withsection,
};

export default ContextMenuArgs;
