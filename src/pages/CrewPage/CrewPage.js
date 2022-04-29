import React, { useRef } from "react";
import "./CrewPage.css";
import Header from "../../components/Header/Header";
import NumberedTitle from "../../components/NumberedTitle/NumberedTitle";
import Wrapper from "../../components/Wrapper/Wrapper";
import data from "../../data.json";
import TabList from "../../components/TabList/TabList";
import { Fragment } from "react/cjs/react.production.min";
import { useInitialSlider } from "../../hooks/useSlider";

function CrewPage() {
  const { crew } = data;
  const refNav = useRef();
  const { activeTab, selectedTab } = useInitialSlider(refNav);

  return (
    <Wrapper className="crew">
      <Header />
      <main>
        <div className="grid-container grid-container--crew">
          <NumberedTitle
            title="title"
            spanClass="destanation-title"
            number="02"
          >
            meet your crew
          </NumberedTitle>
          {crew.map(({ role, name, bio, images }, index) => (
            <Fragment key={name}>
              <article className="crew-info">
                <h3 className="fs-600 uppercase ff-serif">{role}</h3>
                <h2 className="text-white fs-700 ff-serif uppercase">{name}</h2>
                <p className="text-accent">{bio}</p>
              </article>
              <img src={images.png} alt={name} />
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
