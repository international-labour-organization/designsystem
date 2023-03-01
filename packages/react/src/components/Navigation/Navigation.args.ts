import { NavigationProps } from "./Navigation.props";
import ilo_logo_white from "@ilo-org/brand-assets/logo_en_horizontal_white.svg";

const basic: NavigationProps = {
  logo: ilo_logo_white,
  mobilelogo: ilo_logo_white,
  siteurl: "https://www.ilo.org/",
  tagline: {
    tag: "Advancing social justice, promoting decent work",
    small: "ILO is a specialized agency of the United Nations",
  },
  primarynav: {
    navlabel: "Primary Navigation",
    mobilecloselabel: "Close",
    items: [
      {
        label: "Topics",
        url: "https://www.ilo.org",
      },
      {
        label: "Countries",
        url: "https://www.ilo.org",
      },
      {
        label: "Standards",
        url: "https://www.ilo.org",
      },
      {
        label: "Statistics",
        url: "https://www.ilo.org",
      },
      {
        label: "About",
        url: "https://www.ilo.org",
      },
    ],
  },
  subnav: {
    navlabel: "Secondary Navigation",
    buttonlabel: "More",
    mobilecloselabel: "Close",
    mobilebacklabel: "Menu Home",
    items: [
      {
        label: "News",
        url: "https://www.ilo.org",
      },
      {
        label: "Meeting & Events",
        url: "https://www.ilo.org",
      },
      {
        label: "Publications",
        url: "https://www.ilo.org",
      },
      {
        label: "Projects",
        url: "https://www.ilo.org",
      },
      {
        label: "Partners",
        url: "https://www.ilo.org",
      },
      {
        label: "Industries & Sectors",
        url: "https://www.ilo.org",
      },
      {
        label: "About the ILO",
        url: "https://www.ilo.org",
      },
    ],
  },
  languagelabel: "English",
  menulabel: "Menu",
  menucloselabel: "Close",
  languagecontextmenu: {
    links: [
      {
        label: "Français",
        url: "https://www.ilo.org",
      },
      {
        label: "Español",
        url: "https://www.ilo.org",
      },
      {
        label: "中文",
        url: "https://www.ilo.org",
      },
      {
        label: "Русский",
        url: "https://www.ilo.org",
      },
    ],
  },
  searchlabel: "Search",
  searchfield: {
    action: "https://www.ilo.org",
    input: {
      label: "",
      helper: "",
      name: "text",
      placeholder: "Search Field",
      type: "text",
    },
  },
};

const NavigationArgs = { basic };

export default NavigationArgs;
