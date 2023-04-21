import { LocalNavProps } from "./LocalNav.props";
import ilo_logo_white from "@ilo-org/brand-assets/logo_en_horizontal_white.svg";

const basic: LocalNavProps = {
  background: "#960A55",
  logo: {
    src: ilo_logo_white,
    alt: "ILO Voices Logo",
    subbrand: "Voices",
    theme: "dark",
  },
  primarynav: {
    navlabel: "Primary Nav Menu",
    mobilecloselabel: "Close",
    items: [
      {
        label: "Menu Item 1",
        url: "https://www.ilo.org",
      },
      {
        label: "Menu Item 2",
        url: "https://www.ilo.org",
      },
      {
        label: "Menu Item 3",
        url: "https://www.ilo.org",
      },
      {
        label: "Menu Item 4",
        url: "https://www.ilo.org",
      },
    ],
  },
  mainlink: {
    label: "Go to main website",
    url: "https://www.ilo.org",
  },
  languagelabel: "English",
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
};

const LocalNavArgs = { basic };

export default LocalNavArgs;
