import { FC, SetStateAction, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import classnames from "classnames";
import { TabsProps } from "./Tabs.props";
import { Icon } from "../Icon";

const Tabs: FC<TabsProps> = ({ items, className }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (
    index: SetStateAction<number>,
    e: React.MouseEvent<HTMLElement>
  ) => {
    setActiveTab(index);
    e.preventDefault();
  };

  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--tabs`;
  const tabsClasses = classnames(baseClass, className);

  return (
    <div className={`${tabsClasses} tabs--js`}>
      <ul className={`${baseClass}--selection`} role="tablist">
        {items.map((tab, index) => (
          <li
            key={`#tab--${index}`}
            role="tab"
            className={`${baseClass}--selection--item ${
              activeTab === index ? "active" : ""
            }`}
            onClick={(e) => handleTabClick(index, e)}
          >
            <a
              href={`#tab--${index}`}
              className={`${baseClass}--selection--button${
                tab.icon ? " icon" : ""
              }`}
              role="tab"
              aria-controls={`tab--${index}`}
              aria-selected={index === activeTab ? true : false}
              title={tab.label}
            >
              <span className={`${baseClass}--selection--label`}>
                {tab.label}
              </span>
              {tab.icon && (
                <Icon name={tab.icon.name} hidden={tab.icon.hidden} />
              )}
            </a>
          </li>
        ))}
      </ul>
      <div className={`${baseClass}--content`}>{items[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
