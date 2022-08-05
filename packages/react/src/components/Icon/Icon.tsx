import { createElement, FC } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { IconProps } from "./Icon.props";
import * as icons from "@ilo-org/icons-react";

const Icon: FC<IconProps> = ({ hidden, name, size }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--icon`;
  const ariaHidden = hidden ? "hidden" : "";
  const iconsize = size || 24;

  const icon = name
    ? createElement(
        icons[`${name.charAt(0).toUpperCase() + name.slice(1)}${iconsize}`],
        {
          "aria-hidden": ariaHidden,
          className: baseClass,
        }
      )
    : false;

  return <>{icon}</>;
};

export default Icon;
