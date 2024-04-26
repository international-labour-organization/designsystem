/* eslint-disable jsx-a11y/anchor-has-content */
/* This is a good rule in general, but disabling here because the link has an aria-label */

import { FC, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import classnames from "classnames";
import { BreadcrumbProps, BreadcrumbItemProps } from "./Breadcrumb.props";
import { ContextMenu } from "../ContextMenu";

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  url,
  label,
  className,
  labelShown = true,
}) => {
  const { prefix } = useGlobalSettings();

  const [contextMenuOpen, setContextMenuOpen] = useState(false);

  const baseClass = `${prefix}--breadcrumb--item`;
  const linkClass = `${prefix}--breadcrumb--link`;
  const labelClass = `${linkClass}--label`;

  const breadcrumbLinkClass = classnames(baseClass, className);

  return (
    <li className={breadcrumbLinkClass}>
      {labelShown ? (
        <a className={linkClass} href={url}>
          <span className={labelClass}>{label}</span>
        </a>
      ) : (
        <a aria-label={label} className={linkClass} href={url}></a>
      )}
    </li>
  );
};

const Breadcrumb: FC<BreadcrumbProps> = ({ className, links, buttonLabel }) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--breadcrumb`;
  const innerClass = `${baseClass}--inner`;
  const itemsClass = `${baseClass}--items`;
  const itemClass = `${baseClass}--item`;
  const itemFirstClass = `${itemClass}__first`;
  const contextClass = `${baseClass}--context`;
  const buttonClass = `${contextClass}--button`;
  const controlsId = `${baseClass}--menu`;

  const breadcrumbClass = classnames(baseClass, className);

  const firstLink = links[0];
  const contextLinks = links.slice(1, links.length - 1);
  const lastLink = links[links.length];

  return (
    <nav className={breadcrumbClass}>
      <div className={innerClass}>
        <ol className={itemsClass}>
          <BreadcrumbItem
            url={firstLink.url}
            label={firstLink.label}
            labelShown={false}
            className={itemFirstClass}
          />
          {contextLinks && contextLinks.length > 0 ? (
            <li className={contextClass}>
              <ol className={itemsClass}>
                {contextLinks.map((contextLink) => (
                  <BreadcrumbItem
                    url={contextLink.url}
                    label={contextLink.label}
                  />
                ))}
              </ol>
              <button
                aria-label={buttonLabel}
                aria-expanded="false"
                aria-controls={controlsId}
                className={buttonClass}
              ></button>
            </li>
          ) : null}
          {lastLink && (
            <BreadcrumbItem url={lastLink.url} label={lastLink.label} />
          )}
        </ol>
      </div>
      <div
        className="{{prefix}}--breadcrumb--context--menu"
        id="{{prefix}}--breadcrumb--menu"
      >
        <ContextMenu />
      </div>
    </nav>
  );
};

export default Breadcrumb;
