import React, { useState, useRef, useEffect } from "react";

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
      const targetIndex = nav.findIndex((dot) => dot === e.target);
      setIndex(targetIndex);
      setCurrentSlide(slides[targetIndex]);
    };
    cuurent.addEventListener("click", mouseClickHandler);
    return () => {
      cuurent.removeEventListener("click", mouseClickHandler);
    };
  }, [refNav, nav, slides]);

  const setSlidePosition = (slide, index) => {
    slide.style.left = slideSize * index + "px";
  };
  slides.forEach(setSlidePosition);

  function handleImage() {
    refImage.current.style.transform =
      "translateX(-" + currentSlide.style.left + ")";
  }

  return {
    index,
    handleImage,
  };
};
