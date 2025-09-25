import { MainNavProps } from "../../components/Nav/Navigation.props";

const MainNavArgs: MainNavProps = {
  branding: {
    logo: {
      main: <img src="/logo_en_horizontal_white.svg" alt="Logo" />,
      drawer: <img src="/logo_en_horizontal_blue.svg" alt="Logo" />,
      mobile: <img src="/ilo-live-logo-en-light.png" alt="Logo" />,
    },
    onClick: () => {
      window.location.href = "https://ilo.org";
    },
    tag: {
      main: "Advancing social justice, promoting decent work",
      sub: "ILO is a specialized agency of the United Nations",
    },
  },
  widgets: {
    language: {
      language: "English",
      options: [
        {
          label: "Français",
          url: "https://ilo.org",
        },
        {
          label: "Español",
          url: "https://ilo.org",
        },
      ],
      label: "Language",
    },
    search: {
      type: "redirect",
      url: "https://ilo.org",
      label: "Search",
    },
  },
  menu: {
    labels: {
      more: "More",
      backToMenu: "Menu home",
    },
    items: [
      {
        label: "Menu Item 1",
        href: "https://ilo.org",
        isActive: true,
      },
      {
        label: "Menu Item 2",
        href: "https://ilo.org",
      },
      {
        label: "Menu Item 3",
        href: "https://ilo.org",
      },
      {
        label: "Menu Item 4",
        href: "https://ilo.org",
      },
      {
        label: "Menu Item 5",
        href: "https://ilo.org",
      },
      {
        label: "Menu Item 6",
        href: "https://ilo.org",
      },
      {
        label: "Menu Item 7",
        href: "https://ilo.org",
      },
      {
        label: "Menu Item 8",
        href: "https://ilo.org",
      },
      {
        label: "Menu Item 9",
        href: "https://ilo.org",
      },
      {
        label: "Menu Item 10",
        href: "https://ilo.org",
      },
      {
        label: "Menu Item 11",
        href: "https://ilo.org",
      },
      {
        label: "Menu Item 12",
        href: "https://ilo.org",
      },
    ],
  },
};

export { MainNavArgs };
