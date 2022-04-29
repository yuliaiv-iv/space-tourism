import React, { useRef } from "react";
import "./DestinationPage.css";
import data from "../../data.json";
import { useInitialSlider } from "../../hooks/useSlider";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import NumberedTitle from "../../components/NumberedTitle/NumberedTitle";
import { Fragment } from "react/cjs/react.production.min";
import TabList from "../../components/TabList/TabList";

function DestinationPage() {
  const { destinations } = data;
  const refNav = useRef();
  const { activeTab, selectedTab } = useInitialSlider(refNav);

  return (
    <Wrapper className="destination">
      <Header />
      <main>
        <div className="grid-container grid-container--destination">
          <NumberedTitle
            title="title"
            spanClass="destanation-title"
            number="01"
          >
            pick your destination
          </NumberedTitle>
          <TabList
            array={destinations}
            name={"name"}
            refNav={refNav}
            selectedTab={selectedTab}
            activeTab={activeTab}
          ></TabList>
          {destinations.map(
            ({ name, description, distance, travel, images }, index) => (
              <Fragment key={name}>
                <img
                  src={images.png}
                  alt={name}
                  className={activeTab === index ? "active" : ""}
                />
                <article
                  className={`destination-info ${
                    activeTab === index ? "active" : ""
                  }`}
                >
                  <h2 className="fs-800 uppercase ff-serif">{name}</h2>
                  <p className="text-accent">{description}</p>
                  <div className="flex destination-meta">
                    <div>
                      <h3 className="text-accent fs-200 uppercase">
                        Avg. distance
                      </h3>
                      <p className="fs-500 ff-serif uppercase">{distance}</p>
                    </div>
                    <div>
                      <h3 className="text-accent fs-200 uppercase">
                        Est. travel time
                      </h3>
                      <p className="fs-500 ff-serif uppercase">{travel}</p>
                    </div>
                  </div>
                </article>
              </Fragment>
            )
          )}
        </div>
      </main>
    </Wrapper>
  );
}

export default DestinationPage;
