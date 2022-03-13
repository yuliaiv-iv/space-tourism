import React, { useState } from "react";

export const useInitialSlider = (refImage, refNav) => {
  const [index, setIndex] = useState(0);
  const [slideSize, setSlideSize] = React.useState(0);
  const [slides, setSlides] = React.useState([]);
  const [nav, setNav] = React.useState([]);
  const [currentSlide, setCurrentSlide] = React.useState(undefined);

  React.useEffect(() => {
    setSlideSize(refImage.current.offsetWidth);
    setSlides(Array.from(refImage.current.children));
    setNav(Array.from(refNav.current.children));
  }, []);

  React.useEffect(() => {
    const cuurent = refNav.current;
    const mouseClickHandler = (e) => {
      if (e.currentTarget === e.target) {
        return
      } else {
        const targetIndex = nav.findIndex((dot) => dot === e.target);
        setIndex(targetIndex);
        setCurrentSlide(slides[targetIndex]);
      }
    };
    cuurent.addEventListener("click", mouseClickHandler);
    cuurent.addEventListener("keydown", mouseClickHandler);
    return () => {
      cuurent.removeEventListener("click", mouseClickHandler);
      cuurent.removeEventListener("keydown", mouseClickHandler);
    };
  }, [refNav, nav, slides]);

  const setSlidePosition = (slide, index) => {
    slide.style.left = slideSize * index * 2 + "px";
  };
  slides.forEach(setSlidePosition);


  function handleImage() {
    refImage.current.style.transform =
      "translateX(-" + currentSlide.style.left + ")";
      console.log(refImage.current.style.transform)
  }

  return {
    index,
    handleImage,
  };
};
