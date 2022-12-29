import { ContextMenuProps } from "./ContextMenu.props";

const basic: ContextMenuProps = {
  links: [
    {
      label: "Link One",
      url: "https://www.ilo.org",
    },
    {
      label: "Link Two",
      url: "https://www.ilo.org",
    },
    {
      label: "Link Three",
      url: "https://www.ilo.org",
    },
    {
      label: "Link Four",
      url: "https://www.ilo.org",
    },
    {
      label: "Link Five Is Much Longer",
      url: "https://www.ilo.org",
    },
  ],
};

const withsection: ContextMenuProps = {
  links: [
    {
      label: "Link One",
      url: "https://www.ilo.org",
    },
    {
      label: "Link Two",
      url: "https://www.ilo.org",
    },
    {
      endsection: true,
      label: "Link Three Ends A Section",
      url: "https://www.ilo.org",
    },
    {
      label: "Link Four",
      url: "https://www.ilo.org",
    },
    {
      label: "Link Five Is Much Longer",
      url: "https://www.ilo.org",
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
