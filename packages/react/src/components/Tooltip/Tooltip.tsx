import {
  useRef,
  useId,
  forwardRef,
  useCallback,
  MouseEvent,
  FocusEvent,
} from "react";
import classNames from "classnames";
import { createPopper, Instance as PopperInstance } from "@popperjs/core";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TooltipThemes, TooltipIconThemes } from "../../types";

export type TooltipProps = {
  /**
   * Set the label for the tooltip
   */
  label: string;

  /**
   * Describe the theme of the tooltip
   */
  theme?: TooltipThemes;

  /**
   * Describe the background theme of the tooltip
   */
  iconTheme?: TooltipIconThemes;

  /**
   * Specify an optional className to be added to your Tooltip.
   */
  className?: string;

  /**
   * Should the tooltip appear on hover of an info icon?
   */
  icon?: boolean;

  /**
   * Set whether the tooltip is visible or not
   */
  isVisible?: boolean;

  children?: React.ReactNode;
};
const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      icon = true,
      iconTheme = "light",
      theme = "dark",
      className,
      children,
      label,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const baseClass = `${prefix}--tooltip`;
    const tooltipRef = useRef<HTMLDivElement>(null);
    const popperRef = useRef<PopperInstance | null>(null);
    const id = useId();

    const handleShow = useCallback(
      (event: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>) => {
        const target = event.currentTarget;
        if (target && tooltipRef.current) {
          popperRef.current = createPopper(target, tooltipRef.current, {
            placement: "top",
            modifiers: [
              {
                name: "offset",
                options: { offset: [0, 12] },
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
          tooltipRef.current.setAttribute("aria-hidden", "false");
        }
      },
      []
    );

    const handleHide = useCallback(() => {
      if (popperRef.current) {
        popperRef.current.destroy();
        popperRef.current = null;
      }
      if (tooltipRef.current) {
        tooltipRef.current.setAttribute("aria-hidden", "true");
      }
    }, []);

    return (
      <div
        ref={ref}
        className={classNames(
          `${baseClass}--wrapper`,
          {
            [`${baseClass}--wrapper__icon`]: icon,
            [`${baseClass}--wrapper__icon__theme__${theme}`]: icon && theme,
            [`${baseClass}--wrapper__icon__theme__${iconTheme}`]: iconTheme,
          },
          className
        )}
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
        onFocus={handleShow}
        onBlur={handleHide}
        id={`tooltip-${id}`}
      >
        {!icon && children}
        <span
          ref={tooltipRef}
          className={classNames(baseClass, {
            [`${baseClass}--${theme}`]: theme,
          })}
          data-id={`tooltip-${id}`}
          role="tooltip"
          aria-hidden="true"
        >
          <span
            data-popper-arrow
            className={`${baseClass}--arrow ${baseClass}--arrow--placement-negative`}
            data-placement="negative"
            role="presentation"
          />
          {label}
        </span>
      </div>
    );
  }
);
export { Tooltip };
