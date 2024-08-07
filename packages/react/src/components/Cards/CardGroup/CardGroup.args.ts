import { CardGroupProps } from "./CardGroup.props";

export const textCardGroup: CardGroupProps = {
  cards: [
    {
      title: "ILO welcomes first global agreement on working conditions",
      eyebrow: "Press release",
      date: {
        human: "20 September 2022",
        unix: "1670389200",
      },
      theme: "dark",
      link: "https:/www.ilo.org",
      profile: {
        avatar: "/ilo-dg.jpg",
        description:
          "Gilbert Houngbo is the Director-General of the International Labour Organization",
        name: "Gilbert Houngbo",
        role: "ILO Director-General",
      },
    },
    {
      title: "Renewable energy jobs hit 12.7 million globally",
      eyebrow: "Report",
      date: {
        human: "21 September 2022",
        unix: "1670389200",
      },
      theme: "dark",
      link: "https:/www.ilo.org",
      profile: {
        avatar: "/ilo-dg.jpg",
        description:
          "Gilbert Houngbo is the Director-General of the International Labour Organization",
        name: "Gilbert Houngbo",
        role: "ILO Director-General",
      },
    },
    {
      title: "Can digital technology be an equality machine? ",
      eyebrow: "Podcast",
      date: {
        human: "25 September 2022",
        unix: "1670389200",
      },
      theme: "dark",
      link: "https:/www.ilo.org",
      profile: {
        avatar: "/ilo-dg.jpg",
        description:
          "Gilbert Houngbo is the Director-General of the International Labour Organization",
        name: "Gilbert Houngbo",
        role: "ILO Director-General",
      },
    },
    {
      title: "Why we need greater social justice?",
      eyebrow: "Podcast",
      date: {
        human: "31 September 2022",
        unix: "1670389200",
      },
      theme: "dark",
      link: "https:/www.ilo.org",
      profile: {
        avatar: "/ilo-dg.jpg",
        description:
          "Gilbert Houngbo is the Director-General of the International Labour Organization",
        name: "Gilbert Houngbo",
        role: "ILO Director-General",
      },
    },
  ],
  cardCount: "three",
  type: "text",
  size: "narrow",
  cta: {
    label: "Discover our unique mission",
    url: "https://www.ilo.org",
  },
};

const statCardGroup: CardGroupProps = {
  cards: [
    {
      title: "Can digital technology be an equality machine?",
      intro:
        "A toxic combination of mutually-reinforcing crises inflation, debt, food and fuel price rises, geopolitical tensions and conflict, climate change are threatening to increase poverty, inequality and discrimination worldwide.",
      color: "turquoise",
      source: {
        label: "World Employment and Social Outlook: Trends 2023",
        url: "https://www.ilo.org",
      },
    },
    {
      title: "Renewable energy jobs hit 12.7 million globally",
      intro:
        "The current global economic slowdown is likely to force more workers to accept lower quality, poorly paid jobs which lack job security and social protection, so accentuating inequalities exacerbated by the COVID-19 crisis.",
      color: "turquoise",
      source: {
        label: "World Employment and Social Outlook: Trends 2023",
        url: "https://www.ilo.org",
      },
    },
    {
      title: "Global employment growth down by half",
      intro:
        "A toxic combination of mutually-reinforcing crises inflation, debt, food and fuel price rises, geopolitical tensions and conflict, climate change are threatening to increase poverty, inequality and discrimination worldwide.",
      color: "turquoise",
      source: {
        label: "World Employment and Social Outlook: Trends 2023",
        url: "https://www.ilo.org",
      },
    },
    {
      title:
        "ILO welcomes first global agreement on working conditions and rights of professional football players",
      intro:
        "The current global economic slowdown is likely to force more workers to accept lower quality, poorly paid jobs which lack job security and social protection, so accentuating inequalities exacerbated by the COVID-19 crisis.",
      color: "turquoise",
      source: {
        label: "World Employment and Social Outlook: Trends 2023",
        url: "https://www.ilo.org",
      },
    },
  ],
  cardCount: "three",
  size: "narrow",
  type: "stat",
  cta: {
    label: "Discover our unique mission",
    url: "https://www.ilo.org",
  },
};

