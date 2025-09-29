import { HTMLAttributes } from "react";
import { useGlobalSettings } from "../../../hooks";
import { NavigationLinkProps } from "../Navigation.props";
import { NavigationLink } from "../internals/NavigationLink";

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
      {menu.map((item, index) => {
        const isActive =
          typeof item.isActive === "function" ? item.isActive() : item.isActive;

        return (
          <li key={index} className={`${baseClass}__item`}>
            <NavigationLink
              label={item.label}
              href={item.href as string}
              className={`${baseClass}__link`}
            />
            {isActive && <span className={`${baseClass}__marked`} />}
          </li>
        );
      })}
    </ul>
  );
};

export { MobileMenuList };
