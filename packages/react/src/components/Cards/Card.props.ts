import {
  CardAlignment,
  ThemeTypes,
  CardCornerType,
  CardColor,
  CardSize,
  CardTypes,
} from "../../types";
import { LinkProps, LinkListProps } from "../LinkList/LinkList.props";
import { ProfileProps } from "../Profile/Profile.props";

export type DataCardProps = {
  /**
   * A line of text that appears as a small heading at the top of the card
   */
  eyebrow?: string;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "standard">;

  /**
   * The image to show in the card
   */
  image?: string;

  /**
   * Array of Content (label, copy), Files object (optional headline, array of items with label and url) and Links * * object (optional headline, array of items with label and url)
   */
  dataset?: CardDataset;

  /**
   * Make the content appear in one or two columns. Only applies when the size is set to `wide` or `fluid`
   */
  columns?: string;
};

export type DetailCardProps = {
  /**
   * A line of text that appears as a small heading above the title of the card
   */
  eyebrow?: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * Introductory text in the card
   */
  intro?: string;

  /**
   * Specify the event Date, in both human and Unix format.
   */
  date?: EventDate;

  /**
   * Information about an event
   */
  eventdetails?: string;

  /**
   * A URL to link to
   */
  link?: string;

  /**
   * The image to show in the card
   */
  image?: string;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "standard">;
};

export type FactlistCardProps = {
  /**
   * The title of the card
   */
  title: string;

  /**
   * Will render the card to appear on light or dark backgrounds
   */
  theme?: ThemeTypes;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "standard">;
  list?: string[];
};

export type FeatureCardProps = {
  isvideo?: boolean;

  /**
   * A line of text that appears as a small heading above the title of the card
   */
  eyebrow?: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * Will render the card to appear on light or dark backgrounds
   */
  theme?: ThemeTypes;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "standard">;

  /**
   * Specify the event Date, in both human and Unix format.
   */
  date?: EventDate;
  link?: string;
  linklist?: LinkListProps;

  /**
   * The image to show in the card
   */
  image?: string;
};

export type MultilinkCardProps = {
  isvideo?: boolean;

  /**
   * A line of text that appears as a small heading above the title of the card
   */
  eyebrow?: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * How big should the card be
   */
  size?: CardSize;
  alignment?: CardAlignment;
  intro?: string;
  link?: string;
  linklist?: LinkListProps;

  /**
   * The image to show in the card
   */
  image?: string;
};

export type PromoCardProps = {
  /**
   * A line of text that appears as a small heading above the title of the card
   */
  eyebrow?: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * Will render the card to appear on light or dark backgrounds
   */
  theme?: ThemeTypes;

  /**
   * How big should the card be
   */
  size?: CardSize;

  /**
   * Apply an optional corner cut to the top of the card
   */
  cornercut?: CardCornerType;

  /**
   * Introductory text in the card
   */
  intro?: string;
  link?: string;
  cta?: LinkProps;
};

export type StatCardProps = {
  /**
   * The title of the card
   */
  title: string;
  color?: CardColor;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "narrow" | "wide">;

  /**
   * Introductory text in the card
   */
  intro?: string;
  source?: LinkProps;
};

export type TextCardProps = {
  /**
   * A line of text that appears as a small heading above the title of the card
   */
  eyebrow?: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * Will render the card to appear on light or dark backgrounds
   */
  theme?: ThemeTypes;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "standard">;

  /**
   * Specify the event Date, in both human and Unix format.
   */
  date?: EventDate;
  profile: ProfileProps;
  link?: string;
};

interface EventDate {
  unix?: string;
  human?: string;
}

interface CardDataset {
  content?: DataContent;
  files?: DataFile;
  links?: DataLink;
  cta?: Cta;
}

interface DataContent {
  items?: Array<ContentItem>;
}

interface ContentItem {
  label?: string;
  copy?: string;
}

interface DataFile {
  headline?: string;
  items?: Array<LinkProps>;
}

interface DataLink {
  headline?: string;
  items?: Array<LinkProps>;
}

interface Cta {
  headline?: string;
  items?: Array<LinkProps>;
}
