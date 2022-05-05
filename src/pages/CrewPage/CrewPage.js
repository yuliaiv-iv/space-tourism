import React, { useRef } from "react";
import "./CrewPage.css";
import Header from "../../components/Header/Header";
import NumberedTitle from "../../components/NumberedTitle/NumberedTitle";
import Wrapper from "../../components/Wrapper/Wrapper";
import data from "../../data.json";
import TabList from "../../components/TabList/TabList";
import { Fragment } from "react/cjs/react.production.min";
import { useInitialTabs } from "../../hooks/useTabs";

function CrewPage() {
  const { crew } = data;
  const refNav = useRef();
  const { activeTab, selectedTab } = useInitialTabs(refNav);

  return (
    <Wrapper className="crew">
      <Header />
      <main>
        <div className="grid-container grid-container--crew">
          <NumberedTitle
            number="02"
            styleClass="crew-title letter-spacing-1 fs-300"
            navigationTitle={false}
          >
            meet your crew
          </NumberedTitle>
          {crew.map(({ role, name, bio, images }, index) => (
            <Fragment key={name}>
              <article className={`crew-info ${
                    activeTab === index ? "active" : ""
                  }`}>
                <h3 className="fs-600 uppercase ff-serif">{role}</h3>
                <h2 className="text-white fs-700 ff-serif uppercase">{name}</h2>
                <p className="text-accent">{bio}</p>
              </article>
              <div className={`crew-image ${activeTab === index ? "active" : ""}`}>
              <img
                src={images.png}
                alt={name}
              />
              </div>
            </Fragment>
          ))}
          <TabList
            array={crew}
            refNav={refNav}
            selectedTab={selectedTab}
            activeTab={activeTab}
          ></TabList>
        </div>
      </main>
    </Wrapper>
  );
}

export default CrewPage;
