import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../../hooks/useGlobalSettings";
import { StatCardProps } from "./StatCard.props";
import { Link } from "../../Link";

const StatCard: FC<StatCardProps> = ({
  title,
  color,
  size = "standard",
  intro,
  source,
  titleElement: TitleElement,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--card`;

  const cardClasses = classnames(baseClass, `${baseClass}__type__stat`, {
    [`${baseClass}__color__${color}`]: color,
    [`${baseClass}__size__${size}`]: size,
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
          {intro && <p className={`${baseClass}--intro`}>{intro}</p>}
          {source && <Link url={source.url}>{source.label}</Link>}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
