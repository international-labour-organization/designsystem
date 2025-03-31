import { FC, SetStateAction, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import classnames from "classnames";
import { TabsProps } from "./Tabs.props";
import { Icon } from "../Icon";

const Tabs: FC<TabsProps> = ({ items, theme = "light" }) => {
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
  const tabsClasses = classnames(baseClass, `${baseClass}__theme__${theme}`);

  return (
    <div className={tabsClasses}>
      <ul className={`${baseClass}--selection`} role="tablist" tabIndex={0}>
        {items.map((tab, index) => (
          <li
            key={`#tab--${index}`}
            role="presentation"
            className={`${baseClass}--selection--item ${
              activeTab === index ? "active" : ""
            }`}
            onClick={(e) => handleTabClick(index, e)}
            id={`tab--${index}`}
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
              tabIndex={index === activeTab ? 0 : -1}
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
      <div
        className={`${baseClass}--content`}
        role="tabpanel"
        aria-labelledby={`tab--${activeTab}`}
        tabIndex={0}
      >
        {items[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
