import { FC, useState, useEffect } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import classnames from "classnames";
import { BreadcrumbProps } from "./Breadcrumb.props";
import { ContextMenu } from "../ContextMenu";

const Breadcrumb: FC<BreadcrumbProps> = ({ home, links }) => {
  const { prefix } = useGlobalSettings();

  const [showContextMenu, enableContextMenu] = useState(false);
  const [toggleMenuOpen, setContextMenuToggleOpen] = useState(false);

  const handleScreenResize = () => {
    enableContextMenu(window.innerWidth <= 1024); // turn on context menu when screen is resized to a smaller size
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    handleScreenResize();

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  const handleContextMenuToggle = () => {
    setContextMenuToggleOpen(!toggleMenuOpen);
  };

  const showContext = links.length > 4 || showContextMenu ? true : false;

  const baseClass = `${prefix}--breadcrumb`;
  const BreadcrumbClasses = classnames(baseClass);

  const lastLink = links[links.length - 1];
  const menuLinks = links.slice(0, -1);

  return (
    <nav
      className={`${BreadcrumbClasses} ${showContext ? " contextmenu" : ""}`}
    >
      <ol className={`${baseClass}--items`}>
        <li className={`${baseClass}--item home`}>
          <a className={`${baseClass}--link`} href={home.url}>
            <span className={`${baseClass}--link--label`}>{home.label}</span>
          </a>
        </li>
        <li
          className={`${baseClass}--item--context`}
          onClick={handleContextMenuToggle}
        >
          <ul
            className={`${baseClass}--items context--menu ${
              toggleMenuOpen ? " open" : ""
            }`}
          >
            {showContext && <ContextMenu links={menuLinks}></ContextMenu>}
            {!showContext &&
              menuLinks.map((link, index) => (
                <li className={`${baseClass}--item`} key={index}>
                  <a href={link.url} className={`${baseClass}--link`}>
                    <span className={`${baseClass}--link--label`}>
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
          </ul>
        </li>
        <li className={`${baseClass}--item final`}>
          <a className={`${baseClass}--link`} href={lastLink.url}>
            <span className={`${baseClass}--link--label`}>
              {lastLink.label}
            </span>
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
