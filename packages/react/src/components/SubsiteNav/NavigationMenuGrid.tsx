import { useGlobalSettings } from "../../hooks";
import { MenuItem } from "./SubsiteNav";

type NavigationMenuGridProps = {
  menu: MenuItem[];
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
            <a
              key={item.label}
              className={`${baseClass}__item`}
              href={item.handler as string}
            >
              {item.label}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export { NavigationMenuGrid };
