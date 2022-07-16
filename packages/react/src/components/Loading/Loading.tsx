import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { LoadingProps } from "./Loading.props";

const Loading: FC<LoadingProps> = ({ className, message, size, status }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--loading`;
  const loadingClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${size}`]: size,
    [`${baseClass}--${status}`]: status,
  });

  return (
    <div className={loadingClasses} role="alert" aria-live="assertive">
      {status && message && status !== "idle" && (
        <p className={`${baseClass}--copy`}>{message}</p>
      )}
    </div>
  );
};

export default Loading;
