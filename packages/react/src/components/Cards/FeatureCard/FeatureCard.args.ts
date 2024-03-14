import { FeatureCardProps } from ".";

export const FeatureCardArgs: FeatureCardProps = {
  isvideo: false,
  title:
    "ILO welcomes G7 call to make a just transition to a green economy happen",
  eyebrow: "High-level meeting",
  theme: "light",
  date: {
    human: "18 March 2023",
    unix: "1670389200",
  },
  image: "/hero.jpg",
  link: "https:/www.ilo.org",
  linklist: {
    headline: "",
    linkgroup: [
      {
        links: [
          {
            label: "Read the press release",
            url: "http://www.google.com",
          },
        ],
      },
    ],
  },
};

export default FeatureCardArgs;
