import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ProfileProps } from "./Profile.props";

const Profile: FC<ProfileProps> = ({
  avatar,
  className,
  description,
  link,
  name,
  role,
  theme = "light",
  size = "large",
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--profile`;
  const profileClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}__theme__${theme}`]: theme,
    [`${baseClass}__size__${size}`]: size,
  });

  return (
    <figure className={profileClasses}>
      <img
        className={`${baseClass}--avatar`}
        src={avatar}
        alt={`Avatar for ${name}`}
      />
      <figcaption>
        <div className={`${baseClass}--figcaption--content`}>
          <div className={`${baseClass}--name`}>{name}</div>
          {role && <div className={`${baseClass}--role`}>{role}</div>}
        </div>
      </figcaption>
      {description && (
        <p className={`${baseClass}--description`}>{description}</p>
      )}
      {link && (
        <div className={`${baseClass}--link`}>
          <a href={link.url} target="__blank" rel="noopener noreferrer">
            <span className={`${baseClass}--link--label`}>{link.label}</span>
          </a>
        </div>
      )}
    </figure>
  );
};

export default Profile;
