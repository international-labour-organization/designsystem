import { FC } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import classnames from "classnames";
import { BreadcrumbProps } from "./Breadcrumb.props";

const Breadcrumb: FC<BreadcrumbProps> = ({ home, links }) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--breadcrumb`;
  const BreadcrumbClasses = classnames(baseClass);

  return (
    <nav className={BreadcrumbClasses}>
      <ol className={`${baseClass}--items`}>
        <li className={`${baseClass}--item home`}>
          <a className={`${baseClass}--link`} href={home.url}>
            <span className={`${baseClass}--link--label`}>{home.label}</span>
          </a>
        </li>
        {links &&
          links.map((link, index, links) => {
            if (index + 1 === links.length) {
              return (
                <li className={`${baseClass}--item final`} key={index}>
                  <a className={`${baseClass}--link`} href={link.url}>
                    <span className={`${baseClass}--link--label`}>
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            } else {
              return (
                <li className={`${baseClass}--item--context`} key={index}>
                  <ul className={`${baseClass}--items context--menu`}>
                    <li className={`${baseClass}--item`}>
                      <a href={link.url} className={`${baseClass}--link`}>
                        <span className={`${baseClass}--link--label`}>
                          {link.label}
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              );
            }
          })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
