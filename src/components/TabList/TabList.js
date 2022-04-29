import React from "react";

const TabList = ({
  innerText,
  array,
  name,
  activeTab,
  selectedTab,
  refNav
}) => {
  const insertHtmlTabs = (arr, key) => {
    return (
      <div
        className={`flex tab-list underline`}
        role="tablist"
        aria-label="List of Tabs"
        ref={refNav}
      >
        {arr.map((item, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={selectedTab === index}
            tabIndex={selectedTab === index ? 0 : -1}
            className={`uppercase ff-sans-cond text-accent letter-spacing-2 ${
              index === activeTab ? "active" : ""
            }`}
          >
            {item[key] || (innerText ? index + 1 : null)}
          </button>
        ))}
      </div>
    );
  };
  return insertHtmlTabs(array, name, innerText);
};

export default TabList;
