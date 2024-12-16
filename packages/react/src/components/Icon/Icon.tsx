import { createElement, FC } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { IconProps } from "./Icon.props";
import * as icons from "@ilo-org/icons-react";

// This is a workaround because @ilo-org/icons-react does not correct have type declarations
const Icons = icons as Record<string, React.ElementType>;

const Icon: FC<IconProps> = ({ hidden, name, size }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--icon`;
  const ariaHidden = hidden ? "hidden" : "";
  const iconsize = size || 24;

  if (!name) {
    return null;
  }

  const machineName = `${name.charAt(0).toUpperCase() + name.slice(1)}${iconsize}`;

  return createElement(Icons[machineName as keyof typeof Icon], {
    "aria-hidden": ariaHidden,
    className: baseClass,
  });
};

export default Icon;
