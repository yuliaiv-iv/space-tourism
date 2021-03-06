import React, { useRef } from "react";
import "./TechnologyPage.css";
import Header from "../../components/Header/Header";
import NumberedTitle from "../../components/NumberedTitle/NumberedTitle";
import Wrapper from "../../components/Wrapper/Wrapper";
import data from "../../data.json";
import { Fragment } from "react/cjs/react.production.min";
import TabList from "../../components/TabList/TabList";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useInitialTabs } from "../../hooks/useTabs";

function TechnologyPage() {
  const { technology } = data;
  const windowSize = useWindowSize();
  const resolution = windowSize <= 930;
  const refNav = useRef();
  const { activeTab, selectedTab } = useInitialTabs(refNav);
  return (
    <Wrapper className="technology">
      <Header />
      <main>
        <div className="grid-container grid-container--technology">
          <NumberedTitle
            styleClass="technology-title letter-spacing-1 fs-300"
            navigationTitle={false}
            number="03"
          >
            space launch 101
          </NumberedTitle>
          <TabList
            array={technology}
            innerText={true}
            refNav={refNav}
            selectedTab={selectedTab}
            activeTab={activeTab}
          ></TabList>
          {technology.map(({ name, description, images }, index) => (
            <Fragment key={name}>
              <article className={`technology-info ${
                    activeTab === index ? "active" : ""
                  }`}>
                <h2 className="text-white fs-700 ff-serif uppercase">{name}</h2>
                <p className="text-accent">{description}</p>
              </article>
              <img
                src={!resolution ? images.portrait : images.landscape}
                alt={name}
                className={activeTab === index ? "active" : ""}
              />
            </Fragment>
          ))}
        </div>
      </main>
    </Wrapper>
  );
}

export default TechnologyPage;
