import React, { useRef } from "react";
import "./DestinationPage.scss";
import data from "../../data.json";
import Layout from "../../components/Layout/Layout";
import { useInitialSlider } from "../../hooks/useSlider";

function DestinationPage() {
  const refMain = useRef();
  const refNav = useRef();
  const { index, handleImage } = useInitialSlider(
    refMain,
    refNav
  );

  return (
    <Layout
      className="destination"
      title="pick your destination"
      page="01"
      ref={refMain}
      nav={
        <ul ref={refNav}>
          {data.destinations.map((item, ind) => (
            <li
              key={ind}
              className={index === ind ? "active" : ""}
              onClick={handleImage}
              tabIndex="0"
              onKeyPress={handleImage}
            >
              {item.name}
            </li>
          ))}
        </ul>
      }
      content={data.destinations.map((item, ind) => (
        <div
          className={`container ${index === ind ? "current" : ""}`}
          key={ind}
        >
          <img src={item.images.png} alt={item.name} />
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div className="figures">
              <div>
                <h6>avg. distance</h6>
                <h4 className="subheading">{item.distance}</h4>
              </div>
              <div>
                <h6>est. travel time</h6>
                <h4 className="subheading">{item.travel}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    ></Layout>
  );
}

export default DestinationPage;
