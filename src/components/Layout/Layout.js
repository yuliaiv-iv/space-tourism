import React from "react";
import Title from "../Title/Title";
import Wrapper from "../Wrapper/Wrapper";
import "./Layout.scss";

const Layout = React.forwardRef((props, ref) => {
  return (
    <Wrapper className={props.className}>
      <main className={`${props.className}_main`}>
        <section>
          <div className="layout_header">
            <Title page={props.page} title={props.title} />
            <nav className="slider">{props.nav}</nav>
          </div>
          {/* <div> */}
            <div className="layout" ref={ref}>
              {props.content}
            </div>
          {/* </div> */}
        </section>
      </main>
    </Wrapper>
  );
});

export default Layout;
