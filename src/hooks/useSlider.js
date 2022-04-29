import { useState, useCallback, useEffect } from "react";

export const useInitialSlider = (navigationRef) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [navs, setNavs] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setNavs(navigationRef.current);
  }, [navigationRef]);

  const handleNextTab = useCallback(
    (firstTabInRound, nextTab, lastTabInRound) => {
      const tabToSelect =
        selectedTab === lastTabInRound ? firstTabInRound : nextTab;
      setSelectedTab(tabToSelect);
      navs.children[tabToSelect].focus();
    },
    [selectedTab, navs]
  );

  // handle tabs by clicking on
  const handleMouseClick = useCallback(
    (e) => {
      if (e.currentTarget === e.target) {
        return;
      } else {
        const targetIndex = Array.from(navs.children).findIndex(
          (dot) => dot === e.target
        );
        setSelectedTab(targetIndex);
        setActiveTab(targetIndex);
      }
    },
    [setActiveTab, navs]
  );

  // handle tabs using arrow keys
  const handleArrowsKeys = useCallback(
    (e) => {
      const current = navs.children;
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
    [handleNextTab, selectedTab, setActiveTab, navs]
  );

  useEffect(() => {
    // const tabItems = navigationRef.current;
    if (navs) {
      navs.addEventListener("keydown", handleArrowsKeys);
      return () => navs.removeEventListener("keydown", handleArrowsKeys);
    }
    return
  }, [handleArrowsKeys, navs]);

  useEffect(() => {
    // const tabItems = navigationRef.current;
    if (navs) {
      navs.addEventListener("click", handleMouseClick);
      return () => navs.addEventListener("click", handleMouseClick);
    }
    return;
    // return () => navs.addEventListener("click", handleMouseClick);
  }, [handleMouseClick, navs]);

  //   const [index, setIndex] = useState(0);
  //   const [slideSize, setSlideSize] = React.useState(0);
  //   const [slides, setSlides] = React.useState([]);
  //   const [currentSlide, setCurrentSlide] = React.useState(undefined);

  //   React.useEffect(() => {
  //     setSlideSize(refImage.current.offsetWidth);
  //     setSlides(Array.from(refImage.current.children));
  //     setNav(Array.from(refNav.current.children));
  //   }, [refNav]);

  //   const setSlidePosition = (slide, index) => {
  //     slide.style.left = slideSize * index * 2 + "px";
  //   };
  //   slides.forEach(setSlidePosition);

  //   function handleImage() {
  //     refImage.current.style.transform =
  //       "translateX(-" + currentSlide.style.left + ")";
  //   }

  return {
    activeTab,
    selectedTab,
    navigationRef,
  };
};
