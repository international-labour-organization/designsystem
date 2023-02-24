import { FC } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import classnames from "classnames";
import { FooterProps } from "./Footer.props";
import { LinkList } from "../LinkList";
import { Button } from "../Button";

const Footer: FC<FooterProps> = ({
  className,
  logo,
  tagline,
  subtagline,
  address,
  linkgroup,
  socials,
  subscribe,
  legal,
  secondarylinks,
  anchorlink,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--footer`;
  const footerClasses = classnames(className, baseClass);

  return (
    <footer className={footerClasses}>
      <div className={`${baseClass}--main`}>
        <div className="site--info">
          <img className={`${baseClass}--logo`} src={logo} alt="ILO Logo" />
          <h3 className={`${baseClass}--headline`}>{tagline}</h3>
          <h4 className={`${baseClass}--subhead`}>{subtagline}</h4>
        </div>
        {address && (
          <div className="address">
            {address.map((line, i) => (
              <p key={i} className="address--line">
                {line}
              </p>
            ))}
          </div>
        )}
        {linkgroup && (
          <nav className="links">
            <LinkList linkgroup={linkgroup} theme="dark"></LinkList>
          </nav>
        )}
        {(socials || subscribe) && (
          <div className="connect">
            {socials && (
              <>
                <h5 className="social--headline">{socials?.headline}</h5>
                <ul className="social--links">
                  {socials.links &&
                    socials.links.map((link, index) => (
                      <li className="social--links--item" key={index}>
                        <a
                          className={`social--links--link ${link.type}`}
                          href={link.url}
                        >
                          {link.type}
                        </a>
                      </li>
                    ))}
                </ul>
              </>
            )}
            {subscribe && (
              <Button
                label={subscribe?.label}
                url={subscribe?.url}
                type="primary"
                size="large"
                target="_blank"
              ></Button>
            )}
          </div>
        )}
      </div>
      <div className={`${baseClass}--secondary`}>
        <div className="legal">{legal}</div>
        {secondarylinks && (
          <nav className="secondarylinks">
            <ul className="secondarylinks--list">
              {secondarylinks.map((link, i) => (
                <li className="secondarylinks--list--item">
                  <a
                    key={i}
                    href={link.url}
                    className="secondarylinks--list--link"
                  >
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <a href={anchorlink?.url} className="anchorlink">
          {anchorlink?.label}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
