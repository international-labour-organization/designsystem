import { forwardRef } from "react";
import classnames from "classnames";

import { CardSize, HeadingTypes, ThemeTypes } from "../../types";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { List } from "../List";

export type FactListCardProps = {
  /**
   * The title of the card
   */
  title?: string;

  /**
   * HTML element used for the title
   */
  titleLevel?: HeadingTypes;

  /**
   * Will render the card to appear on light or dark backgrounds
   */
  theme?: ThemeTypes;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "standard">;

  /**
   * The list of facts to display
   */
  list: string[];

  /**
   * Specify an optional className to be added to your FactListCard.
   */
  className?: string;
};

const FactListCard = forwardRef<HTMLDivElement, FactListCardProps>(
  (
    {
      title,
      theme = "light",
      size = "narrow",
      list,
      titleLevel: TitleElement = "p",
      className,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--card`;

    const cardClasses = classnames(
      baseClass,
      `${baseClass}__type__factlist`,
      className,
      {
        [`${baseClass}__size__${size as string}`]: size,
        [`${baseClass}__theme__${theme}`]: theme,
      }
    );

    return (
      <div className={cardClasses} ref={ref}>
        <div className={`${baseClass}--wrap`}>
          <div className={`${baseClass}--content`}>
            {title && (
              <TitleElement className={`${prefix}--card--title`}>
                {title}
              </TitleElement>
            )}
            <List alignment="default" ordered="unordered" theme={theme}>
              {list.map((item) => (
                <List.Item key={item}>
                  <p>{item}</p>
                </List.Item>
              ))}
            </List>
          </div>
        </div>
      </div>
    );
  }
);

export { FactListCard };
