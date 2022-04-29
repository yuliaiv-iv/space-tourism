import React from "react";
import "./TechnologyPage.css";
import Header from "../../components/Header/Header";
import NumberedTitle from "../../components/NumberedTitle/NumberedTitle";
import Wrapper from "../../components/Wrapper/Wrapper";
import data from "../../data.json";
import { Fragment } from "react/cjs/react.production.min";
import TabList from "../../components/TabList/TabList";
import { useWindowSize } from "../../hooks/useWindowSize";

function TechnologyPage() {
  const { technology } = data;
  const windowSize = useWindowSize();
  const resolution = windowSize <= 930;
  return (
    <Wrapper className="technology">
      <Header />
      <main>
        <div className="grid-container grid-container--technology">
          <NumberedTitle
            title="title"
            spanClass="destanation-title"
            number="03"
          >
            space launch 101
          </NumberedTitle>
          <TabList array={technology} innerText={true}></TabList>
          {technology.map(({ name, description, images }, index) => (
            <Fragment>
              <article className="technology-info">
                <h2 className="text-white fs-700 ff-serif uppercase">{name}</h2>
                <p className="text-accent">{description}</p>
              </article>
              <img src={!resolution ? images.portrait : images.landscape} alt={name} />
            </Fragment>
          ))}
        </div>
      </main>
    </Wrapper>
  );
}

export default TechnologyPage;
