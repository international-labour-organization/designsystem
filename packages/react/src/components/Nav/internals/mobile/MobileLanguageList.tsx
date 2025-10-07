import { HTMLAttributes } from "react";
import { LanguageToggleProps } from "../../../LanguageToggle";
import { MobileMenuList } from "./MobileMenuList";

type MobileLanguageListProps = {
  options: LanguageToggleProps["options"];
  selected: string;
};

const MobileLanguageList = ({
  options,
  selected,
}: HTMLAttributes<HTMLUListElement> & MobileLanguageListProps) => {
  const transformed =
    options?.map((option) => ({
      label: option.label,
      href: option.url,
    })) || [];

  const menu = [{ label: selected, href: "#", isActive: true }, ...transformed];

  return <MobileMenuList menu={menu} />;
};

export { MobileLanguageList };
