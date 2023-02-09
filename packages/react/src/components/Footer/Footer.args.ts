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
  socials: [
    {
      label: "Facebook",
      url: "https://www.facebook.com/",
      icon: "facebook",
    },
  ],
  subscribe: {
    label: "Subscribe",
    url: "http://google.com",
  },
  legal: "1996-2023 International Labour Organization (ILO)",
  secondarylinks: [],
  anchorlink: {
    label: "Link One",
    url: "http://www.google.com",
  },
};

const FooterArgs = { basic };

export default FooterArgs;
