import { FC, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ContextMenu } from "../ContextMenu";
import { SearchField } from "../SearchField";
import { NavigationProps } from "./Navigation.props";
import classnames from "classnames";

const Navigation: FC<NavigationProps> = ({
  logo,
  mobilelogo,
  siteurl,
  tagline,
  primarynav,
  subnav,
  menulabel,
  menucloselabel,
  searchlabel,
  searchfield,
  languagelabel,
  languagecontextmenu,
}) => {
  const { prefix } = useGlobalSettings();

  const [toggleMenuOpen, setMenuToggleOpen] = useState(false);
  const [toggleSearchOpen, setSearchToggleOpen] = useState(false);
  const [searchTabbable, setSearchTabbable] = useState(false);
  const [toggleSubnavOpen, setSubnavToggleOpen] = useState(false);
  const [subnavTabbable, setSubnavTabbable] = useState(false);
  const [toggleLanguageOpen, setLanguageToggleOpen] = useState(false);

  const baseClass = `${prefix}--header`;
  const NavigationClasses = classnames(baseClass, {
    [`${prefix}--mobile--open`]: toggleMenuOpen,
    [`${prefix}--select--open`]: toggleLanguageOpen,
    [`${prefix}--search--open`]: toggleSearchOpen,
    [`${prefix}--subnav--open`]: toggleSubnavOpen,
    [`${prefix}--context--open`]: toggleLanguageOpen,
  });

  const handleMenuToggle = () => {
    setMenuToggleOpen(!toggleMenuOpen);
  };

  const handleLanguageToggle = () => {
    setLanguageToggleOpen(!toggleLanguageOpen);
  };

  const handleSearchToggle = () => {
    if (toggleSearchOpen) {
      setSearchToggleOpen(false);
      setTimeout(() => setSearchTabbable(false), 225);
      return;
    }
    setSearchTabbable(true);
    setTimeout(() => setSearchToggleOpen(true), 10);
  };

  const handleSubnavToggle = () => {
    if (toggleSubnavOpen) {
      setSubnavToggleOpen(false);
      setTimeout(() => setSubnavTabbable(false), 125);
      return;
    }
    setSubnavTabbable(true);
    setTimeout(() => setSubnavToggleOpen(true), 10);
  };

  return (
    <header className={NavigationClasses}>
      <div className={`${baseClass}--utility-bar`}>
        <div className={`${prefix}--language-switcher`}>
          <div className={`${prefix}--language-switcher--wrap`}>
            <button
              className={`${prefix}--language-switcher--button`}
              type="button"
            >
              {languagelabel}
            </button>
            <ContextMenu links={languagecontextmenu?.links}></ContextMenu>
          </div>
        </div>
      </div>
      <div className={`${baseClass}--logo-bar`}>
        <div className={`${baseClass}--inner ${prefix}--container`}>
          <a href={siteurl} className={`${baseClass}--logo-link`}>
            <img className={`${baseClass}--logo`} src={logo} alt="ILO Logo" />
          </a>
          <p className={`${baseClass}--logo-tagline`}>
            {tagline?.tag}
            <span className={`${baseClass}--logo-tagline--small`}>
              {tagline?.small}
            </span>
          </p>
          <button className={`${baseClass}--menu`} onClick={handleMenuToggle}>
            {menulabel}
          </button>
        </div>
      </div>
      <div className={`${baseClass}--navigation`}>
        <div className={`${baseClass}--inner ${prefix}--container`}>
          <div className={`${prefix}--mobile--nav`}>
            <div className={`${prefix}--mobile--nav--logo`}>
              <a href={siteurl} className={`${baseClass}--logo-link`}>
                <img
                  className={`${baseClass}--logo`}
                  src={mobilelogo}
                  alt="ILO Logo"
                />
              </a>
              <button
                className={`${baseClass}--menu--close`}
                onClick={handleMenuToggle}
              >
                {menucloselabel}
              </button>
            </div>
            <div className={`${prefix}--mobile--nav--search`}>
              <SearchField
                input={searchfield?.input}
                action={searchfield?.action}
              ></SearchField>
            </div>
            <div className={`${prefix}--mobile--nav--language--switcher`}>
              <button
                className={`${prefix}--mobile--nav--language--switcher--button`}
                onClick={handleLanguageToggle}
                type="button"
              >
                {languagelabel}
              </button>
            </div>
            <div className={`${prefix}--mobile--nav--language--select`}>
              <div className={`${baseClass}--inner ${prefix}--container`}>
                <div className={`${prefix}--mobile--subnav--menu`}>
                  <button
                    className={`${prefix}--mobile--subnav--back`}
                    onClick={handleLanguageToggle}
                    type="button"
                  >
                    {subnav?.mobilebacklabel}
                  </button>
                  <button
                    className={`${baseClass}--menu--close`}
                    onClick={handleMenuToggle}
                  >
                    {subnav?.mobilecloselabel}
                  </button>
                  <h6 className={`${prefix}--mobile--subnav--label`}>
                    {languagelabel}
                  </h6>
                </div>
                <ul className={`${prefix}--nav--set`}>
                  {languagecontextmenu?.links &&
                    languagecontextmenu.links.map((item, index) => (
                      <li className={`${prefix}--nav--items`} key={index}>
                        <a
                          href={item.url}
                          className={`${prefix}--nav--link ${prefix}--nav--language`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <nav
            className={`${prefix}--nav`}
            aria-labelledby="primary-navigation"
          >
            <h2 className={`${prefix}--nav--label`} id="primary-navigation">
              {primarynav?.navlabel}
            </h2>
            <ul className={`${prefix}--nav--set`}>
              {primarynav?.items &&
                primarynav.items.map((item, index) => (
                  <li className={`${prefix}--nav--items`} key={index}>
                    <a href={item.url} className={`${prefix}--nav--link`}>
                      {item.label}
                    </a>
                  </li>
                ))}
              {subnav && (
                <li className={`${prefix}--nav--items`}>
                  <button
                    className={`${prefix}--nav--trigger`}
                    onClick={handleSubnavToggle}
                  >
                    {subnav.buttonlabel}
                  </button>
                </li>
              )}
            </ul>
          </nav>
          <div className={`${prefix}--search`}>
            <button
              className={`${prefix}--search--button`}
              type="button"
              onClick={handleSearchToggle}
            >
              {searchlabel}
            </button>
          </div>
        </div>
        {subnav && (
          <nav
            style={{ display: subnavTabbable ? "block" : "none" }}
            className={`${prefix}--subnav`}
            aria-labelledby="secondary-navigation"
          >
            <div className={`${prefix}--subnav--inner ${prefix}--container`}>
              <div className={`${prefix}--mobile--subnav`}>
                <div className={`${prefix}--mobile--subnav--menu`}>
                  <button
                    className={`${prefix}--mobile--subnav--back`}
                    onClick={handleSubnavToggle}
                    type="button"
                  >
                    {subnav.mobilebacklabel}
                  </button>
                  <button
                    className={`${prefix}--header--menu--close`}
                    onClick={handleMenuToggle}
                  >
                    {subnav.mobilecloselabel}
                  </button>
                  <h6 className={`${prefix}--mobile--subnav--label`}>
                    {subnav.buttonlabel}
                  </h6>
                </div>
              </div>
              <h2 className={`${prefix}--nav--label`} id="secondary-navigation">
                {subnav.navlabel}
              </h2>
              <ul className={`${prefix}--subnav--set`}>
                {subnav?.items &&
                  subnav.items.map((item, index) => (
                    <li className={`${prefix}--subnav--items`} key={index}>
                      <a href={item.url} className={`${prefix}--subnav--link`}>
                        {item.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </nav>
        )}
        <div
          style={{ display: searchTabbable ? "block" : "none" }}
          className={`${prefix}--search-box`}
        >
          <div className={`${prefix}--header--inner ${prefix}--container`}>
            <SearchField
              input={searchfield?.input}
              action={searchfield?.action}
            ></SearchField>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
