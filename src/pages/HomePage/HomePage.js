import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <Wrapper className="home">
      <Header />
      <main>
        <div className="grid-container grid-container--home">
          <div>
            <h2 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
              So, you want to travel to
            </h2>
            <h1 className="fs-900 ff-serif uppercase letter-spacing-1 text-white">
              Space
            </h1>
            <p className="text-accent">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="btn uppercase ff-serif bg-white">
            <Link to="/destination" className="text-dark">
              Explore
            </Link>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default HomePage;
