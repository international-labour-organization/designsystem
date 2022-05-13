import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TooltipProps } from "./Tooltip.props";

const Tooltip: FC<TooltipProps> = ({
  alignment,
  className,
  children,
  placement,
  theme,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--tooltip`;

  const tooltipClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${theme}`]: theme,
    [`${baseClass}--alignment-${alignment}`]: alignment,
  });

  const tooltipArrowClasses = classNames(className, {
    [`${baseClass}__arrow`]: true,
    [`${baseClass}__arrow--placement-${placement}`]: placement,
  });

  const tooltipContentClasses = classNames(className, {
    [`${baseClass}__content`]: true,
  });

  return (
    <div className={tooltipClasses}>
      <span className={tooltipArrowClasses} role="presentation"></span>
      <div className={tooltipContentClasses}>{children}</div>
    </div>
  );
};

export default Tooltip;
