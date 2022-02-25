import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Wrapper from "../Wrapper/Wrapper";
import "./Layout.scss";

const Layout = React.forwardRef((props, ref) => {

  return (
    <Wrapper className={props.className}>
      <Header />
      <main className={`${props.className}_main`}>
        <section>
          <Title page={props.page} title={props.title} />
          <div className={`layout ${props.className}_container`}>
            <div className="track">
              <div className="images" ref={ref}>
                {props.images}
              </div>
            </div>
            <nav className="slider">
              {props.nav}
            </nav>
            <div className="content">{props.content}</div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
});

export default Layout;
