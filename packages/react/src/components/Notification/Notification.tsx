import { FC, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { NotificationProps } from "./Notification.props";
import { ButtonProps } from "../Button/Button.props";
import { Button } from "../Button";

const Notification: FC<NotificationProps> = ({
  className,
  closelabel,
  copy,
  cta,
  headline,
  placement,
  timestamp,
  type,
}) => {
  const { prefix } = useGlobalSettings();

  const [display, setDisplay] = useState(true);

  const baseClass = `${prefix}--notification`;
  const notificationClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${placement}`]: placement,
    [`icon icon--${type}`]: type,
  });

  const ctaprops: ButtonProps = {
    callback: false,
    className: `${baseClass}--cta`,
    children: false,
    label: cta?.label,
    size: "small",
    type: "secondary",
    url: cta?.url,
  };

  /**
   * On click, close
   */
  const handleClick = () => {
    setDisplay(false);
  };

  return (
    <>
      {display && (
        <div
          className={notificationClasses}
          role="status"
          aria-live="polite"
          aria-relevant="additions"
        >
          <div className={`${baseClass}--content`}>
            <h2 className={`${baseClass}--headline`}>{headline}</h2>
            <p className={`${baseClass}--copy`}>{copy}</p>
            {timestamp && (
              <time className={`${baseClass}--date`} dateTime={timestamp.unix}>
                {timestamp.human}
              </time>
            )}
            {cta && <Button {...ctaprops} />}
          </div>
          <button
            className={`${baseClass}--close`}
            type="button"
            onClick={() => handleClick()}
          >
            <span>{closelabel}</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Notification;
