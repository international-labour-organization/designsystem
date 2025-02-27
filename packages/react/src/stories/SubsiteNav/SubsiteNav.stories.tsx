import { Meta, StoryObj } from "@storybook/react";
import { SubsiteNav, SubsiteNavProps } from "../../components/Nav";

const meta: Meta<typeof SubsiteNav> = {
  title: "Components/Navigation/SubsiteNav",
  component: SubsiteNav,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The SubsiteNav component displays a sub site navigation.`,
      },
    },
  },
};

const Default: StoryObj<SubsiteNavProps> = {
  args: {
    branding: {
      logo: <img src="/logo_en_horizontal_white.svg" alt="Logo" width={105} />,
      compactLogo: (
        <img src="/logo_en_horizontal_blue_dark.svg" alt="Logo" width={105} />
      ),
      name: "Subsite Name",
      onClick: () => {
        window.location.href = "https://ilo.org";
      },
    },
    widgets: {
      link: {
        label: "Go to main ILO website",
        handler: "https://ilo.org",
      },
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
          handler: "https://ilo.org",
          isActive: true,
        },
        {
          label: "Menu Item 2",
          handler: "https://ilo.org",
        },
        {
          label: "Menu Item 3",
          handler: "https://ilo.org",
        },
        {
          label: "Menu Item 4",
          handler: "https://ilo.org",
        },
        {
          label: "Menu Item 5",
          handler: "https://ilo.org",
        },
        {
          label: "Menu Item 6",
          handler: "https://ilo.org",
        },
        {
          label: "Menu Item 7",
          handler: "https://ilo.org",
        },
        {
          label: "Menu Item 8",
          handler: "https://ilo.org",
        },
        {
          label: "Menu Item 9",
          handler: "https://ilo.org",
        },
        {
          label: "Menu Item 10",
          handler: "https://ilo.org",
        },
        {
          label: "Menu Item 11",
          handler: "https://ilo.org",
        },
        {
          label: "Menu Item 12",
          handler: "https://ilo.org",
        },
      ],
    },
  },
};

export default meta;
export { Default };
