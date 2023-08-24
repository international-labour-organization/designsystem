import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TextareaProps } from "./Textarea.props";

const Textarea: FC<TextareaProps> = ({
  error,
  className,
  name,
  id,
  ...props
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--textarea`;
  const errorClass = `${baseClass}__error`;

  const textAreaClass = classnames(baseClass, className, {
    [errorClass]: error,
  });

  return (
    <textarea
      className={textAreaClass}
      name={name}
      id={id ? id : name}
      {...props}
    />
  );
};

export default Textarea;
