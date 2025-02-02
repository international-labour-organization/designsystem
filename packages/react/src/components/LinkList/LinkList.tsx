import { forwardRef } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { LinkListThemes } from "../../types";

export type LinkProps = {
  /**
   * Specify if this link should indent and have a triangle icon
   */
  indented?: boolean;

  /**
   * Specify the label for this link
   */
  label: string;

  /**
   * Specify the url for this link
   */
  url: string;
};

export type LinkGroupProps = {
  /**
   * Specify an optional headline for this link group
   */
  headline?: string;

  /**
   * Specify the links to be displayed in this link group
   */
  links: Array<LinkProps>;
};

export type LinkListProps = {
  /**
   * Specify an optional className to be added to your Link List component.
   */
  className?: string;

  /**
   * Specify a headline for the the Link List
   */
  headline?: string;

  /**
   * Specify the links to be displayed in the Link List
   */
  linkgroup: Array<LinkGroupProps>;

  /**
   * Specify the theme for the Link List
   */
  theme?: LinkListThemes;
};

const LinkList = forwardRef<HTMLDivElement, LinkListProps>(
  ({ className, headline, linkgroup, theme = "light" }, ref) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--link-list`;

    return (
      <div
        ref={ref}
        className={classNames(baseClass, className, `${baseClass}--${theme}`)}
      >
        {headline && <h3 className={`${baseClass}--headline`}>{headline}</h3>}
        <ul className={`${baseClass}--linkgroups`}>
          {linkgroup.map((group, groupIndex) => (
            <li
              key={`linkgroup-${groupIndex}`}
              className={`${baseClass}--linkgroups-item`}
            >
              {group.headline && (
                <h4 className={`${baseClass}--links--headline`}>
                  {group.headline}
                </h4>
              )}
              <ul className={`${baseClass}--links`}>
                {group.links.map((link, linkIndex) => (
                  <li
                    key={`link-${linkIndex}`}
                    className={classNames(`${baseClass}--links--item`, {
                      indented: link.indented,
                    })}
                  >
                    <a href={link.url} className={`${baseClass}--link`}>
                      <span className={`${baseClass}--label`}>
                        {link.label}
                      </span>
                      <span className={`${baseClass}--icon`}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export { LinkList };
