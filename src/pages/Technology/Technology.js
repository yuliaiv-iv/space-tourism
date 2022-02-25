import React, { useRef } from "react";
import Layout from "../../components/Layout/Layout";
import "./Technology.scss";
import data from "../../data.json";
import { useInitialSlider } from "../../hooks/useSlider";
import { useWindowSize } from "../../hooks/useWindowSize";

function Technology() {
  const refMain = useRef();
  const refNav = useRef();

  const { index, handleImage } = useInitialSlider(refMain, refNav);
  const windowSize = useWindowSize();
  const resize = windowSize <= 960;
  return (
    <Layout
      className="technology"
      title="space launch 101"
      page="03"
      ref={refMain}
      images={data.technology.map((image, ind) => (
        <img
          className={index === ind ? "current_image" : ""}
          src={resize ? image.images.landscape : image.images.portrait}
          alt={image.name}
        />
      ))}
      nav={
        <ul ref={refNav}>
          {data.technology.map((item, ind) => (
            <li key={item.name} className={index === ind ? "active" : ""} onClick={handleImage}>
              {ind + 1}
            </li>
          ))}
        </ul>
      }
      content={
        <>
          <h6>the terminology...</h6>
          {data.technology.map((item, ind) => (
            <div className={index === ind ? "show" : "hide"}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </>
      }
    ></Layout>
  );
}

export default Technology;
