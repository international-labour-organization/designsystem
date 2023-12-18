import React, { FC, useState, useRef } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TooltipProps } from "./Tooltip.props";
import { createPopper, Instance as PopperInstance } from "@popperjs/core";

const Tooltip: FC<TooltipProps> = ({
  className,
  children,
  icon,
  label,
  iconTheme,
  theme,
  id,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--tooltip`;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [longTooltip, setLongToolTip] = useState<boolean>(false);
  const [popperInstance, setPopperInstance] = useState<PopperInstance | null>(
    null
  );

  const tooltipRef = useRef<HTMLDivElement>(null);

  const tooltipClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${theme}`]: theme,
    [`${baseClass}--visible`]: isVisible,
    [`${baseClass}--long`]: longTooltip,
  });

  const tooltipArrowClasses = classNames(
    `${baseClass}--arrow`,
    `${baseClass}--arrow--placement-negative`
  );

  const iconClasses = classNames(className, `${baseClass}--wrapper`, {
    [`${baseClass}--wrapper__icon ${baseClass}--wrapper__icon__theme__${theme}`]:
      icon,
    [`${baseClass}--wrapper__icon__theme__${theme}`]: iconTheme,
  });

  const setMaxWidthAndClass = (tooltip: HTMLDivElement) => {
    const tooltipText = tooltip.textContent || tooltip.innerText;
    const textLength = tooltipText.trim().length;

    if (textLength > 50) {
      setLongToolTip(true);
    }
  };

  const handleOnMouseOver: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.currentTarget;
    setMaxWidthAndClass(tooltipRef.current!);
    if (target && tooltipRef.current) {
      const popperInstance = createPopper(target, tooltipRef.current, {
        placement: "top",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 12], // Adjust offset as needed
            },
          },
          {
            name: "flip",
            enabled: true,
          },
          {
            name: "preventOverflow",
            enabled: true,
          },
        ],
      });

      setPopperInstance(popperInstance);
      setIsVisible(true);
    }
  };

  const handleOnMouseOut = () => {
    if (popperInstance) {
      popperInstance.destroy();
    }
    setIsVisible(false);
  };

  const handleOnFocus: React.FocusEventHandler<HTMLDivElement> = (e) => {
    handleOnMouseOver(e as unknown as React.MouseEvent<HTMLDivElement>);
  };

  return (
    <div
      className={iconClasses}
      onMouseOver={handleOnMouseOver}
      onFocus={handleOnFocus}
      onMouseOut={handleOnMouseOut}
      onBlur={handleOnMouseOut}
      id={id}
    >
      {!icon && <>{children}</>}
      <span
        className={tooltipClasses}
        ref={tooltipRef}
        data-id={id}
        id="tooltip"
        role="tooltip"
        aria-hidden={!isVisible}
      >
        <span
          data-popper-arrow
          className={tooltipArrowClasses}
          data-placement="negative"
          role="presentation"
        />
        {label}
      </span>
    </div>
  );
};

export default Tooltip;
