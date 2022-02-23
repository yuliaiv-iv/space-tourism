import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Wrapper from "../Wrapper/Wrapper";
import "./Layout.scss";

const Layout = React.forwardRef((props, ref) => {
  // const refMain = React.useRef();
  // const [slideSize, setSlideSize] = React.useState(0);
  // const [slides, setSlides] = React.useState([]);
  // let [index, setIndex] = React.useState(0);

  // React.useEffect(() => {
  //   setSlideSize(refMain.current.offsetWidth);
  //   setSlides(Array.from(refMain.current.children));
  //   const setSlidePosition = (slide, index) => {
  //     slide.style.left = slideSize * index + "px";
  //   };
  //   slides.forEach(setSlidePosition);
  // }, []);

  return (
    <Wrapper className={props.className}>
      <Header />
      <main className={`${props.className}_main`}>
        <section>
          <Title page="01" title="pick your destination" />
          <div className={`layout ${props.className}_container`}>
            <div className="track">
              <div className="images" ref={ref}>
                {props.images}
              </div>
            </div>
            {/* <div className="images" ref={ref}>
              {props.images}
            </div> */}
            <nav className="slider" refm={ref}>
              {props.nav}
            </nav>
            {/* <nav className="slider">
              <ul>
              {slides.map((i) => (
                <li>{name}</li>
              ))}
              </ul>
            </nav> */}
            <div className="content">{props.content}</div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
});

export default Layout;
