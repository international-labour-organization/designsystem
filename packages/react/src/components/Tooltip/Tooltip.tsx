import { FC, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TooltipProps } from "./Tooltip.props";

const Tooltip: FC<TooltipProps> = ({
  alignment,
  className,
  children,
  label,
  placement,
  theme,
  width = "auto",
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--tooltip`;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const stylesWidth = { width: width };

  const tooltipClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${theme}`]: theme,
    [`${baseClass}--alignment-${alignment}`]: alignment,
    [`${baseClass}--visible`]: isVisible,
  });

  const tooltipArrowClasses = classNames(className, {
    [`${baseClass}__arrow`]: true,
    [`${baseClass}__arrow--placement-${placement}`]: placement,
  });

  return (
    <div
      className={`${baseClass}__wrapper`}
      onMouseOver={() => setIsVisible(true)}
      onFocus={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
      onBlur={() => setIsVisible(false)}
      style={stylesWidth}
    >
      {children}
      <span className={tooltipClasses}>
        <span className={tooltipArrowClasses} role="presentation"></span>
        {label}
      </span>
    </div>
  );
};

export default Tooltip;
