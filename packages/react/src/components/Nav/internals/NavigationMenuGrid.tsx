import { useGlobalSettings } from "../../../hooks";
import { NavigationLinkProps } from "../Navigation.props";
import { NavigationLink } from "./NavigationLink";

type NavigationMenuGridProps = {
  menu: NavigationLinkProps[];
};

const NavigationMenuGrid = ({ menu }: NavigationMenuGridProps) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--nav-menu-grid`;

  const chunked = [];
  for (let i = 0; i < menu.length; i += 5) {
    chunked.push(menu.slice(i, i + 5));
  }

  return (
    <div className={baseClass}>
      {chunked.map((chunk, columnIndex) => (
        <div key={columnIndex} className={`${baseClass}__column`}>
          {chunk.map((item) => (
            <NavigationLink
              key={item.label?.toString()}
              className={`${baseClass}__item`}
              href={item.href}
              label={item.label}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export { NavigationMenuGrid };
