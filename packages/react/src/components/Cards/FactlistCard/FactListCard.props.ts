import { ThemeTypes, CardSize } from "../../../types";

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
