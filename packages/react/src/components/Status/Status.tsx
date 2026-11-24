import { forwardRef } from "react";
import classNames from "classnames";

export type StatusProps = {
  /**
   * Specify the type of status.
   */
  statusType?: "active" | "info" | "alert" | "subtle" | "inactive";

  /**
   * The content inside the status component.
   */
  content: string | React.ReactNode;

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
    const baseClass = "ilo--status";

    const statusClasses = classNames(
      baseClass,
      className,
      `${baseClass}__type__${statusType}`
    );

    return (
      <span className={statusClasses} id={elementId} ref={ref}>
        {content}
      </span>
    );
  }
);

export { Status };
