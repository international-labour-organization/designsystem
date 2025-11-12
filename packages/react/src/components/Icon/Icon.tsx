import { createElement, FC } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { IconProps } from "./Icon.props";
import * as icons from "@ilo-org/icons-react";
import classnames from "classnames";

// This is a workaround because @ilo-org/icons-react does not correct have type declarations
const Icons = icons as Record<string, React.ElementType>;

const Icon: FC<IconProps> = ({
  hidden = false,
  name,
  size,
  color,
  className,
  id,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--icon`;
  const iconClass = classnames([baseClass, className]);
  const ariaHidden = hidden ? "true" : "false";
  const iconsize = size || 24;

  if (!name) {
    return null;
  }

  const machineName = `${name.charAt(0).toUpperCase() + name.slice(1)}${iconsize}`;

  return createElement(Icons[machineName as keyof typeof Icon], {
    "aria-hidden": ariaHidden,
    "data-testid": `${name.toLowerCase()}-icon`,
    className: iconClass,
    id: id,
    fill: color || "currentColor",
  });
};

export default Icon;
