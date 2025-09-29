import { Meta, StoryObj } from "@storybook/react";
import { DataCard, DataCardProps } from "../../components/Cards/DataCard";

const meta: Meta<typeof DataCard> = {
  title: "Components/Cards/Data Card",
  component: DataCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A data card component for organising data about things like publications or events.`,
      },
    },
  },
  argTypes: {
    size: {
      options: ["narrow", "wide", "fluid"],
      control: { type: "radio" },
    },
    columns: {
      options: ["one", "two"],
      control: { type: "radio" },
    },
  },
};

const Default: StoryObj<DataCardProps> = {
  name: "Default",
  args: {
    eyebrow: "Flagship report",
    size: "narrow",
    image: "/publication.jpg",
    dataset: {
      content: {
        items: [
          { label: "Date of publication", copy: "17 March 2022" },
          { label: "Published by", copy: "ILO Department of Research" },
        ],
      },
      files: {
        headline: "Files for download",
        items: [
          { label: "PDF 3.2 MB", url: "https://www.ilo.org", target: "_blank" },
          {
            label: "EPUB 5.8 MB",
            url: "https://www.ilo.org",
            target: "_parent",
          },
          { label: "MOBI 2.4 MB", url: "https://www.ilo.org" },
        ],
      },
      cta: {
        headline: "Read online",
        items: [
          { label: "HTML Version", url: "https://www.ilo.org" },
          {
            label: "InfoStories",
            url: "https://www.ilo.org/infostories/en-GB",
          },
        ],
      },
      links: {
        headline: "Also available in",
        items: [
          { label: "English", url: "https://www.ilo.org/search?q=link" },
          { label: "Español", url: "https://www.ilo.org/search?q=hyperlink" },
          { label: "Dansk", url: "https://www.ilo.org/search?q=url" },
          { label: "Deutsch", url: "https://www.ilo.org/search?q=url" },
          { label: "Français", url: "https://www.ilo.org/search?q=url" },
          { label: "Italiano", url: "https://www.ilo.org/search?q=url" },
          { label: "Português", url: "https://www.ilo.org/search?q=url" },
          { label: "Русский", url: "https://www.ilo.org/search?q=url" },
          { label: "中文", url: "https://www.ilo.org/search?q=url" },
          { label: "العربية", url: "https://www.ilo.org/search?q=url" },
          { label: "Ελληνικά", url: "https://www.ilo.org/search?q=url" },
          { label: "Nederlands", url: "https://www.ilo.org/search?q=url" },
        ],
      },
    },
    loading: false,
  },
};

const NoImage: StoryObj<DataCardProps> = {
  name: "No Image",
  args: {
    eyebrow: "Flagship report",
    size: "narrow",
    dataset: {
      content: {
        items: [
          { label: "Date of publication", copy: "17 March 2022" },
          { label: "Published by", copy: "ILO Department of Research" },
        ],
      },
      files: {
        headline: "Files for download",
        items: [
          { label: "PDF 3.2 MB", url: "https://www.ilo.org", target: "_blank" },
          {
            label: "EPUB 5.8 MB",
            url: "https://www.ilo.org",
            target: "_parent",
          },
          { label: "MOBI 2.4 MB", url: "https://www.ilo.org" },
        ],
      },
      cta: {
        headline: "Read online",
        items: [
          { label: "HTML Version", url: "https://www.ilo.org" },
          {
            label: "InfoStories",
            url: "https://www.ilo.org/infostories/en-GB",
          },
        ],
      },
      links: {
        headline: "Also available in",
        items: [
          { label: "English", url: "https://www.ilo.org/search?q=link" },
          { label: "Español", url: "https://www.ilo.org/search?q=hyperlink" },
          { label: "Dansk", url: "https://www.ilo.org/search?q=url" },
          { label: "Deutsch", url: "https://www.ilo.org/search?q=url" },
          { label: "Français", url: "https://www.ilo.org/search?q=url" },
          { label: "Italiano", url: "https://www.ilo.org/search?q=url" },
          { label: "Português", url: "https://www.ilo.org/search?q=url" },
          { label: "Русский", url: "https://www.ilo.org/search?q=url" },
          { label: "中文", url: "https://www.ilo.org/search?q=url" },
          { label: "العربية", url: "https://www.ilo.org/search?q=url" },
          { label: "Ελληνικά", url: "https://www.ilo.org/search?q=url" },
          { label: "Nederlands", url: "https://www.ilo.org/search?q=url" },
        ],
      },
    },
  },
};

const TwoColumns: StoryObj<DataCardProps> = {
  name: "Two Columns",
  args: {
    eyebrow: "Flagship report",
    size: "wide",
    columns: "two",
    image: "/publication.jpg",
    dataset: {
      content: {
        items: [
          { label: "Date of publication", copy: "17 March 2022" },
          { label: "Published by", copy: "ILO Department of Research" },
        ],
      },
      files: {
        headline: "Files for download",
        items: [
          { label: "PDF 3.2 MB", url: "https://www.ilo.org", target: "_blank" },
          {
            label: "EPUB 5.8 MB",
            url: "https://www.ilo.org",
            target: "_parent",
          },
          { label: "MOBI 2.4 MB", url: "https://www.ilo.org" },
        ],
      },
      cta: {
        headline: "Read online",
        items: [
          { label: "HTML Version", url: "https://www.ilo.org" },
          {
            label: "InfoStories",
            url: "https://www.ilo.org/infostories/en-GB",
          },
        ],
      },
      links: {
        headline: "Also available in",
        items: [
          { label: "English", url: "https://www.ilo.org/search?q=link" },
          { label: "Español", url: "https://www.ilo.org/search?q=hyperlink" },
          { label: "Dansk", url: "https://www.ilo.org/search?q=url" },
          { label: "Deutsch", url: "https://www.ilo.org/search?q=url" },
          { label: "Français", url: "https://www.ilo.org/search?q=url" },
          { label: "Italiano", url: "https://www.ilo.org/search?q=url" },
          { label: "Português", url: "https://www.ilo.org/search?q=url" },
          { label: "Русский", url: "https://www.ilo.org/search?q=url" },
          { label: "中文", url: "https://www.ilo.org/search?q=url" },
          { label: "العربية", url: "https://www.ilo.org/search?q=url" },
          { label: "Ελληνικά", url: "https://www.ilo.org/search?q=url" },
          { label: "Nederlands", url: "https://www.ilo.org/search?q=url" },
        ],
      },
    },
  },
};

const TwoColumnsNoImage: StoryObj<DataCardProps> = {
  name: "Two Columns No Image",
  args: {
    eyebrow: "Flagship report",
    size: "wide",
    columns: "two",
    dataset: {
      content: {
        items: [
          { label: "Date of publication", copy: "17 March 2022" },
          { label: "Published by", copy: "ILO Department of Research" },
        ],
      },
      files: {
        headline: "Files for download",
        items: [
          { label: "PDF 3.2 MB", url: "https://www.ilo.org", target: "_blank" },
          {
            label: "EPUB 5.8 MB",
            url: "https://www.ilo.org",
            target: "_parent",
          },
          { label: "MOBI 2.4 MB", url: "https://www.ilo.org" },
        ],
      },
      cta: {
        headline: "Read online",
        items: [
          { label: "HTML Version", url: "https://www.ilo.org" },
          {
            label: "InfoStories",
            url: "https://www.ilo.org/infostories/en-GB",
          },
        ],
      },
      links: {
        headline: "Also available in",
        items: [
          { label: "English", url: "https://www.ilo.org/search?q=link" },
          { label: "Español", url: "https://www.ilo.org/search?q=hyperlink" },
          { label: "Dansk", url: "https://www.ilo.org/search?q=url" },
          { label: "Deutsch", url: "https://www.ilo.org/search?q=url" },
          { label: "Français", url: "https://www.ilo.org/search?q=url" },
          { label: "Italiano", url: "https://www.ilo.org/search?q=url" },
          { label: "Português", url: "https://www.ilo.org/search?q=url" },
          { label: "Русский", url: "https://www.ilo.org/search?q=url" },
          { label: "中文", url: "https://www.ilo.org/search?q=url" },
          { label: "العربية", url: "https://www.ilo.org/search?q=url" },
          { label: "Ελληνικά", url: "https://www.ilo.org/search?q=url" },
          { label: "Nederlands", url: "https://www.ilo.org/search?q=url" },
        ],
      },
    },
  },
};

const TwoColumnsNoLinks: StoryObj<DataCardProps> = {
  name: "Two Columns No Links",
  args: {
    eyebrow: "Flagship report",
    size: "wide",
    columns: "two",
    dataset: {
      content: {
        items: [{ label: "Date of publication", copy: "5 June 2023" }],
      },
      files: {
        headline: "Files for download",
        items: [
          { label: "PDF 3.2 MB", url: "https://www.ilo.org" },
          { label: "EPUB 5.8 MB", url: "https://www.ilo.org" },
        ],
      },
    },
  },
};

export default meta;
export { Default, NoImage, TwoColumns, TwoColumnsNoImage, TwoColumnsNoLinks };
