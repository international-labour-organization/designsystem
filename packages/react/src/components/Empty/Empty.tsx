import React from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { emptyProps } from "./Heading.props";

const Empty: React.FC<{}> = () => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--empty`;
  const emptyClasses = classNames(className, {
    [baseClass]: true
  });

  return (
    <Empty className={emptyClasses} {...rest}>
      {children}
    </Empty>
  );
};

export default Empty;
