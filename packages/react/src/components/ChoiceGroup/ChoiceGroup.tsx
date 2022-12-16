import { FC } from "react";
import { ChoiceGroupProps } from "./ChoiceGroup.props";
import { Checkbox } from "../Checkbox";
import { Fieldset } from "../Fieldset";
import { Radio } from "../Radio";

const ChoiceGroup: FC<ChoiceGroupProps> = ({
  className,
  choicegroupid,
  grouperror,
  grouphelper,
  grouptooltip,
  items,
  legend,
}) => {
  // whatever type the first item has we expect from the other items
  const sanitzeditems = items.filter((item: any) => item !== items[0].type);

  return (
    <Fieldset
      className={`ilo--choice-group ${className ? className : ""}`}
      legend={legend}
      fieldsetid={choicegroupid}
      grouphelper={grouphelper}
      grouperror={grouperror}
      grouptooltip={grouptooltip}
    >
      {sanitzeditems.map((item: any, i: any) => {
        if (item?.type === "checkbox") {
          return <Checkbox {...(item as any)} key={i} />;
        }
        if (item?.type === "radio") {
          return <Radio {...(item as any)} key={i} />;
        }
        return null;
      })}
    </Fieldset>
  );
};

export default ChoiceGroup;
