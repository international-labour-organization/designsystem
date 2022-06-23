import React, { useState, useEffect, FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { CalloutProps } from "./Callout.props";

const Callout: FC<CalloutProps> = ({
  alert,
  buttonLabel,
  callback,
  className,
  children,
  isCollapsible,
  isOpen = true,
  toggleOpenLabel = "Less",
  toggleClosedLabel = "More",
  title,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--callout`;
  const [toggleOpen, setToggleOpen] = useState(isOpen);
  let toggleLabel = toggleOpen ? toggleOpenLabel : toggleClosedLabel;

  useEffect(() => {
    setToggleOpen(isOpen);
    toggleLabel = toggleOpen ? toggleOpenLabel : toggleClosedLabel;
  }, [isOpen]);

  const calloutClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${alert}`]: alert,
    [`${baseClass}--open`]: toggleOpen,
    [`${baseClass}--collapse`]: isCollapsible,
  });

  /**
   * On click, if there is a callback, call it
   */
  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (callback) {
      callback(e);
    }
  };

  const handleToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    toggleLabel = toggleOpen ? toggleOpenLabel : toggleClosedLabel;
    setToggleOpen(!toggleOpen);
  };

  return (
    <div className={calloutClasses}>
      <div className={`${baseClass}--sidebar`}>
        <span className={`${baseClass}--icon`}></span>
      </div>
      <div className={`${baseClass}--content`}>
        <div className={`${baseClass}--header`}>
          <h5 className={`${baseClass}--title`}>{title}</h5>
          {isCollapsible && (
            <button
              className={`${baseClass}--toggle`}
              onClick={handleToggle}
              type="button"
            >
              {toggleLabel}{" "}
              <span className={`${baseClass}--toggle--icon`}></span>
            </button>
          )}
        </div>
        {children}
        {buttonLabel && (
          <div className={`${baseClass}--footer`}>
            <button
              className="ilo--button ilo--button--small ilo--button--secondary"
              type="button"
              onClick={handleClick}
            >
              {buttonLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Callout;
