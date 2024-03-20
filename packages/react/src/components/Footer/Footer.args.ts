import { FooterProps } from "./Footer.props";
import ilo_logo_white from "@ilo-org/brand-assets/logo_en_horizontal_white.svg";
import { darkArgs as socialMediaArgs } from "../SocialMedia/SocialMedia.args";

const basic: FooterProps = {
  className: "footer",
  logo: ilo_logo_white,
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
          label: "Contact us",
          url: "https://www.ilo.org",
        },
        {
          label: "Contact us",
          url: "https://www.ilo.org",
        },
        {
          label: "Contact us",
          url: "https://www.ilo.org",
        },
      ],
    },
  ],
  socialmedia: socialMediaArgs,
  subscribe: {
    label: "Subscribe for updates",
    url: "https://www.ilo.org",
  },
  legal: "© 1996-2023 International Labour Organization (ILO)",
  secondarylinks: [
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
      label: "Link Five",
      url: "https://www.ilo.org",
    },
    {
      label: "Link Six",
      url: "https://www.ilo.org",
    },
  ],
  anchorlink: {
    label: "Back to Top",
    url: "#anchor",
  },
};

const FooterArgs = { basic };

export default FooterArgs;
