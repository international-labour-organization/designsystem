import React from "react";
import classnames from "classnames";
import { useGlobalSettings } from "../../hooks";
import { LogoGridProps, LogoGridItemProps } from "./LogoGrid.props";

const LogoGridItem: React.FC<LogoGridItemProps> = ({ url, label, src }) => {
  const { prefix } = useGlobalSettings();

  const itemClass = `${prefix}--logo-grid--item`;
  const itemLinkClass = `${prefix}--logo-grid--link`;

  const gridItemClass = classnames(itemClass, {
    [itemLinkClass]: !!url,
  });

  if (!url) {
    return (
      <div className={gridItemClass}>
        <img alt={label} src={src as string} />
      </div>
    );
  }
  return (
    <a
      className={gridItemClass}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img alt={label} src={src as string} />
    </a>
  );
};

const LogoGrid: React.FC<LogoGridProps> = ({ logos, theme = "light" }) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--logo-grid`;
  const themeClass = `${baseClass}__theme__${theme}`;
  const logoGridClass = classnames(baseClass, themeClass);

  return (
    <div className={logoGridClass}>
      <div className={`${baseClass}--logos`}>
        {logos.map((logo) => (
          <LogoGridItem key={logo.label} {...logo} />
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
