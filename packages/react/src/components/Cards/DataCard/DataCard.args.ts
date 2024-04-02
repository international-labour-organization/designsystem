import { DataCardProps } from ".";

export const DataCardArgs: DataCardProps = {
  size: "wide",
  eyebrow: "Meeting",
  image: "/small.jpg",
  columns: "two",
  dataset: {
    content: {
      items: [
        {
          label: "Date",
          copy: "18 March 2023",
        },
        {
          label: "Event type",
          copy: "Technical meeting of experts",
        },
      ],
    },
    files: {
      headline: "Files",
      items: [
        {
          label: "Meeting agenda",
          url: "https://www.ilo.org",
        },
        {
          label: "Briefing notes",
          url: "https://www.ilo.org",
        },
        {
          label: "Practical info",
          url: "https://www.ilo.org",
        },
      ],
    },
    cta: {
      headline: "Read online",
      items: [
        {
          label: "HTML Version",
          url: "https://www.ilo.org",
        },
        {
          label: "InfoStories",
          url: "https://www.ilo.org/infostories/en-GB",
        },
      ],
    },
    links: {
      headline: "Languages",
      items: [
        {
          label: "English",
          url: "https://www.ilo.org",
        },
        {
          label: "Español",
          url: "https://www.ilo.org",
        },
        {
          label: "Français",
          url: "https://www.ilo.org",
        },
      ],
    },
  },
};
