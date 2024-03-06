import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { FactlistCardProps } from "../Card.props";
import { List, ListItem } from "../../List";

const FactlistCard: FC<FactlistCardProps> = ({
  title,
  theme = "narrow",
  size,
  list,
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
          {title && <h5 className={`${baseClass}--title`}>{title}</h5>}
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
