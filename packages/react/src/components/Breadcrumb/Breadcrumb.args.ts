import { BreadcrumbProps } from "./Breadcrumb.props";

const basic: BreadcrumbProps = {
  home: {
    indented: false,
    label: "Home",
    url: "/",
  },
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

const BreadcrumbArgs = { basic };

export default BreadcrumbArgs;
