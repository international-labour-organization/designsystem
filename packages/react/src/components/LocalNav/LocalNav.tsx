import { FC } from "react";
// import useGlobalSettings from "../../hooks/useGlobalSettings";
// import { ContextMenu } from "../ContextMenu";
import { LocalNavProps } from "./LocalNav.props";
// import { brand } from "@ilo-org/themes/tokens/brand/base.json";
// import classnames from "classnames";
// import { Logo } from "../Logo";

// const DEFAULT_LOGO_SIZE = 280;

const LocalNav: FC<LocalNavProps> = () =>
  // {
  // background,
  // logo,
  // primarynav,
  // mainlink,
  // menucloselabel,
  // languagelabel,
  // languagecontextmenu,
  // }
  {
    return null;
    // const { prefix } = useGlobalSettings();

    // const [toggleMenuOpen, setMenuToggleOpen] = useState(false);
    // const [toggleLanguageOpen, setLanguageToggleOpen] = useState(false);

    // const baseClass = `${prefix}--header`;
    // const localNavClasses = classnames(baseClass, `${baseClass}--local`, {
    //   [`${prefix}--mobile--open`]: toggleMenuOpen,
    //   [`${prefix}--select--open`]: toggleLanguageOpen,
    // });
    // const bg = background ? background : brand["ilo-dark-blue"].value;

    // const handleMenuToggle = () => {
    //   setMenuToggleOpen(!toggleMenuOpen);
    // };

    // const handleLanguageToggle = () => {
    //   setLanguageToggleOpen(!toggleLanguageOpen);
    // };

    // return (
    //   <header className={localNavClasses}>
    //     <div
    //       className={`${baseClass}--utility-bar ${baseClass}--utility-bar--local`}
    //       style={{ background: bg }}
    //     >
    //       <nav className={`${prefix}--nav--local`}>
    //         <div className={`${prefix}--nav--local--logo-wrapper`}>
    //           <Logo
    //             url={logo.url}
    //             src={logo.src}
    //             alt={logo.alt}
    //             className={`${prefix}--nav--local--logo`}
    //             subbrand={logo.subbrand}
    //             theme={logo.theme}
    //             size={logo.size || DEFAULT_LOGO_SIZE}
    //           />
    //         </div>
    //         <ul className={`${prefix}--nav--local--set`}>
    //           {primarynav?.items &&
    //             primarynav.items.map((item, index) => (
    //               <li className={`${prefix}--nav--local--item`} key={index}>
    //                 <a href={item.url} className={`${prefix}--nav--local--link`}>
    //                   <span>{item.label}</span>
    //                 </a>
    //               </li>
    //             ))}
    //         </ul>
    //       </nav>
    //       <div className={`${prefix}--language-switcher`}>
    //         <div className={`${prefix}--language-switcher--wrap`}>
    //           {mainlink && (
    //             <span className={`${prefix}--language-switcher--link--wrap`}>
    //               <a
    //                 href={mainlink.url}
    //                 className={`${prefix}--language-switcher--link`}
    //               >
    //                 {mainlink.label}
    //               </a>
    //             </span>
    //           )}
    //           <button
    //             className={`${prefix}--language-switcher--button`}
    //             type="button"
    //           >
    //             {languagelabel}
    //           </button>
    //           <ContextMenu links={languagecontextmenu?.links}></ContextMenu>
    //         </div>
    //       </div>
    //       <button className={`${baseClass}--menu`} onClick={handleMenuToggle}>
    //         Menu
    //       </button>
    //       <div className={`${baseClass}--navigation`}>
    //         <div className={`${baseClass}--inner`}>
    //           <div className={`${prefix}--mobile--nav`}>
    //             <div className={`${prefix}--mobile--nav--logo`}>
    //               <Logo
    //                 url={logo.url}
    //                 src={logo.src}
    //                 alt={logo.alt}
    //                 className={`${prefix}--nav--local--logo`}
    //                 subbrand={logo.subbrand}
    //                 theme={logo.theme}
    //                 size={logo.size || DEFAULT_LOGO_SIZE}
    //               />
    //               <button
    //                 className={`${baseClass}--menu--close`}
    //                 onClick={handleMenuToggle}
    //               >
    //                 {menucloselabel}
    //               </button>
    //             </div>
    //             <div className={`${prefix}--mobile--nav--language--switcher`}>
    //               <button
    //                 className={`${prefix}--mobile--nav--language--switcher--button`}
    //                 onClick={handleLanguageToggle}
    //                 type="button"
    //               >
    //                 {languagelabel}
    //               </button>
    //             </div>
    //             <div className={`${prefix}--mobile--nav--language--select`}>
    //               <div className={`${baseClass}--inner`}>
    //                 <div className={`${prefix}--mobile--subnav--menu`}>
    //                   <button
    //                     className={`${prefix}--mobile--subnav--back`}
    //                     onClick={handleLanguageToggle}
    //                     type="button"
    //                   ></button>
    //                   <button
    //                     className={`${baseClass}--menu--close`}
    //                     onClick={handleMenuToggle}
    //                   >
    //                     Close
    //                   </button>
    //                   <h6 className={`${prefix}--mobile--subnav--label`}>
    //                     {languagelabel}
    //                   </h6>
    //                 </div>
    //                 <ul className={`${prefix}--nav--set`}>
    //                   {languagecontextmenu?.links &&
    //                     languagecontextmenu.links.map((item, index) => (
    //                       <li className={`${prefix}--nav--items`} key={index}>
    //                         <a
    //                           href={item.url}
    //                           className={`${prefix}--nav--link ${prefix}--nav--language`}
    //                         >
    //                           {item.label}
    //                         </a>
    //                       </li>
    //                     ))}
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //           <nav
    //             className={`${prefix}--nav`}
    //             aria-labelledby="primary-navigation"
    //           >
    //             <h2 className={`${prefix}--nav--label`} id="primary-navigation">
    //               {primarynav?.navlabel}
    //             </h2>
    //             <ul className={`${prefix}--nav--set`}>
    //               {primarynav?.items &&
    //                 primarynav.items.map((item, index) => (
    //                   <li className={`${prefix}--nav--items`} key={index}>
    //                     <a href={item.url} className={`${prefix}--nav--link`}>
    //                       {item.label}
    //                     </a>
    //                   </li>
    //                 ))}
    //             </ul>
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    // );
  };

export default LocalNav;
