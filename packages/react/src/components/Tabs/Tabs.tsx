import { FC, SetStateAction, useEffect, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import classnames from "classnames";
import { TabsProps } from "./Tabs.props";
import { Icon } from "../Icon";

const Tabs: FC<TabsProps> = ({
  items,
  className,
  theme = "light",
  defaultActiveTab = 0,
  activeTab,
}) => {
  const [currentTab, setCurrentTab] = useState(defaultActiveTab);

  useEffect(() => {
    if (
      typeof activeTab === "number" &&
      activeTab >= 0 &&
      activeTab <= items.length - 1
    ) {
      setCurrentTab(activeTab);
    }
  }, [activeTab, items]);

  const handleTabClick = (
    index: SetStateAction<number>,
    e: React.MouseEvent<HTMLElement>
  ) => {
    setCurrentTab(index);
    e.preventDefault();
  };

  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--tabs`;
  const tabsClasses = classnames(
    baseClass,
    className,
    `${baseClass}__theme__${theme}`
  );

  return (
    <div className={tabsClasses}>
      <ul className={`${baseClass}--selection`} role="tablist" tabIndex={0}>
        {items.map((tab, index) => (
          <li
            key={`#tab--${index}`}
            role="presentation"
            className={`${baseClass}--selection--item ${
              currentTab === index ? "active" : ""
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
              aria-selected={index === currentTab ? true : false}
              title={tab.label}
              tabIndex={index === currentTab ? 0 : -1}
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
        aria-labelledby={`tab--${currentTab}`}
        tabIndex={0}
      >
        {items[currentTab].content}
      </div>
    </div>
  );
};

export default Tabs;
