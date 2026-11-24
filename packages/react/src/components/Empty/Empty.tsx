import { FC } from "react";
import classNames from "classnames";
import { EmptyProps } from "./Empty.props";

const Empty: FC<EmptyProps> = ({ className, style }) => {
  const baseClass = "ilo--empty";
  const emptyClasses = classNames(className, {
    [baseClass]: true,
  });

  return <div style={style} className={emptyClasses}></div>;
};

export default Empty;
