import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { CardProps } from "../Card.props";
import { Link } from "../../Link";

const StatCard: FC<CardProps> = ({
  title,
  color,
  theme,
  size,
  cornercut,
  alignment,
  intro,
  source,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;

  const cardClasses = classnames(baseClass, `${baseClass}__type__stat`, {
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
          {intro && <p className={`${baseClass}--intro`}>{intro}</p>}
          {source && (
            <Link theme={theme} url={source.url}>
              {source.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
