import { FC, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ContextMenu } from "../ContextMenu";
import { LocalNavProps } from "./LocalNav.props";
import { brand } from "@ilo-org/themes/tokens/brand/base.json";

const LocalNav: FC<LocalNavProps> = ({
  background,
  logo,
  siteurl,
  primarynav,
  mainlink,
  menucloselabel,
  languagelabel,
  languagecontextmenu,
  isMenuOpen,
}) => {
  const { prefix } = useGlobalSettings();

  const [toggleOpen, setToggleOpen] = useState(isMenuOpen);
  const baseClass = `${prefix}--header`;
  const bg = background ? background : brand["ilo-dark-blue"].value;

  const handleToggle = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <header className={`${baseClass} ${baseClass}--local`}>
      <div
        className={`${baseClass}--utility-bar ${baseClass}--utility-bar--local`}
        style={{ background: bg }}
      >
        <nav className={`${prefix}--nav--local`}>
          <div className={`${prefix}--nav--local--logo-wrapper`}>
            <a href={siteurl} className={`${prefix}--nav--local--logo-link`}>
              <img
                src={logo}
                alt="ILO Logo"
                className={`${prefix}--nav--local--logo`}
              />
            </a>
          </div>
          <ul className={`${prefix}--nav--local--set`}>
            {primarynav?.items &&
              primarynav.items.map((item, index) => (
                <li className={`${prefix}--nav--local--item`} key={index}>
                  <a href={item.url} className={`${prefix}--nav--local--link`}>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <div className={`${prefix}--language-switcher`}>
          <div className={`${prefix}--language-switcher--wrap`}>
            {mainlink && (
              <span className={`${prefix}--language-switcher--link--wrap`}>
                <a
                  href={mainlink.url}
                  className={`${prefix}--language-switcher--link`}
                >
                  {mainlink.label}
                </a>
              </span>
            )}
            <button
              className={`${prefix}--language-switcher--button`}
              type="button"
            >
              {languagelabel}
            </button>
            <ContextMenu links={languagecontextmenu?.links}></ContextMenu>
          </div>
        </div>
        <button className={`${baseClass}--menu`} onClick={handleToggle}>
          Menu
        </button>
        {isMenuOpen && (
          <div className={`${baseClass}--navigation`}>
            <div className={`${baseClass}--inner`}>
              <div className={`${prefix}--mobile--nav`}>
                <div className={`${prefix}--mobile--nav--logo`}>
                  <a href={siteurl} className={`${baseClass}--logo-link`}>
                    <img
                      className={`${baseClass}--logo`}
                      src={logo}
                      alt="ILO Logo"
                    />
                  </a>
                  <button
                    className={`${baseClass}--menu--close`}
                    onClick={handleToggle}
                  >
                    {menucloselabel}
                  </button>
                </div>
                <div className={`${prefix}--mobile--nav--language--switcher`}>
                  <button
                    className={`${prefix}--mobile--nav--language--switcher--button`}
                    type="button"
                  >
                    {languagelabel}
                  </button>
                </div>
                <div className={`${prefix}--mobile--nav--language--select`}>
                  <div className={`${baseClass}--inner`}>
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
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default LocalNav;
