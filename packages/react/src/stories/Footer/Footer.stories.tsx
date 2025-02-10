import { Meta, StoryObj } from "@storybook/react";

import { Footer, FooterProps } from "../../components/Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Navigation/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The footer informs users about the Organization that a website belongs to.
         It can include copyright details, links to Terms and Conditions and generic calls to action. It should be included at the bottom of each page.
        `,
      },
    },
  },
};

const Default: StoryObj<FooterProps> = {
  args: {
    logo: "/logo_en_horizontal_white.svg",
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
    socialmedia: {
      headline: "Stay informed",
      theme: "dark",
      justify: "start",
      iconSize: "normal",
      icons: [
        {
          icon: "x",
          label: "X",
          url: "https://x.com/ilo",
        },
        {
          icon: "facebook",
          label: "Facebook",
          url: "https://www.facebook.com/ilo.org",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          url: "https://www.linkedin.com/company/international-labour-organization-ilo",
        },
        {
          icon: "instagram",
          label: "Instagram",
          url: "https://www.instagram.com/ilo.org/",
        },
        {
          icon: "tiktok",
          label: "TikTok",
          url: "https://www.tiktok.com/@ilo",
        },
        {
          icon: "flickr",
          label: "Flickr",
          url: "https://www.flickr.com/photos/ilopictures/albums",
        },
        {
          icon: "youtube",
          label: "YouTube",
          url: "https://www.youtube.com/channel/UCrlcu5KChYyHwXlIeD7oLUg",
        },
      ],
    },
    subscribe: {
      label: "Subscribe for updates",
      url: "https://www.ilo.org",
    },
    legal: "© 1996-2022 International Labour Organization (ILO)",
    secondarylinks: [
      {
        label: "Rights and permissions",
        url: "http://www.cnn.com",
      },
      {
        label: "Privacy policy",
        url: "http://www.bing.com",
      },
      {
        label: "Fraud alert",
        url: "http://www.yahoo.com",
      },
      {
        label: "Disclaimer",
        url: "http://www.askjeeves.com",
      },
    ],
    anchorlink: {
      label: "Back to top",
      url: "#anchor",
    },
  },
};

export default meta;
export { Default };
