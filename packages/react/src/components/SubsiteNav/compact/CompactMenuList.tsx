import { useGlobalSettings } from "../../../hooks";
import { MenuItem } from "../SubsiteNav";

type CompactMenuListProps = {
  menu: MenuItem[];
};

const CompactMenuList = ({ menu }: CompactMenuListProps) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--nav-compact-menu`;

  return (
    <ul className={`${baseClass}`}>
      {menu.map((item, index) => (
        <li key={index} className={`${baseClass}__item`}>
          <a href={item.handler as string} className={`${baseClass}__link`}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { CompactMenuList };
