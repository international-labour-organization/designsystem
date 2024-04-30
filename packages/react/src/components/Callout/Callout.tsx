import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { Button } from "../Button";
import { ButtonProps } from "../Button/Button.props";
import { CalloutProps } from "./Callout.props";

const Callout: FC<CalloutProps> = ({
  className,
  copy,
  cta,
  isCollapsible,
  isOpen = true,
  toggleOpenLabel = "Less",
  toggleClosedLabel = "More",
  headline,
  type,
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
    [`${baseClass}__${type}`]: type,
    [`${baseClass}--open`]: toggleOpen,
    [`${baseClass}--collapse`]: isCollapsible,
  });

  const iconClasses = `icon icon__${type}`;

  const ctaprops: ButtonProps = {
    callback: undefined,
    className: `${baseClass}--cta`,
    children: false,
    label: cta?.label,
    size: "small",
    type: "tertiary",
    url: cta?.url,
  };

  const handleToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    toggleLabel = toggleOpen ? toggleOpenLabel : toggleClosedLabel;
    setToggleOpen(!toggleOpen);
  };

  return (
    <div className={calloutClasses}>
      <div className={`${baseClass}__sidebar`}>
        <span className={iconClasses}></span>
      </div>
      <div className={`${baseClass}__content`}>
        <div className={`${baseClass}__header`}>
          <h5 className={`${baseClass}__title`}>{headline}</h5>
          {isCollapsible && (
            <button
              className={`${baseClass}--toggle`}
              onClick={handleToggle}
              type="button"
            >
              {toggleLabel}
              <span className={`${baseClass}--toggle--icon`}></span>
            </button>
          )}
        </div>
        <p className={`${baseClass}__description`}>{copy}</p>
        {cta && <Button {...ctaprops} />}
      </div>
    </div>
  );
};

export default Callout;
