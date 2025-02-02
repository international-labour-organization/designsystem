import { forwardRef } from "react";
import classnames from "classnames";

import { LinkGroupProps, LinkList, LinkProps } from "../LinkList";
import { SocialMediaProps, SocialMedia } from "../SocialMedia";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { Button } from "../Button";

export type FooterProps = {
  /**
   * Specify an optional className to be added to your Footer.
   */
  className?: string;

  /**
   * Props for the logo of the Footer
   */
  logo: string;

  /**
   * Specify the tagline for the Footer
   */
  tagline?: string;

  /**
   * Specify the subtagline for the Footer
   */
  subtagline?: string;

  /**
   * Specify the address for the Footer, in multiple lines
   */
  address?: string[];

  /**
   * Specify the linkgroup for the Footer's links
   */
  linkgroup: Required<Array<LinkGroupProps>>;

  /**
   * Specify the links to be displayed in this link group
   */
  socialmedia?: SocialMediaProps;

  /**
   * Specify the legal statement for the Footer
   */
  subscribe?: LinkProps;

  /**
   * Specify the legal statement for the Footer
   */
  legal?: string;

  /**
   * Specify the secondary links for the Footer
   */
  secondarylinks?: LinkProps[];

  /**
   * Specify the anchor link for the Footer
   */
  anchorlink?: LinkProps;
};

const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      className,
      logo,
      tagline,
      subtagline,
      address,
      linkgroup,
      socialmedia,
      subscribe,
      legal,
      secondarylinks,
      anchorlink,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--footer`;
    const footerClasses = classnames(className, baseClass);

    return (
      <footer className={footerClasses} ref={ref}>
        <div className={`${baseClass}--main ${prefix}--container`}>
          <div className="site--info">
            {logo && (
              <img className={`${baseClass}--logo`} src={logo} alt="ILO Logo" />
            )}
            {tagline && <h3 className={`${baseClass}--headline`}>{tagline}</h3>}
            {subtagline && (
              <h4 className={`${baseClass}--subhead`}>{subtagline}</h4>
            )}
          </div>
          {address && (
            <div className="address">
              {address.map((line, index) => (
                <p key={`address-line-${index}`} className="address--line">
                  {line}
                </p>
              ))}
            </div>
          )}
          {linkgroup && (
            <nav className="links">
              <LinkList linkgroup={linkgroup} theme="dark" />
            </nav>
          )}
          {socialmedia && (
            <div className="connect">
              <div className="social--links">
                <SocialMedia {...socialmedia} theme="dark" />
              </div>
            </div>
          )}
          {subscribe && (
            <div className="subscribe">
              <Button
                link={{
                  url: subscribe.url,
                  label: subscribe.label,
                  target: "_blank",
                }}
                type="primary"
                size="large"
              />
            </div>
          )}
        </div>
        <div className={`${baseClass}--secondary`}>
          <div className={`${prefix}--container`}>
            <div className={`${baseClass}--secondary--details`}>
              {legal && <div className="legal">{legal}</div>}
              {secondarylinks && (
                <nav className="secondarylinks">
                  <ul className="secondarylinks--list">
                    {secondarylinks.map((link, index) => (
                      <li
                        className="secondarylinks--list--item"
                        key={`secondary-link-${index}`}
                      >
                        <a
                          href={link.url}
                          className="secondarylinks--list--link"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
            {anchorlink && (
              <a href={anchorlink.url} className="anchorlink">
                {anchorlink.label}
              </a>
            )}
          </div>
        </div>
      </footer>
    );
  }
);

export { Footer };
