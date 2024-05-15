import classnames from "classnames";
import { useGlobalSettings } from "../../hooks";
import { SocialMediaProps } from "./SocialMedia.props";

const SocialMedia: React.FC<SocialMediaProps> = ({
  className,
  theme = "light",
  justify = "start",
  headline,
  icons,
  iconSize = "normal",
}) => {
  const { prefix } = useGlobalSettings();

  // Classes to be applied to the outer element
  const baseClass = `${prefix}--social-media`;
  const themeClass = `${baseClass}__theme__${theme}`;
  const justifyClass = `${baseClass}__justify__${justify}`;
  const classes = classnames(baseClass, themeClass, justifyClass, className);

  // Classes to be applied to inner elements
  const headlineClass = `${baseClass}--headline`;
  const listClass = `${baseClass}--list`;
  const listItemClass = `${listClass}--item`;
  const iconClass = `${listItemClass}--icon`;
  const iconSizeClass = `${listItemClass}--icon__${iconSize}`;

  return (
    <div className={classes}>
      {headline && <h5 className={headlineClass}>{headline}</h5>}
      <ul className={listClass}>
        {icons.map((item) => (
          <li className={listItemClass}>
            <a
              title={item.label}
              className={classnames(
                iconClass,
                iconSizeClass,
                `${iconClass}__${item.icon}`
              )}
              href={item.url}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
