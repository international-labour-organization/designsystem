import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { FormGroupProps } from "./FormGroup.props";
import { Checkbox } from "../Checkbox";
import { ChoiceGroup } from "../ChoiceGroup";
import { DatePicker } from "../DatePicker";
import { Dropdown } from "../Dropdown";
import { FileUpload } from "../FileUpload";
import { Input } from "../Input";
import { NumberPicker } from "../NumberPicker";
import { Textarea } from "../Textarea";

const FormGroup: FC<FormGroupProps> = ({
  className,
  formgroupid,
  items,
  legend,
  type,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--formgroup`;
  const formGroupClasses = classNames(className, {
    [baseClass]: true,
  });

  return (
    <fieldset
      className={`${formGroupClasses} ${type}`}
      id={formgroupid ? (formgroupid as any) : undefined}
    >
      {legend && <legend className={`${baseClass}--legend`}>{legend}</legend>}
      {items.map((item, i) => {
        if (item?.type === "input") {
          return <Input {...(item?.field as any)} key={i} />;
        }
        if (item?.type === "dropdown") {
          return <Dropdown {...(item?.field as any)} key={i} />;
        }
        if (item?.type === "checkbox" && Array.isArray(item?.field) === false) {
          return <Checkbox {...(item?.field as any)} key={i} />;
        }
        if (
          (item?.type === "checkbox" || item?.type === "radio") &&
          Array.isArray(item?.field)
        ) {
          return (
            <ChoiceGroup
              items={item?.field as any}
              legend={item?.legend as any}
              choicegroupid={item?.choicegroupid as any}
              key={i}
            />
          );
        }
        if (item?.type === "file") {
          return <FileUpload {...(item?.field as any)} key={i} />;
        }
        if (item?.type === "date") {
          return <DatePicker {...(item?.field as any)} key={i} />;
        }
        if (item?.type === "number") {
          return <NumberPicker {...(item?.field as any)} key={i} />;
        }
        if (item?.type === "textarea") {
          return <Textarea {...(item?.field as any)} key={i} />;
        }
      })}
    </fieldset>
  );
};

export default FormGroup;
