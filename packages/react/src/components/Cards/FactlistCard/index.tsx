import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { CardProps } from "../Card.props";
import { List, ListItem } from "../../List";

const FactlistCard: FC<CardProps> = ({
  title,
  color,
  theme,
  size,
  cornercut,
  alignment,
  listitems,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;

  const cardClasses = classnames(baseClass, `${baseClass}__type__factlist`, {
    [`${baseClass}__color__${color}`]: color,
    [`${baseClass}__${cornercut}`]: cornercut,
    [`${baseClass}__align__${alignment}`]: alignment,
    [`${baseClass}__size__${size}`]: size,
    [`${baseClass}__theme__${theme}`]: theme,
  });

  return (
    <div className={cardClasses}>
      <div className={`${baseClass}--wrap`}>
        <div className={`${baseClass}--content`}>
          {title && <h5 className={`${baseClass}--title`}>{title}</h5>}
          {listitems && (
            <List alignment="default" ordered="unordered">
              {listitems.map((item, index) => (
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
