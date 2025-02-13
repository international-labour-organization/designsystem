import classNames from "classnames";
import { forwardRef, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { Button } from "../Button";
import { CalloutTypes } from "../../types";

export type CalloutProps = {
  /**
   * Specify the settings for an option CTA
   */
  cta?: {
    /**
     * Specify the label of the CTA
     */
    label: string;

    /**
     * Specify the url of the CTA
     */
    url: string;
  };

  /**
   * Specify an optional className to be added to your RichText.
   */
  className?: string;

  /**
   * Specify the copy
   */
  copy?: Required<string>;

  /**
   * Specify if callout is collapsible
   */
  isCollapsible?: boolean;

  /**
   * Specify if callout is open (only important for collapsible items)
   */
  isOpen?: boolean;

  /**
   * Specify the callout headline
   */
  headline?: string;

  /**
   * Specify the open label
   */
  toggleOpenLabel?: string;

  /**
   * Specify the open label
   */
  toggleClosedLabel?: string;

  /**
   * Describe the type of callout
   */
  type?: CalloutTypes;
};

const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      className,
      copy,
      cta,
      isCollapsible,
      isOpen = true,
      toggleOpenLabel = "Less",
      toggleClosedLabel = "More",
      headline,
      type,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const baseClass = `${prefix}--callout`;
    const [toggleOpen, setToggleOpen] = useState(isOpen);

    const calloutClasses = classNames(baseClass, className, {
      [`${baseClass}__${type}`]: type,
      [`${baseClass}--open`]: toggleOpen,
      [`${baseClass}--collapse`]: isCollapsible,
    });

    const toggleLabel = toggleOpen ? toggleOpenLabel : toggleClosedLabel;

    return (
      <div className={calloutClasses} ref={ref}>
        <div className={`${baseClass}__sidebar`}>
          <span className={`${baseClass}--icon icon icon__${type}`}></span>
        </div>
        <div className={`${baseClass}__content`}>
          <div className={`${baseClass}__header`}>
            <h5 className={`${baseClass}__title`}>{headline}</h5>
            {isCollapsible && (
              <button
                className={`${baseClass}--toggle`}
                onClick={() => setToggleOpen(!toggleOpen)}
                data-open={toggleOpenLabel}
                data-closed={toggleClosedLabel}
              >
                <span className={`${baseClass}--button-text`}>
                  {toggleLabel}
                </span>
                <span
                  className={`${baseClass}--toggle--icon`}
                  role="presentation"
                ></span>
              </button>
            )}
          </div>
          <p className={`${baseClass}__description`}>{copy}</p>
          {cta && (
            <div className={`${baseClass}__footer`}>
              <Button
                type="secondary"
                size="small"
                link={{
                  url: cta.url,
                  label: cta.label,
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

export { Callout };
