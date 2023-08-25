import React from "react";
import classnames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TextareaProps, LabelledTextareaProps } from "./Textarea.props";
import FormControl, { useFormControl } from "../FormControl/FormControl";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className, name, id, ...props }, ref) => {
    const { prefix } = useGlobalSettings();
    const formControlCtx = useFormControl();
    const { ariaDescribedBy } = formControlCtx;

    const baseClass = `${prefix}--textarea`;
    const errorClass = `${baseClass}__error`;

    const textAreaClass = classnames(baseClass, className, {
      [errorClass]: error,
    });

    return (
      <textarea
        ref={ref}
        className={textAreaClass}
        name={name}
        id={id ? id : name}
        aria-describedby={ariaDescribedBy}
        {...props}
      />
    );
  }
);

const LabelledTextarea = React.forwardRef<
  HTMLTextAreaElement,
  LabelledTextareaProps
>((props, ref) => {
  const fieldId = props.id ? props.id : props.name;
  return (
    <FormControl fieldId={fieldId} {...props}>
      <Textarea ref={ref} {...props} />
    </FormControl>
  );
});

export default LabelledTextarea;
