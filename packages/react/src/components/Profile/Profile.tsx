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
        <span className={`${baseClass}--name`}>{name}</span>
        {role && <span className={`${baseClass}--role`}>{role}</span>}
        {description && (
          <span className={`${baseClass}--description`}>{description}</span>
        )}
        {link && (
          <a className={`${baseClass}--link`} href={link.url}>
            {link.label}
          </a>
        )}
      </figcaption>
    </figure>
  );
};

export default Profile;
