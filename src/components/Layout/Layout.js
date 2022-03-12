import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Wrapper from "../Wrapper/Wrapper";
import "./Layout.scss";

const Layout = React.forwardRef((props, ref) => {
  return (
    <Wrapper className={props.className}>
      {/* <Header /> */}
      <main className={`${props.className}_main`}>
        <section>
          <Title page={props.page} title={props.title} />
          <nav className="slider">{props.nav}</nav>
          <div className="layout" ref={ref}>
            {props.content}
            {/* <div className={`${props.className}_container`}>
              {props.children}
            </div> */}
            {/* <div className="images" ref={ref}>
              {props.images}
            </div>
            <div className="content">{props.content}</div> */}
          </div>
        </section>
      </main>
    </Wrapper>
  );
});

export default Layout;
