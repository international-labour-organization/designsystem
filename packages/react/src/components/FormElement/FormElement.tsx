import { FC } from "react";
import { FormElementProps } from "./FormElement.props";

// TODO: What is the point of this component?
const FormElement: FC<FormElementProps> = ({
  children,
  // className,
  // error,
  // elemid,
  // helper,
  // label,
  // required,
  // tooltip,
  // type,
}) => {
  return <>{children}</>;
};

export default FormElement;
