import { HTMLAttributes } from "react";
import { useGlobalSettings } from "../../../hooks";
import { NavigationLinkProps } from "../Navigation.props";
import { NavigationLink } from "../NavigationLink";

type MobileMenuListProps = {
  menu: NavigationLinkProps[];
};

const MobileMenuList = ({
  menu,
}: HTMLAttributes<HTMLUListElement> & MobileMenuListProps) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--nav-mobile-menu`;

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

export { MobileMenuList };
