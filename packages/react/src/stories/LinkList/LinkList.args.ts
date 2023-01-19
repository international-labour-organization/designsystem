import { LinkListProps } from "../../components/LinkList/LinkList.props";

const basic: LinkListProps = {
  headline: "Link List Headline",
  linkgroup: [
    {
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
    },
  ],
};

const withindented: LinkListProps = {
  headline: "Link List Headline",
  linkgroup: [
    {
      links: [
        {
          label: "Link One",
          url: "https://www.ilo.org",
        },
        {
          indented: true,
          label: "Link Two",
          url: "https://www.ilo.org",
        },
        {
          indented: true,
          label: "Link Three",
          url: "https://www.ilo.org",
        },
        {
          indented: true,
          label: "Link Four",
          url: "https://www.ilo.org",
        },
        {
          label: "Link Five Is Much Longer",
          url: "https://www.ilo.org",
        },
      ],
    },
  ],
};

const withsections: LinkListProps = {
  headline: "Link List Headline",
  linkgroup: [
    {
      headline: "Section Headline",
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
    },
    {
      headline: "Section 2 Headline",
      links: [
        {
          label: "Section 2 Link One",
          url: "https://www.ilo.org",
        },
        {
          label: "Section 2 Link Two",
          url: "https://www.ilo.org",
        },
        {
          label: "Section 2 Link Three",
          url: "https://www.ilo.org",
        },
        {
          label: "Section 2 Link Four",
          url: "https://www.ilo.org",
        },
        {
          label: "Section 2 Link Five",
          url: "https://www.ilo.org",
        },
      ],
    },
  ],
};

const withsectionsindented: LinkListProps = {
  headline: "Link List Headline",
  linkgroup: [
    {
      headline: "Section Headline",
      links: [
        {
          indented: true,
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
          indented: true,
          label: "Link Five Is Much Longer",
          url: "https://www.ilo.org",
        },
      ],
    },
    {
      headline: "Section 2 Headline",
      links: [
        {
          label: "Section 2 Link One",
          url: "https://www.ilo.org",
        },
        {
          indented: true,
          label: "Section 2 Link Two",
          url: "https://www.ilo.org",
        },
        {
          indented: true,
          label: "Section 2 Link Three",
          url: "https://www.ilo.org",
        },
        {
          indented: true,
          label: "Section 2 Link Four",
          url: "https://www.ilo.org",
        },
        {
          label: "Section 2 Link Five",
          url: "https://www.ilo.org",
        },
      ],
    },
  ],
};

const LinkListArgs = {
  basic,
  withindented,
  withsections,
  withsectionsindented,
};

export default LinkListArgs;
