import { ReactNode } from "react";
import { headingLevel, typographyColors } from "../../types";

export interface HeadingProps {
  /**
   * Specify the content of your heading.
   */
  children: ReactNode;

  /**
   * Specify the heading level the heading. Default level is h3.
   */
  headingLevel?: headingLevel;

  /**
   * Specify an optional className to be added to your heading.
   */
  className?: string;

  /**
   * Specify an optional color of Heading.
   */
  color?: typographyColors;
}
