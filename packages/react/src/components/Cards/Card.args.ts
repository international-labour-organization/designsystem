import { CardProps } from "./Card.props";

const textCard: CardProps = {
  type: "text",
  title: "Why we need greater social justice",
  eyebrow: "Podcast",
  date: {
    human: "20 September 2022",
    unix: "1670389200",
  },
  theme: "light",
  link: "https:/www.ilo.org",
  intro:
    "A toxic combination of mutually-reinforcing crises – inflation, debt, food and fuel price rises, geopolitical tensions and conflict, climate change – are threatening to increase poverty, inequality and discrimination worldwide.",
  profile: {
    avatar: "/ilo-dg.jpg",
    description:
      "Gilbert Houngbo is the Director-General of the International Labour Organization",
    name: "Gilbert Houngbo",
    role: "ILO Director-General",
  },
};

const statCard: CardProps = {
  type: "stat",
  title: "Global employment growth down by half in 2023",
  eyebrow: "Report",
  intro:
    "The current global economic slowdown is likely to force more workers to accept lower quality, poorly paid jobs which lack job security and social protection, so accentuating inequalities exacerbated by the COVID-19 crisis.",
  color: "turquoise",
  source: {
    label: "World Employment and Social Outlook: Trends 2023",
    url: "https://www.ilo.org",
  },
};

const multilinkCard: CardProps = {
  type: "multilink",
  title:
    "ILO welcomes G7 call to make a just transition to a green economy happen",
  eyebrow: "High-level meeting",
  intro:
    "At the end of their meeting the G7 Labour Ministers highlighted the urgent need to greater focus on rights and occupational safety and health.",
  image: "/hero.jpg",
  alignment: "left",
  date: {
    human: "6 September 2023",
    unix: "1670389200",
  },
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

const promoCard: CardProps = {
  type: "promo",
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

const featureCard: CardProps = {
  type: "feature",
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

const detailCard: CardProps = {
  type: "detail",
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

const factListCard: CardProps = {
  type: "factlist",
  title:
    "Economic slowdown likely to force workers to accept lower quality jobs",
  eyebrow: "Report",
  theme: "light",
  cornercut: "cornercut",
  intro:
    "A toxic combination of mutually-reinforcing crises – inflation, debt, food and fuel price rises, geopolitical tensions and conflict, climate change – are threatening to increase poverty, inequality and discrimination worldwide.",
  listitems: [
    "Global employment growth will be only 1.0 per cent in 2023, less than half the level in 2022.",
    "The labour market deterioration is mainly due to emerging geopolitical tensions and the Ukraine conflict.",
    "The current slowdown means that many workers will have to accept lower quality jobs, often at very low pay.",
  ],
};

const dataCard: CardProps = {
  type: "data",
  size: "standard",
  title: "Technical meeting on digitalization in the construction sector",
  eyebrow: "Meeting",
  eventdetails:
    "The purpose of the meeting will be to discuss opportunities and challenges for the future of work in the construction industry as a vehicle to ensure a human-centred economic recovery.",
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
