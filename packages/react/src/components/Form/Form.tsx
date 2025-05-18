import { forwardRef } from "react";
import { useGlobalSettings } from "../../hooks";
import classNames from "classnames";
import { FormProps } from "./Form.props";

import { createContext, useContext } from "react";

interface FormContextValue {
  theme: "light" | "dark";
}

const FormContext = createContext<FormContextValue>({ theme: "light" });

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a Form component");
  }
  return context;
};

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, theme = "light", ...props }, ref) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--form`;
    const themeClass = `${baseClass}__theme__${theme}`;

    const formClasses = classNames(baseClass, themeClass);

    return (
      <form ref={ref} className={formClasses} {...props}>
        <FormContext.Provider value={{ theme }}>
          {children}
        </FormContext.Provider>
      </form>
    );
  }
);

export default Form;
