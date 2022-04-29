import { createElement, FC } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { IconProps } from "./Icon.props";
import * as icons from "@ilo-org/icons-react";

const Icon: FC<IconProps> = ({ hidden, name }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--icon`;

  const icon = name
    ? createElement(icons[`${name.charAt(0).toUpperCase() + name.slice(1)}16`], {
        "aria-hidden": hidden,
        className: baseClass,
      })
    : false;

  return (
    <>
      {icon}
    </>
  );
};

export default Icon;
