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
  eyebrow?: string;
  size?: Omit<CardSize, "standard">;
  image?: string;
  dataset?: CardDataset;
  columns?: string;
};

export type DetailCardProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  date?: EventDate;
  eventdetails?: string;
  link?: string;
  image?: string;
  size?: Omit<CardSize, "standard">;
};

export type FactlistCardProps = {
  title: string;
  theme?: ThemeTypes;
  size?: Omit<CardSize, "standard">;
  cornercut?: CardCornerType;
  list?: string[];
};

export type FeatureCardProps = {
  isvideo?: boolean;
  eyebrow?: string;
  title: Required<string>;
  theme?: ThemeTypes;
  size?: Omit<CardSize, "standard">;
  date?: EventDate;
  link?: string;
  linklist?: LinkListProps;
  image?: string;
};

export type MultilinkCardProps = {
  isvideo?: boolean;
  eyebrow?: string;
  title: string;
  size?: CardSize;
  alignment?: CardAlignment;
  intro?: string;
  link?: string;
  linklist?: LinkListProps;
  image?: string;
};
export type PromoCardProps = {
  eyebrow?: string;
  title: Required<string>;
  theme?: ThemeTypes;
  size?: CardSize;
  cornercut?: CardCornerType;
  intro?: string;
  link?: string;
  cta?: LinkProps;
};
export type StatCardProps = {
  title: Required<string>;
  color?: CardColor;
  size?: CardSize;
  cornercut?: CardCornerType;
  intro?: string;
  source?: LinkProps;
};
export type TextCardProps = {
  eyebrow?: string;
  title: Required<string>;
  theme?: ThemeTypes;
  size?: CardSize;
  cornercut?: CardCornerType;
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
  eyebrow: Required<string>;

  /**
   * Title field for the card
   */
  title: Required<string>;

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
  type: Required<CardTypes>;

  /**
   * Size of the cards (usually reduces padding). `Wide` on Multilink and Feature cause a two column structure above a desktop breakpoint. Possible options: Wide | Standard | Narrow.
   */
  size?: CardSize;

  /**
   * Specify whether the card has a cut corner. The only cards that use this setting are `Promo` and `Factlist`. Possible options: cornercut | corner.
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
