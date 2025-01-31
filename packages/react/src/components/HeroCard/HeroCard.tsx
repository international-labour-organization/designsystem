import { forwardRef } from "react";
import classNames from "classnames";

import { ThemeTypes } from "../../types";
import { SocialMediaProps, SocialMedia } from "../SocialMedia";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { HeroCardTitle } from "./HeroCardTitle";

export type HeroCardProps = {
  /**
   * Specify whether the background should be solid, transparent or semi-transparent
   */
  background?: "solid" | "transparent" | "semi-transparent";

  /**
   * Specify an optional className to be added to your Hero component.
   */
  className?: string;

  /**
   * Whether the card should have a cornercut or not
   */
  cornercut?: boolean;

  /**
   * date copy for the hero card
   */
  datecopy?: string;

  /**
   * eyebrow copy for the hero card
   */
  eyebrow?: string;

  /**
   * body copy for the hero card
   */
  intro?: string;

  /**
   * Specify the links to be displayed in this link group
   */
  socialmedia?: SocialMediaProps;

  /**
   * Title for the page
   */
  title: string;

  /**
   * Theme for the card
   */
  theme?: ThemeTypes;

  /**
   * The link of the card's title if it has one
   */
  url?: string;
};

const HeroCard = forwardRef<HTMLDivElement, HeroCardProps>(
  (
    {
      className,
      theme = "dark",
      background = "solid",
      cornercut = true,
      eyebrow,
      title,
      url,
      intro,
      datecopy,
      socialmedia,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--hero-card`;

    return (
      <div
        ref={ref}
        className={classNames({
          [baseClass]: true,
          [`${baseClass}__background__${background}`]: true,
          [`${baseClass}__theme__${theme}`]: true,
          [`${baseClass}__cornercut`]: cornercut,
          className,
        })}
      >
        {eyebrow && <p className={`${baseClass}--eyebrow`}>{eyebrow}</p>}
        <HeroCardTitle title={title} url={url} />
        {intro && <p className={`${baseClass}--intro`}>{intro}</p>}
        {datecopy && <p className={`${baseClass}--datecopy`}>{datecopy}</p>}
        {socialmedia && <SocialMedia {...socialmedia} theme={theme} />}
      </div>
    );
  }
);

export { HeroCard };
