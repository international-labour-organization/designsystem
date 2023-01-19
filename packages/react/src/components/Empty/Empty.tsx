import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { EmptyProps } from "./Empty.props";

const Empty: FC<EmptyProps> = ({ className, style }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--empty`;
  const emptyClasses = classNames(className, {
    [baseClass]: true,
  });

  return <div style={style} className={emptyClasses}></div>;
};

export default Empty;
