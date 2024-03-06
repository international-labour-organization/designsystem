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

export interface CardProps {
  /**
   * Specify whether the card should display a video icon (for Feature card). Possible options: true | false
   */
  isvideo?: boolean;

  /**
   * Eyebrow field for the card.
   */
  eyebrow: string;

  /**
   * Title field for the card
   */
  title: string;

  /**
   * Color of the stat cards, options are turquoise | green| yellow| blue. Only used for stat cards.
   */
  color?: CardColor;

  /**
   * The theme type for the card. Theme doesn't apply to these card types: Multilink, Data, Stat and Detail. Possible themes: light | dark.
   */
  theme?: ThemeTypes;

  /**
   * Type - Sets the type of card to render.
     Option keys: feature, text, detail, promo, multilink, data, stat, factlist
   */
  type: CardTypes;

  /**
   * Size of the cards (usually reduces padding). `Wide` on Multilink and Feature cause a two column structure above a desktop breakpoint. Possible options: Wide | Standard | Narrow.
   */
  size?: CardSize;

  /**
   * Specify whether the card has a cut corner. The only card that uses this setting are `Promo`.
   */
  cornercut?: CardCornerType;

  /**
   * Specify whether a card image is right-aligned or left-aligned for `Multilink` cards. Possible options: left | right.
   */
  alignment?: CardAlignment;

  /**
   * Intro text field for the card
   */
  intro?: string;

  /**
   * Specify the event Date, in both human and Unix format.
   */
  date?: EventDate;

  /**
   * Event details for `Detail` card
   */
  eventdetails?: string;

  /**
   * Profile to embed in the card for `Text` card
   */
  profile?: ProfileProps;

  /**
   * A list of text itmes to be embed in the card, specifically used in `Factlist` card.
   */
  listitems?: Array<string>;

  /**
   * A Link behind a clickable card. Do no use on `Multilink`, `Factlist`, `Data`, or `Stat` cards.
   */
  link?: string;

  /**
   * Props of the LinkList component. Appears at the bottom of `Multilink` or `Feature` card.
   */
  linklist?: LinkListProps;

  /**
   * Items for clickable CTA button, specifically used for `Promo` card.
   */
  cta?: LinkProps;

  /**
   * The image used in a card. Images should be avoided on `Promo`, `Text`, `Factlist`, and `Stat` card.
   */
  image?: string;

  /**
   * Source link for `Stat` cards.
   */
  source?: LinkProps;

  /**
   * Dataset object for the `Data` card. An array of Content (label, copy), Files (optional headline, array of items with label and url), and Links (optional headline, array of items with label and url).
   */
  dataset?: CardDataset;
}

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