const multilinkCardGroup: CardGroupProps = {
  cards: [
    {
      title: "ILO welcomes first global agreement on working conditions",
      eyebrow: "Press release",
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
    },
    {
      title:
        "ILO welcomes G7 call to make a just transition to a green economy happen",
      eyebrow: "Report",
      intro:
        "A toxic combination of mutually-reinforcing crises inflation, debt, food and fuel price rises, geopolitical tensions and conflict.",
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
    },
    {
      title: "Telangana and Andhra Pradesh launch pre-departure handbook",
      eyebrow: "Podcast",
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
    },
    {
      title: "Renewable energy jobs hit 12.7 million globally",
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
    },
  ],
  type: "multilink",
  cardCount: "three",
  size: "standard",
  cta: {
    label: "Discover our unique mission",
    url: "https://www.ilo.org",
  },
};

const promoCardGroup: CardGroupProps = {
  cards: [
    {
      title: "ILO welcomes first global agreement on working conditions",
      eyebrow: "Report",
      theme: "dark",
      cornercut: true,
      intro:
        "At the end of their meeting the G7 Labour Ministers highlighted the urgent need to greater focus on rights and occupational safety and health.",
      link: "https:/www.ilo.org",
      cta: {
        label: "Read the press release",
        url: "https://www.ilo.org",
      },
    },
    {
      title: "Renewable energy jobs hits 12.7 million globally",
      eyebrow: "High-level meeting",
      theme: "dark",
      cornercut: true,
      intro:
        "At the end of their meeting the G7 Labour Ministers highlighted the urgent need to greater focus on rights and occupational safety and health.",
      link: "https:/www.ilo.org",
      cta: {
        label: "Read the press release",
        url: "https://www.ilo.org",
      },
    },
    {
      title: "ILO welcomes G7 call to make a just transition",
      eyebrow: "Podcast",
      theme: "dark",
      cornercut: true,
      intro:
        "At the end of their meeting the G7 Labour Ministers highlighted the urgent need to greater focus on rights and occupational safety and health.",
      link: "https:/www.ilo.org",
      cta: {
        label: "Read the press release",
        url: "https://www.ilo.org",
      },
    },
    {
      title: "Telangana and Andhra Pradesh launch pre-departure handbook",
      eyebrow: "High-level meeting",
      theme: "dark",
      cornercut: true,
      intro:
        "At the end of their meeting the G7 Labour Ministers highlighted the urgent need to greater focus on rights and occupational safety and health.",
      link: "https:/www.ilo.org",
      cta: {
        label: "Read the press release",
        url: "https://www.ilo.org",
      },
    },
  ],
  type: "promo",
  cardCount: "three",
  size: "standard",
  cta: {
    label: "Discover our unique mission",
    url: "https://www.ilo.org",
  },
};

const featureCardGroup: CardGroupProps = {
  cards: [
    {
      isvideo: false,
      title:
        "ILO welcomes G7 call to make a just transition to a green economy happen",
      eyebrow: "Press release",
      theme: "dark",
      image: "/small.jpg",
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
    },
    {
      isvideo: false,
      title: "Renewable energy jobs hit 12.7 million globally",
      eyebrow: "Report",
      theme: "dark",
      image: "/small.jpg",
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
    },
    {
      isvideo: false,
      title:
        "Telangana and Andhra Pradesh launch pre-departure handbook for Indians going to the European Union",
      eyebrow: "Podcast",
      theme: "dark",
      image: "/small.jpg",
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
    },
    {
      isvideo: false,
      title: "Can digital technology be an equality machine?",
      eyebrow: "Podcast",
      theme: "dark",
      image: "/small.jpg",
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
    },
  ],
  cardCount: "three",
  type: "feature",
  size: "narrow",
  cta: {
    label: "Discover our unique mission",
    url: "https://www.ilo.org",
  },
};

