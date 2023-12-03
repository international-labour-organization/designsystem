import { FC, useState, useRef } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TooltipProps } from "./Tooltip.props";
import ReactDOM from "react-dom";

const Tooltip: FC<TooltipProps> = ({
  className,
  children,
  icon,
  label,
  theme,
  id,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--tooltip`;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [arrowPlacement, setArrowPlacement] = useState<string>("center");
  const [arrowAlignment, setArrowAlignment] = useState<string>("left");
  const [tooltipSize, setTooltipSize] = useState<string>("");

  const tooltipRef = useRef(null);

  const tooltipClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${theme}`]: theme,
    [`${baseClass}--alignment-${arrowAlignment}`]: arrowAlignment,
    [`${baseClass}--visible`]: isVisible,
    [`${baseClass}--${tooltipSize}`]: tooltipSize,
  });

  const tooltipArrowClasses = classNames(className, {
    [`${baseClass}--arrow`]: true,
    [`${baseClass}--arrow--placement-${arrowPlacement}`]: arrowPlacement,
  });

  const handleOnMouseOver: React.MouseEventHandler<HTMLDivElement> &
    React.FocusEventHandler<HTMLDivElement> = (e) => {
    // get hovered element reference
    const target = e.currentTarget;

    if (target) {
      const rect = target.getBoundingClientRect();
      setIsVisible(true);
      postMouseOver(rect);
    }
  };

  const setMaxWidthAndClass = (tooltip: any) => {
    const tooltipText = tooltip.textContent || tooltip.innerText;
    const textLength = tooltipText.trim().length;
    if (textLength > 50) {
      setTooltipSize("long");
    }
  };

  const postMouseOver = (hoverRect: any) => {
    // position the tooltip after showing it
    let placement = "center";
    let alignment = "left";

    setMaxWidthAndClass(tooltipRef.current);

    const ttNode = ReactDOM.findDOMNode(tooltipRef.current) as Element;
    if (ttNode != null) {
      let x = 0,
        y = 0;

      const docWidth = document.documentElement.clientWidth,
        docHeight = document.documentElement.clientHeight;

      const rx = hoverRect.x + hoverRect.width, // most right x
        lx = hoverRect.x, // most left x
        ty = hoverRect.y, // most top y
        by = hoverRect.y + hoverRect.height; // most bottom y

      // tool tip rectange
      const ttRect = ttNode.getBoundingClientRect();

      const bRight =
        rx + ttRect.width <= window.scrollX + docWidth &&
        ty + ttRect.height <= window.scrollY + docHeight;
      const bLeft =
        lx - ttRect.width >= 0 &&
        ty + ttRect.height <= window.scrollY + docHeight;
      const bAbove = ty - ttRect.height >= 0;
      const bBellow = by + ttRect.height <= window.scrollY + docHeight;

      // the tooltip doesn't fit to the left
      if (bRight) {
        x = hoverRect.width + 16;
        y = icon ? -8 : 0;
        placement = "negative";
        alignment = "right";
      } else if (bBellow) {
        x = icon ? -8 : 0;
        y = hoverRect.height + 16;

        placement = "center";
        alignment = "bottom";
      } else if (bLeft) {
        x = -ttRect.width - 16;
        y = icon ? -8 : 0;

        placement = "negative";
        alignment = "left";
      } else if (bAbove) {
        x = icon ? -8 : 0;
        y = -ttRect.height - 16;

        placement = "center";
        alignment = "top";
      }

      setPosition({ x: x, y: y });
      setArrowPlacement(placement);
      setArrowAlignment(alignment);
    }
  };

  const handleOnMouseOut = () => {
    setIsVisible(false);
  };

  const style = {
    // left: ((position.x + window.scrollX) + 'px'),
    // top: ((position.y + window.scrollY) + 'px')
    left: position.x + "px",
    top: position.y + "px",
  };

  return (
    <div
      className={`${baseClass}--wrapper ${icon && "has-icon"}`}
      onMouseOver={handleOnMouseOver}
      onFocus={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
      onBlur={handleOnMouseOut}
      id={id}
    >
      {!icon && <>{children}</>}
      <span className={tooltipClasses} style={style} ref={tooltipRef}>
        <span className={tooltipArrowClasses} role="presentation"></span>
        {label}
      </span>
    </div>
  );
};

export default Tooltip;
