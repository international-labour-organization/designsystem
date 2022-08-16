import { FC } from "react";
import { FormElementProps } from "./FormElement.props";

const FormElement: FC<FormElementProps> = ({
  children,
  // @ts-ignore
  className,
  // @ts-ignore
  error,
  // @ts-ignore
  elemid,
  // @ts-ignore
  helper,
  // @ts-ignore
  label,
  // @ts-ignore
  required,
  // @ts-ignore
  tooltip,
}) => {
  return <>{children}</>;
};

export default FormElement;
