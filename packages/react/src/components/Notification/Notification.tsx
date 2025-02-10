import { forwardRef, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { Button } from "../Button";
import { NotificationPlacement, NotificationTypes } from "../../types";

export type NotificationProps = {
  /**
   * Specify an optional className to be added to your Notification component.
   */
  className?: string;

  /**
   * Specify the label for the close button
   */
  closelabel?: string;

  /**
   * Specify the copy
   */
  copy: string;

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
   * Specify the headline
   */
  headline?: Required<string>;

  /**
   * Specify whether the notification is inline in the DOM or absolutely-positioned at a higher z-index
   */
  placement?: NotificationPlacement;

  /**
   * Specify an optional timestamp
   */
  timestamp?: {
    /**
     * Specify the human-readable time
     */
    human: string;

    /**
     * Specify the UNIX timestamp
     */
    unix: string;
  };

  /**
   * Specify the icon for the Notification
   */
  type?: NotificationTypes;
};

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      className,
      closelabel = "Close",
      copy,
      cta,
      headline,
      placement,
      timestamp,
      type,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const [display, setDisplay] = useState(true);

    const baseClass = `${prefix}--notification`;
    const notificationClasses = classNames(baseClass, className, {
      [`${baseClass}--${placement}`]: placement,
      [`icon icon--${type}`]: type,
    });

    return (
      <>
        {display && (
          <div
            className={notificationClasses}
            role="status"
            aria-live="polite"
            aria-relevant="additions"
            ref={ref}
          >
            <div className={`${baseClass}--content`}>
              <h2 className={`${baseClass}--headline`}>{headline}</h2>
              <p className={`${baseClass}--copy`}>{copy}</p>
              {timestamp && (
                <time
                  className={`${baseClass}--date`}
                  dateTime={timestamp.unix}
                >
                  {timestamp.human}
                </time>
              )}
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
            <button
              className={`${baseClass}--close`}
              type="button"
              onClick={() => setDisplay(false)}
            >
              <span>{closelabel}</span>
            </button>
          </div>
        )}
      </>
    );
  }
);

export { Notification };
