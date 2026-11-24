import { forwardRef, createContext, useContext } from "react";
import classNames from "classnames";
import { FormProps } from "./Form.props";
import { ThemeTypes } from "../../types";

interface FormContextValue {
  theme: ThemeTypes | null;
}

const FormContext = createContext<FormContextValue>({ theme: null });

export const useFormContext = () => {
  const context = useContext(FormContext);
  return context;
};

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, theme = null, ...props }, ref) => {
    const baseClass = "ilo--form";
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
