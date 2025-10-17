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
      type: "input",
      field: {
        input: {
          type: "search",
          value: "",
          placeholder: "Search Field",
        },
      },
    },
  },
  menu: {
    labels: {
      more: "More",
      backToMenu: "Menu home",
    },
    items: [
      // Primary navigation items
      {
        label: "Topics",
        href: "https://www.ilo.org",
        isActive: true,
      },
      {
        label: "Countries",
        href: "https://www.ilo.org",
      },
      {
        label: "Standards",
        href: "https://www.ilo.org",
      },
      {
        label: "Statistics",
        href: "https://www.ilo.org",
      },
      {
        label: "About",
        href: "https://www.ilo.org",
      },
      // Secondary navigation items
      {
        label: "News",
        href: "https://www.ilo.org",
      },
      {
        label: "Meeting & Events",
        href: "https://www.ilo.org",
      },
      {
        label: "Publications",
        href: "https://www.ilo.org",
      },
      {
        label: "Projects",
        href: "https://www.ilo.org",
      },
      {
        label: "Partners",
        href: "https://www.ilo.org",
      },
      {
        label: "Industries & Sectors",
        href: "https://www.ilo.org",
      },
      {
        label: "About the ILO",
        href: "https://www.ilo.org",
      },
    ],
  },
};

export { MainNavArgs };
