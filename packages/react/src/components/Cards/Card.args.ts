import {
  TextCardProps,
  StatCardProps,
  MultilinkCardProps,
  PromoCardProps,
  FeatureCardProps,
  DetailCardProps,
  FactlistCardProps,
  DataCardProps,
} from "./Card.props";

const textCard: TextCardProps = {
  title: "Why we need greater social justice",
  eyebrow: "Podcast",
  date: {
    human: "20 September 2022",
    unix: "1670389200",
  },
  theme: "light",
  link: "https:/www.ilo.org",
  profile: {
    avatar: "/ilo-dg.jpg",
    description:
      "Gilbert Houngbo is the Director-General of the International Labour Organization",
    name: "Gilbert Houngbo",
    role: "ILO Director-General",
  },
};

const statCard: StatCardProps = {
  title: "Global employment growth down by half in 2023",
  intro:
    "The current global economic slowdown is likely to force more workers to accept lower quality, poorly paid jobs which lack job security and social protection, so accentuating inequalities exacerbated by the COVID-19 crisis.",
  color: "turquoise",
  source: {
    label: "World Employment and Social Outlook: Trends 2023",
    url: "https://www.ilo.org",
  },
};

const multilinkCard: MultilinkCardProps = {
  title:
    "ILO welcomes G7 call to make a just transition to a green economy happen",
  eyebrow: "High-level meeting",
  intro:
    "At the end of their meeting the G7 Labour Ministers highlighted the urgent need to greater focus on rights and occupational safety and health.",
  image: "/hero.jpg",
  alignment: "left",
  link: "https:/www.ilo.org",
  linklist: {
    headline: "",
    linkgroup: [
      {
        links: [
          {
            label: "Read the press release",
            url: "https://www.ilo.org",
          },
          {
            label: "See the statement",
            url: "https://www.ilo.org",
          },
          {
            label: "Remarks to G7 Openening Session",
            url: "https://www.ilo.org",
          },
        ],
      },
    ],
  },
};

const promoCard: PromoCardProps = {
  size: "standard",
  title:
    "ILO welcomes G7 call to make a just transition to a green economy happen",
  eyebrow: "High-level meeting",
  theme: "light",
  cornercut: "cornercut",
  intro:
    "At the end of their meeting the G7 Labour Ministers highlighted the urgent need to greater focus on rights and occupational safety and health.",
  link: "https:/www.ilo.org",
  cta: {
    label: "Read the press release",
    url: "https://www.ilo.org",
  },
};

const featureCard: FeatureCardProps = {
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

const detailCard: DetailCardProps = {
  title: "Technical meeting on digitalization in the construction sector",
  eyebrow: "Meeting",
  intro:
    "The purpose of the meeting will be to discuss opportunities and challenges for the future of work in the construction industry as a vehicle to ensure a human-centred economic recovery.",
  date: {
    human: "18 March 2023",
    unix: "1670389200",
  },
  image: "/medium.jpg",
  link: "https:/www.ilo.org",
  eventdetails: "8:30 - 12:00 CET | Geneva",
};

const factListCard: FactlistCardProps = {
  title:
    "Economic slowdown likely to force workers to accept lower quality jobs",
  theme: "light",
  list: [
    "Global employment growth will be only 1.0 per cent in 2023, less than half the level in 2022.",
    "The labour market deterioration is mainly due to emerging geopolitical tensions and the Ukraine conflict.",
    "The current slowdown means that many workers will have to accept lower quality jobs, often at very low pay.",
  ],
};

const dataCard: DataCardProps = {
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

const CardArgs = {
  textCard,
  statCard,
  multilinkCard,
  promoCard,
  featureCard,
  detailCard,
  factListCard,
  dataCard,
};

export default CardArgs;
