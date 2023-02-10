import { FooterProps } from "./Footer.props";
import ilo_logo_white from "@ilo-org/brand-assets/logo_en_horizontal_white.svg";

const basic: FooterProps = {
  logo: ilo_logo_white,
  /*logo: {
    alt: "ILO Logo EN-White",
    className: "storybook",
    url: [
      {
        breakpoint: 0,
        src: ilo_logo_white,
      },
      {
        breakpoint: 768,
        src: ilo_logo_white,
      },
    ],
  },*/
  tagline: "Advancing social justice, promoting decent work",
  subtagline: "ILO is a specialized agency of the United Nations",
  address: [
    "International Labour Organization",
    "4 route des Morillons",
    "CH-1211 Genève 22",
    "Switzerland",
  ],
  linkgroup: [
    {
      links: [
        {
          label: "Link One",
          url: "https://www.cnn.com",
        },
        {
          label: "Link Two",
          url: "https://www.bing.com",
        },
        {
          label: "Link Three",
          url: "https://www.yahoo.com",
        },
        {
          label: "Link Four",
          url: "https://www.askjeeves.com",
        },
        {
          label: "Link Five",
          url: "https://www.duckduckgo.com",
        },
        {
          label: "Link Six",
          url: "https://www.google.com",
        },
      ],
    },
  ],
  socials: {
    headline: "Social Links Headline",
    links: [
      {
        type: "instagram",
        url: "https://www.instagram.com/",
      },
      {
        type: "facebook",
        url: "https://www.facebook.com/",
      },
      {
        type: "twitter",
        url: "https://twitter.com/",
      },
      {
        type: "youtube",
        url: "https://youtube.com/",
      },
    ],
  },
  subscribe: {
    label: "Subscribe",
    url: "https://www.ilo.org",
  },
  legal: "© 1996-2022 International Labour Organization (ILO)",
  secondarylinks: [
    {
      label: "Link One",
      url: "https://www.cnn.com",
    },
    {
      label: "Link Two",
      url: "https://www.bing.com",
    },
    {
      label: "Link Three",
      url: "https://www.yahoo.com",
    },
    {
      label: "Link Four",
      url: "https://www.askjeeves.com",
    },
    {
      label: "Link Five",
      url: "https://www.duckduckgo.com",
    },
    {
      label: "Link Six",
      url: "https://www.google.com",
    },
  ],
  anchorlink: {
    label: "Back to Top",
    url: "#anchor",
  },
};

const FooterArgs = { basic };

export default FooterArgs;
