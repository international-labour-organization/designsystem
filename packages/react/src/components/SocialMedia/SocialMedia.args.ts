import { SocialMediaProps } from "./SocialMedia.props";

export const defaultArgs: SocialMediaProps = {
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
};

export const darkArgs: SocialMediaProps = {
  ...defaultArgs,
  theme: "dark",
};

export const centredArgs: SocialMediaProps = {
  ...defaultArgs,
  justify: "center",
};
