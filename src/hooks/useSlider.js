import React, { useState } from "react";

export const useInitialSlider = (refNav) => {
  const [index, setIndex] = useState(0);
  // const [slideSize, setSlideSize] = React.useState(0);
  // const [slides, setSlides] = React.useState([]);
  const [nav, setNav] = React.useState([]);
  // const [currentSlide, setCurrentSlide] = React.useState(undefined);

  // React.useEffect(() => {
  //   // setSlideSize(refImage.current.offsetWidth);
  //   // setSlides(Array.from(refImage.current.children));
  //   // console.log(refNav)
  //   setNav(Array.from(refNav.current.children));
  // }, [refNav]);


  // const setSlidePosition = (slide, index) => {
  //   slide.style.left = slideSize * index * 2 + "px";
  // };
  // slides.forEach(setSlidePosition);

  // function handleImage() {
  //   refImage.current.style.transform =
  //     "translateX(-" + currentSlide.style.left + ")";
  // }

  return {
    index,
    nav
    // handleImage,
  };
};
