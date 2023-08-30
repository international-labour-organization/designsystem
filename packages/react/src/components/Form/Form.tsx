import { forwardRef } from "react";
import { useGlobalSettings } from "../../hooks";
import classNames from "classnames";
import { FormProps } from "./Form.props";

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, theme = "light", ...props }, ref) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--form`;
    const themeClass = `${baseClass}__theme__${theme}`;

    const formClasses = classNames(baseClass, themeClass);

    return (
      <form ref={ref} className={formClasses} {...props}>
        {children}
      </form>
    );
  }
);

export default Form;
