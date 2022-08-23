import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { HeroCardProps } from "./HeroCard.props";

const HeroCard: FC<HeroCardProps> = ({
  className,
  alignment,
  datecopy,
  eyebrow,
  intro,
  socials,
  title,
  theme = "light",
  types = "article",
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--hero-card`;
  const heroCardClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${alignment}`]: alignment,
    [`${baseClass}--${theme}`]: theme,
    [`${baseClass}--${types}`]: types,
  });

  return (
    <div className={heroCardClasses}>
      {eyebrow && <p className={`${baseClass}--eyebrow`}>{eyebrow}</p>}
      {title && <h2 className={`${baseClass}--title`}>{title}</h2>}
      {datecopy && <p className={`${baseClass}--datecopy`}>{datecopy}</p>}
      {intro && <p className={`${baseClass}--intro`}>{intro}</p>}
      <ul className={`${baseClass}--list`}>
        {socials &&
          socials.map((item: any, index: any) => {
            return (
              <li className={`${baseClass}--list--item`} key={index}>
                <a
                  className={`${baseClass}--link icon icon--${item.icon}`}
                  href={item.url}
                  title={item.label}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HeroCard;
