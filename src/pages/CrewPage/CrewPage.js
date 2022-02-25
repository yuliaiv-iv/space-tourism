import React, { useRef } from "react";
import "./CrewPage.scss";
import Layout from "../../components/Layout/Layout";
import data from "../../data.json";
import { useInitialSlider } from "../../hooks/useSlider";

function CrewPage() {
  const refMain = useRef();
  const refNav = useRef();

  const { index, handleImage } = useInitialSlider(refMain, refNav);
  return (
    <Layout
      className="crew"
      title="meet your crew"
      page="02"
      ref={refMain}
      content={data.crew.map((info, ind) => (
        <div className={index === ind ? "show" : "hide"}>
          <h4>{info.role}</h4>
          <h3>{info.name}</h3>
          <p>{info.bio}</p>
        </div>
      ))}
      nav={
        <ul ref={refNav}>
          {data.crew.map((item, ind) => (
            <li className={index === ind ? "active" : ""} onClick={handleImage}></li>
          ))}
        </ul>
      }
      images={data.crew.map((image, ind) => (
        <img
          src={image.images.png}
          alt={image.name}
          className={index === ind ? "current_image" : ""}
        />
      ))}
    ></Layout>
  );
}

export default CrewPage;
