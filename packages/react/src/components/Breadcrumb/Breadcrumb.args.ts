import { BreadcrumbProps } from "./Breadcrumb.props";

const basic: BreadcrumbProps = {
  buttonLabel: "More Links",
  links: [
    {
      label: "Link One",
      url: "https://www.ilo.org/",
    },
    {
      label: "Link Two",
      url: "https://www.ilo.org/",
    },
    {
      label: "Link Three",
      url: "https://www.ilo.org/",
    },
    {
      label: "Link Four",
      url: "https://www.ilo.org/",
    },
  ],
};

const fiveLinks: BreadcrumbProps = {
  buttonLabel: "More Links",
  links: [
    {
      label: "Link One",
      url: "https://www.ilo.org/",
    },
    {
      label: "Link Two",
      url: "https://www.ilo.org/",
    },
    {
      label: "Link Three",
      url: "https://www.ilo.org/",
    },
    {
      label: "Link Four",
      url: "https://www.ilo.org/",
    },
    {
      label: "Link Five",
      url: "https://www.ilo.org/",
    },
  ],
};

const BreadcrumbArgs = { basic, fiveLinks };

export default BreadcrumbArgs;
