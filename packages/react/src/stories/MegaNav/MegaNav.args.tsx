import { MegaNavProps } from "../../components/MegaNav";

const MegaNavArgs: Omit<MegaNavProps, "children"> = {
  branding: {
    href: "#",
    label: "International Labour Organization",
    logo: {
      main: <img src="/logo_en_horizontal_white.svg" alt="" />,
      mobile: <img src="/logo_en_horizontal_white.svg" alt="" />,
      drawer: <img src="/logo_en_horizontal_blue.svg" alt="" />,
    },
    tag: {
      main: "Advancing social justice, promoting decent work",
      sub: "ILO is a specialized agency of the United Nations",
    },
  },
  widgets: {
    language: {
      language: "English",
      label: "Language",
      options: [
        { label: "Français", url: "#fr" },
        { label: "Español", url: "#es" },
      ],
    },
    search: {
      field: {
        input: {
          placeholder: "Search for anything...",
        },
      },
    },
  },
  labels: {
    nav: "Main",
    more: "More",
    menu: "Open navigation",
    back: "Menu home",
    close: "Close navigation",
    overview: "Overview",
    search: "Search",
  },
};

export { MegaNavArgs };
