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
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--profile`;
  const profileClasses = classNames(className, {
    [baseClass]: true,
  });

  return (
    <figure className={profileClasses}>
      <img
        className={`${baseClass}--avatar`}
        src={avatar}
        alt={`Avatar for ${name}`}
      />
      <figcaption className={`${baseClass}--contents`}>
        <span className={`${baseClass}--name id`}>{name}</span>
        {role && <span className={`${baseClass}--role id`}>{role}</span>}
        {description && (
          <p className={`${baseClass}--description info`}>{description}</p>
        )}
        {link && (
          <a className={`${baseClass}--link info`} href={link.url}>
            <span>{link.label}</span>
          </a>
        )}
      </figcaption>
    </figure>
  );
};

export default Profile;
