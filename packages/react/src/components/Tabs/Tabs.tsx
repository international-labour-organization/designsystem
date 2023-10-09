import { FC, SetStateAction, useState } from "react";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import classnames from "classnames";
import { TabsProps } from "./Tabs.props";
import { Icon } from "../Icon";
import { Image } from "../Image";
import { RichText } from "../RichText";

const Tabs: FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: SetStateAction<number>) => {
    setActiveTab(index);
  };

  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--tabs`;
  const tabsClasses = classnames(baseClass);

  return (
    <div className={`${tabsClasses} tabs--js`}>
      <ul className={`${baseClass}--selection`}>
        {items.map((tab, index) => (
          <li
            key={`#tab--${index}`}
            className={`${baseClass}--selection--item ${
              activeTab === index ? "active" : ""
            }`}
            onClick={() => handleTabClick(index)}
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
                {tab.label &&
                  (tab.label.length > 10
                    ? `${tab.label.slice(0, 10)}...`
                    : tab.label)}
              </span>
              {tab.icon && <Icon hidden={false}>{tab.icon}</Icon>}
            </a>
          </li>
        ))}
      </ul>
      <div className={`${baseClass}--content`}>
        {(() => {
          switch (items[activeTab].component) {
            case "image":
              return (
                <Image url={items[activeTab].componentData.url}>
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

// const Tabs: FC<TabsProps> = ({ items }) => {
//   const [activeTab, setActiveTab] = useState(0);

//   const { prefix } = useGlobalSettings();

//   const baseClass = `${prefix}--tabs`;
//   const tabsClasses = classnames(baseClass);

//   return (
//     <div className={tabsClasses}>
//       <div className='ilo--tabs--selection'>
//         {items.map((tab, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveTab(index)}
//             className={`${baseClass}--selection--item ${activeTab === index ? "active" : ""}`}
//           >
//             {tab.icon && <Icon hidden={tab.icon.hidden}>{tab.icon}</Icon>}
//             <div className={`${baseClass}--selection--button`}>{tab.label}</div>
//           </button>
//         ))}
//       </div>
//       <div className={`${baseClass}--tab-content`}>{items[activeTab].children}</div>
//     </div>
//   );
// };

export default Tabs;
