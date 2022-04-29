import React, {
  forwardRef,
  useRef,
  useCallback,
  useState,
  useEffect,
} from "react";

const TabList = forwardRef(({ innerText, array, name }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const refNav = useRef();

  const handleNextTab = useCallback(
    (firstTabInRound, nextTab, lastTabInRound) => {
      const tabToSelect =
        selectedTab === lastTabInRound ? firstTabInRound : nextTab;
      setSelectedTab(tabToSelect);
      refNav.current.children[tabToSelect].focus();
    },
    [selectedTab]
  );
  // handle tabs by clicking on
  const handleMouseClick = useCallback((e) => {
    const nav = refNav.current.children;
    if (e.currentTarget === e.target) {
      return;
    } else {
      const targetIndex = Array.from(nav).findIndex((dot) => dot === e.target);
      setSelectedTab(targetIndex);
      setActiveTab(targetIndex);
    }
  }, []);

  // handle tabs using arrow keys
  const handleArrowsKeys = useCallback(
    (e) => {
      const current = refNav.current.children;
      if (e.key === "ArrowRight") {
        const first = 0;
        const next = selectedTab + 1;
        handleNextTab(first, next, current.length - 1);
      }
      if (e.key === "ArrowLeft") {
        const last = current.length - 1;
        const next = selectedTab - 1;
        handleNextTab(last, next, 0);
      }
      if (e.key === "Enter") {
        setActiveTab(selectedTab);
      }
    },
    [handleNextTab, selectedTab]
  );

  useEffect(() => {
    const tabItems = refNav.current;
    tabItems.addEventListener("keydown", handleArrowsKeys);
    return () => tabItems.removeEventListener("keydown", handleArrowsKeys);
  }, [handleArrowsKeys]);

  useEffect(() => {
    const tabItems = refNav.current;
    tabItems.addEventListener("click", handleMouseClick);
    return () => tabItems.addEventListener("click", handleMouseClick);
  }, [handleMouseClick]);

  const insertHtmlTabs = (arr, key) => {
    return (
      <div
        className={`flex tab-list underline`}
        role="tablist"
        aria-label="List of Tabs"
        ref={refNav}
        onClick={handleMouseClick}
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
});

export default TabList;
