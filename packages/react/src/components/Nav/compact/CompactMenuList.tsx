import { HTMLAttributes } from "react";
import { useGlobalSettings } from "../../../hooks";
import { NavigationLinkProps } from "../Navigation.props";
import { NavigationLink } from "../NavigationLink";

type CompactMenuListProps = {
  menu: NavigationLinkProps[];
};

const CompactMenuList = ({
  menu,
}: HTMLAttributes<HTMLUListElement> & CompactMenuListProps) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--nav-compact-menu`;

  return (
    <ul className={`${baseClass}`}>
      {menu.map((item, index) => (
        <li key={index} className={`${baseClass}__item`}>
          <NavigationLink
            label={item.label}
            href={item.href as string}
            className={`${baseClass}__link`}
          />
          {item.isActive && <span className={`${baseClass}__marked`} />}
        </li>
      ))}
    </ul>
  );
};

export { CompactMenuList };
