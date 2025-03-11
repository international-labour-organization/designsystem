import { forwardRef } from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";

export type StatusProps = {
  /**
   * Specify the type of status.
   */
  statusType?: "active" | "info" | "alert" | "subtle" | "inactive";

  /**
   * The content inside the status component.
   */
  content: string;

  /**
   * The ID of the status element.
   */
  elementId?: string;

  /**
   * Optional class name for additional styling.
   */
  className?: string;
};

const Status = forwardRef<HTMLSpanElement, StatusProps>(
  ({ statusType = "active", content, elementId, className }, ref) => {
    const { prefix } = useGlobalSettings();

    const statusClasses = classNames(className, {
      [`${prefix}--status`]: true,
      [`${prefix}--status__type__${statusType}`]: statusType,
    });

    return (
      <span className={statusClasses} id={elementId} ref={ref}>
        {content}
      </span>
    );
  }
);

export { Status };