const detailCardGroup: CardGroupProps = {
  cards: [
    {
      title: "Technical meeting on digitalization in the construction sector",
      eyebrow: "Meeting",
      intro:
        "The purpose of the meeting will be to discuss opportunities and challenges for the future of work in the construction industry as a vehicle to ensure a human-centred economic recovery.",
      date: {
        human: "12 March 2023",
        unix: "1670389200",
      },
      image: "/medium.jpg",
      link: "https:/www.ilo.org",
      eventdetails: "5:30 - 12:00 CET | Geneva",
    },
    {
      title: "Renewable energy jobs hit 12.7 million globally",
      eyebrow: "Promo",
      intro:
        "The purpose of the meeting will be to discuss opportunities and challenges for the future of work in the construction industry as a vehicle to ensure a human-centred economic recovery.",
      date: {
        human: "18 March 2023",
        unix: "1670389200",
      },
      image: "/medium.jpg",
      link: "https:/www.ilo.org",
      eventdetails: "7:30 - 12:00 CET | Geneva",
    },
    {
      title: "Telangana and Andhra Pradesh launch pre-departure handbook",
      eyebrow: "Report",
      intro:
        "The purpose of the meeting will be to discuss opportunities and challenges for the future of work in the construction industry as a vehicle to ensure a human-centred economic recovery.",
      date: {
        human: "22 March 2023",
        unix: "1670389200",
      },
      image: "/medium.jpg",
      link: "https:/www.ilo.org",
      eventdetails: "10:30 - 12:00 CET | Geneva",
    },
    {
      title: "Can digital technology be an equality machine?",
      eyebrow: "Meeting",
      intro:
        "The purpose of the meeting will be to discuss opportunities and challenges for the future of work in the construction industry as a vehicle to ensure a human-centred economic recovery.",
      date: {
        human: "31 March 2023",
        unix: "1670389200",
      },
      image: "/medium.jpg",
      link: "https:/www.ilo.org",
      eventdetails: "11:30 - 12:00 CET | Geneva",
    },
  ],
  type: "detail",
  cardCount: "three",
  size: "narrow",
  cta: {
    label: "Discover our unique mission",
    url: "https://www.ilo.org",
  },
};

const factListCardGroup: CardGroupProps = {
  cards: [
    {
      title: "ILO welcomes first global agreement on working conditions",
      theme: "light",
      list: [
        "The current slowdown means that many workers will have to accept lower quality jobs, often at very low pay.",
        "Global employment growth will be only 1.0 per cent in 2023, less than half the level in 2022.",
        "The labour market deterioration is mainly due to emerging geopolitical tensions and the Ukraine conflict.",
      ],
    },
    {
      title:
        "Economic slowdown likely to force workers to accept lower quality jobs",
      theme: "light",
      list: [
        "Global employment growth will be only 1.0 per cent in 2023, less than half the level in 2022.",
        "The labour market deterioration is mainly due to emerging geopolitical tensions and the Ukraine conflict.",
        "The current slowdown means that many workers will have to accept lower quality jobs, often at very low pay.",
      ],
    },
    {
      title: "Telangana and Andhra Pradesh launch pre-departure handbook",
      theme: "light",
      list: [
        "The current slowdown means that many workers will have to accept lower quality jobs, often at very low pay.",
        "Global employment growth will be only 1.0 per cent in 2023, less than half the level in 2022.",
        "The labour market deterioration is mainly due to emerging geopolitical tensions and the Ukraine conflict.",
      ],
    },
    {
      title: "Renewable energy jobs hit 12.7 million globally",
      theme: "light",
      list: [
        "Global employment growth will be only 1.0 per cent in 2023, less than half the level in 2022.",
        "The labour market deterioration is mainly due to emerging geopolitical tensions and the Ukraine conflict.",
        "The current slowdown means that many workers will have to accept lower quality jobs, often at very low pay.",
      ],
    },
  ],
  type: "factlist",
  cardCount: "three",
  size: "narrow",
  cta: {
    label: "Discover our unique mission",
    url: "https://www.ilo.org",
  },
};

const dataCardGroup: CardGroupProps = {
  cards: [
    {
      size: "narrow",
      eyebrow: "Press release",
      image: "/small.jpg",
      columns: "one",
      dataset: {
        content: {
          items: [
            {
              label: "Date",
              copy: "20 March 2023",
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
    },
    {
      eyebrow: "Report",
      image: "/small.jpg",
      columns: "one",
      dataset: {
        content: {
          items: [
            {
              label: "Date",
              copy: "23 March 2023",
            },
            {
              label: "Event type",
              copy: "Casual meeting",
            },
          ],
        },
        files: {
          headline: "Files",
          items: [
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
    },
    {
      eyebrow: "Meeting",
      image: "/small.jpg",
      columns: "one",
      dataset: {
        content: {
          items: [
            {
              label: "Date",
              copy: "24 March 2023",
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
          ],
        },
      },
    },
    {
      eyebrow: "Meeting",
      image: "/small.jpg",
      columns: "one",
      dataset: {
        content: {
          items: [
            {
              label: "Date",
              copy: "29 March 2023",
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
    },
  ],
  cardCount: "three",
  type: "data",
  size: "narrow",
  cta: {
    label: "Discover our unique mission",
    url: "https://www.ilo.org",
  },
};

const CardGroupArgs = {
  textCardGroup,
  statCardGroup,
  multilinkCardGroup,
  promoCardGroup,
  featureCardGroup,
  detailCardGroup,
  factListCardGroup,
  dataCardGroup,
};

export default CardGroupArgs;
