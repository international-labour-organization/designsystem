import classNames from "classnames";
import { useGlobalSettings } from "../../../hooks";
import { NavigationLinkProps } from "../Navigation.props";
import { NavigationLink } from "./NavigationLink";

type NavigationMenuProps = {
  className?: string;
  menu: NavigationLinkProps[];
  more?: {
    label?: string;
    onClick: () => void;
    isOpen: boolean;
    controls?: string;
    id?: string;
  };
  light?: boolean;
};

const NavigationMenu = ({
  className,
  menu,
  more,
  light = false,
}: NavigationMenuProps) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--nav-menu`;

  return (
    <div
      className={classNames(baseClass, className, {
        [`${baseClass}--light`]: light,
      })}
    >
      <ul className={`${baseClass}__list`}>
        {menu.map(({ isActive, ...item }) => {
          const active = typeof isActive === "function" ? isActive() : isActive;

          return (
            <li key={item.label?.toString()} className={`${baseClass}__item`}>
              <NavigationLink
                {...item}
                className={classNames({
                  [`${baseClass}__link`]: true,
                  [`${baseClass}__link--active`]: active,
                  [item.className || ""]: item.className,
                })}
              />
            </li>
          );
        })}
      </ul>
      {more && (
        <button
          onClick={more.onClick}
          className={classNames({
            [`${baseClass}__more`]: true,
            [`${baseClass}__more--open`]: more.isOpen,
          })}
          aria-expanded={more.isOpen}
          aria-haspopup="menu"
          aria-controls={more.controls}
        >
          {more.label}
          <span className={`${baseClass}__more-icon`}></span>
        </button>
      )}
    </div>
  );
};

export { NavigationMenu };
