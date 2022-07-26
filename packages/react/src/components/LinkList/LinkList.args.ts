import { LinkListProps } from "./LinkList.props";

const basic: LinkListProps = {
  headline: "Link List Headline",
  linkgroup: [
    {
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
          url: "http://www.google.com",
        },
        {
          indented: true,
          label: "Link Two",
          url: "http://www.google.com",
        },
        {
          indented: true,
          label: "Link Three",
          url: "http://www.google.com",
        },
        {
          indented: true,
          label: "Link Four",
          url: "http://www.google.com",
        },
        {
          label: "Link Five Is Much Longer",
          url: "http://www.google.com",
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
    },
    {
      headline: "Section 2 Headline",
      links: [
        {
          label: "Section 2 Link One",
          url: "http://www.google.com",
        },
        {
          label: "Section 2 Link Two",
          url: "http://www.google.com",
        },
        {
          label: "Section 2 Link Three",
          url: "http://www.google.com",
        },
        {
          label: "Section 2 Link Four",
          url: "http://www.google.com",
        },
        {
          label: "Section 2 Link Five",
          url: "http://www.google.com",
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
          indented: true,
          label: "Link Five Is Much Longer",
          url: "http://www.google.com",
        },
      ],
    },
    {
      headline: "Section 2 Headline",
      links: [
        {
          label: "Section 2 Link One",
          url: "http://www.google.com",
        },
        {
          indented: true,
          label: "Section 2 Link Two",
          url: "http://www.google.com",
        },
        {
          indented: true,
          label: "Section 2 Link Three",
          url: "http://www.google.com",
        },
        {
          indented: true,
          label: "Section 2 Link Four",
          url: "http://www.google.com",
        },
        {
          label: "Section 2 Link Five",
          url: "http://www.google.com",
        },
      ],
    },
  ],
};

/**
 * Sample prop definitions for LinkLists's enumerable properties (imported in stories and test)
 */
const LinkListArgs = {
  basic,
  withindented,
  withsections,
  withsectionsindented,
};

export default LinkListArgs;
