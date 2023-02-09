import { FC } from "react";
//import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { FooterProps } from "./Footer.props";
//import { Image } from "../Image";
import { LinkList } from "../LinkList";
import { Button } from "../Button";

const Footer: FC<FooterProps> = ({
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

  const baseclass = `${prefix}--footer`;

  return (
    <footer className={`${baseclass}`}>
      <div className={`${baseclass}--main`}>
        <div className="site--info">
          <img
            className={`${baseclass}--logo`}
            src={logo}
            alt="ILO Logo EN-White"
          />
          <h3 className={`${baseclass}--headline`}>{tagline}</h3>
          <h4 className={`${baseclass}--subhead`}>{subtagline}</h4>
        </div>
        {address && (
          <div className="address">
            {address.map((line, i) => (
              <p id={i.toString()} className="address--line">
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
        if (socials || subscribe){" "}
        {
          <div className="connect">
            if (socials){" "}
            {
              <>
                <h5 className="social--headline">Socials.Headline here</h5>
                <ul className="social--links">
                  {socials &&
                    socials.map((item: any, index: any) => {
                      return (
                        <li className={`${baseclass}--list--item`} key={index}>
                          <a
                            className={`${baseclass}--link icon icon--${item.icon}`}
                            href={item.url}
                            title={item.label}
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </>
            }
            if (subscribe){" "}
            {
              <Button
                url={subscribe?.url}
                type="primary"
                size="large"
                target="_blank"
              >
                {subscribe?.label}
              </Button>
            }
          </div>
        }
      </div>
      <div className={`${baseclass}--secondary`}>
        <div className="legal">{legal}</div>
        {secondarylinks && (
          <nav className="secondarylinks">
            <ul className="secondarylinks--list">
              {secondarylinks.map((link, i) => (
                <li className="secondarylinks--list--item">
                  <a
                    id={i.toString()}
                    href="{{link.url}}"
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