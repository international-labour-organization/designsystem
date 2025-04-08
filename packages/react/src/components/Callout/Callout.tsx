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
   * Specify if callout is open by default (only important for collapsible items)
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
      [`${baseClass}__open`]: toggleOpen,
      [`${baseClass}__collapse`]: isCollapsible,
    });

    const toggleLabel = toggleOpen ? toggleOpenLabel : toggleClosedLabel;

    return (
      <div className={calloutClasses} ref={ref}>
        <div className={`${baseClass}--sidebar`}>
          <span
            className={`${baseClass}--icon ${baseClass}--icon__alert__${type}`}
          ></span>
        </div>
        <div className={`${baseClass}--content`}>
          <div className={`${baseClass}--header`}>
            <h5 className={`${baseClass}--title`}>{headline}</h5>
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
          <p className={`${baseClass}--description`}>{copy}</p>
          {cta && (
            <div className={`${baseClass}--footer`}>
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
