import { CardSize } from "../../../types";
import { LinkProps } from "../../LinkList/LinkList.props";

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
