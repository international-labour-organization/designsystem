import { FC } from "react";
import classnames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TextareaProps } from "./Textarea.props";

const Textarea: FC<TextareaProps> = ({ error, className, name, ...props }) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--textarea`;
  const errorClass = `${baseClass}__error`;

  const textAreaClass = classnames(baseClass, className, {
    [errorClass]: error,
  });

  const textareaName = name ? name : props.id;

  return <textarea className={textAreaClass} name={textareaName} {...props} />;
};

export default Textarea;
