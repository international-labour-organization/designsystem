import { HTMLAttributes } from "react";
import { LanguageToggleProps } from "../../LanguageToggle";
import { CompactMenuList } from "./CompactMenuList";

type CompactLanguageListProps = {
  options: LanguageToggleProps["options"];
  selected: string;
};

const CompactLanguageList = ({
  options,
  selected,
}: HTMLAttributes<HTMLUListElement> & CompactLanguageListProps) => {
  const transformed =
    options?.map((option) => ({
      label: option.label,
      handler: option.url,
    })) || [];

  const menu = [
    { label: selected, handler: "#", marked: true },
    ...transformed,
  ];

  return <CompactMenuList menu={menu} />;
};

export { CompactLanguageList };
