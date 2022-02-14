import React from "react";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import "./HomePage.scss";

function HomePage() {
  return (
    <Wrapper className="home">
      <Header />
      <main className="home_main">
        <div className="home_info">
          <div>
            <h5>so, you want to travel to</h5>
            <h1>space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <button>explore</button>
        </div>
      </main>
    </Wrapper>
  );
}

export default HomePage;
