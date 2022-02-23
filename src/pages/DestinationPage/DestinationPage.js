import React, { useRef, useState, useEffect } from "react";
import "./DestinationPage.scss";
import data from "../../data.json";
import Layout from "../../components/Layout/Layout";
import { useInitialSlider } from "../../hooks/SliderHook";

function DestinationPage() {
  const refMain = useRef();
  const refNav = useRef();

  const { index, handleImage } = useInitialSlider(refMain, refNav);

  return (
    <Layout
      className="destination"
      ref={refMain}
      images={data.destinations.map((image, ind) => (
        <img
          className={index === ind ? "current_image" : ""}
          src={image.images.png}
          alt={image.name}
        />
      ))}
      nav={
        <ul ref={refNav}>
          {data.destinations.map((item, ind) => (
            <li className={index === ind ? "active" : ""} onClick={handleImage}>
              {item.name}
            </li>
          ))}
        </ul>
      }
      content={data.destinations.map((info, ind) => (
        <div className={index === ind ? "show" : "hide"}>
          <h2>{info.name}</h2>
          <p>{info.description}</p>
          <div className="figures">
            <div>
              <h6>avg. distance</h6>
              <h4 className="subheading">{info.distance}</h4>
            </div>
            <div>
              <h6>est. travel time</h6>
              <h4 className="subheading">{info.travel}</h4>
            </div>
          </div>
        </div>
      ))}
    ></Layout>
  );
}

export default DestinationPage;
