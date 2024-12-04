import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { LinkListProps } from "./LinkList.props";

const LinkList: FC<LinkListProps> = ({
  className,
  headline,
  linkgroup,
  theme,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--link-list`;
  const linkListClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass + "--" + (theme && theme === "dark" ? theme : "light")}`]:
      true,
  });

  return (
    <div className={linkListClasses}>
      {headline && <h3 className={`${baseClass}--headline`}>{headline}</h3>}
      <ul className={`${baseClass}--linkgroups`}>
        {linkgroup &&
          linkgroup.map((linkset, i) => (
            <li
              className={`${baseClass}--linkgroups-item`}
              key={`${baseClass}--linkgroups-item-${i}`}
            >
              {linkset.headline && (
                <h4 className={`${baseClass}--links--headline`}>
                  {linkset.headline}
                </h4>
              )}
              <ul className={`${baseClass}--links`}>
                {linkset.links &&
                  linkset.links.map((link, i) => (
                    <li
                      className={`${baseClass}--links--item${
                        link.indented ? " indented" : ""
                      }`}
                      key={`${baseClass}--links--item-${i}`}
                    >
                      <a href={link.url} className={`${baseClass}--link`}>
                        <span className={`${baseClass}--label`}>
                          {link.label}
                        </span>
                        <span className={`${baseClass}--icon`} />
                      </a>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LinkList;
