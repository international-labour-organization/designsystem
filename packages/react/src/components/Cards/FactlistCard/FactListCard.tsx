import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { FactlistCardProps } from "./FactListCard.props";
import { List, ListItem } from "../../List";

const FactlistCard: FC<FactlistCardProps> = ({
  title,
  theme,
  size = "narrow",
  list,
  titleLevel: TitleElement,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;

  const cardClasses = classnames(baseClass, `${baseClass}__type__factlist`, {
    [`${baseClass}__size__${size}`]: size,
    [`${baseClass}__theme__${theme}`]: theme,
  });

  return (
    <div className={cardClasses}>
      <div className={`${baseClass}--wrap`}>
        <div className={`${baseClass}--content`}>
          {title && TitleElement ? (
            <TitleElement className={`${baseClass}--title`}>
              {title}
            </TitleElement>
          ) : (
            <p className={`${baseClass}--title`}>{title}</p>
          )}
          {list && (
            <List alignment="default" ordered="unordered">
              {list.map((item, index) => (
                <ListItem id={`list${index}`}>
                  <p>{item}</p>
                </ListItem>
              ))}
            </List>
          )}
        </div>
      </div>
    </div>
  );
};

export default FactlistCard;
