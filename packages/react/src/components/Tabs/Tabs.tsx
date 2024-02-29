import { FC, SetStateAction, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import classnames from "classnames";
import { TabsProps } from "./Tabs.props";
import { Icon } from "../Icon";
import { Image } from "../Image";
import { RichText } from "../RichText";

const Tabs: FC<TabsProps> = ({ items }) => {
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
  const tabsClasses = classnames(baseClass);

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
      <div className={`${baseClass}--content`}>
        {(() => {
          switch (items[activeTab].component) {
            case "image":
              return (
                <Image
                  url={items[activeTab].componentData.url}
                  alt={items[activeTab].componentData.alt}
                  caption={items[activeTab].componentData.caption}
                  credit={items[activeTab].componentData.credit}
                >
                  {items[activeTab].componentData}
                </Image>
              );
            case "richtext":
              return (
                <RichText content={items[activeTab].componentData.content} />
              );
            // Add more cases for other component types
            default:
              return null; // Or handle unknown types as needed
          }
        })()}
      </div>
    </div>
  );
};

export default Tabs;
