import { Meta, StoryObj } from "@storybook/react";

import { SocialMedia, SocialMediaProps } from "../../components/SocialMedia";

const meta: Meta<typeof SocialMedia> = {
  title: "Components/Navigation/SocialMedia",
  component: SocialMedia,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The Social Media component displays a list of social media icons.
        It can have a light or a dark theme and can be aligned to the start or center of its container.`,
      },
    },
  },
};

const Default: StoryObj<SocialMediaProps> = {
  args: {
    headline: "Follow us on social media",
    theme: "light",
    justify: "start",
    iconSize: "normal",
    icons: [
      {
        icon: "facebook",
        url: "https://www.facebook.com/ilo.org",
        label: "Facebook",
      },
      {
        icon: "x",
        url: "https://x.com/ilo",
        label: "x",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/ilo.org/",
        label: "Instagram",
      },
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/company/international-labour-organization-ilo",
        label: "LinkedIn",
      },
      {
        icon: "youtube",
        url: "https://www.youtube.com/channel/UCQsVmhSa4X-G3lHlUtejzLA",
        label: "YouTube",
      },
      {
        icon: "tiktok",
        url: "https://www.tiktok.com/@ilo",
        label: "TikTok",
      },
      {
        icon: "flickr",
        url: "https://www.flickr.com/photos/ilopictures/albums",
        label: "TikTok",
      },
    ],
  },
};

export default meta;
export { Default };
