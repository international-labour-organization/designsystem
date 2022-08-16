import { FC } from "react";
import { ChoiceGroupProps } from "./ChoiceGroup.props";
import { Checkbox } from "../Checkbox";
import { Fieldset } from "../Fieldset";
import { Radio } from "../Radio";

const ChoiceGroup: FC<ChoiceGroupProps> = ({
  className,
  choicegroupid,
  items,
  legend,
}) => {
  // whatever type the first item has we expect from the other items
  const sanitzeditems = items.filter((item: any) => item !== items[0].type);

  return (
    <Fieldset className={className} legend={legend} fieldsetid={choicegroupid}>
      {sanitzeditems.map((item: any, i: any) => {
        console.log(item);
        if (item?.type === "checkbox") {
          return <Checkbox {...(item as any)} key={i} />;
        }
        if (item?.type === "radio") {
          return <Radio {...(item as any)} key={i} />;
        }
      })}
      ;
    </Fieldset>
  );
};

export default ChoiceGroup;
