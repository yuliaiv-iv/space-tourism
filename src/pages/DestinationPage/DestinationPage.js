import React, { useRef, useState, useEffect } from "react";
import "./DestinationPage.scss";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import data from "../../data.json";
import { NavLink } from "react-router-dom";
import Title from "../../components/Title/Title";
import Layout from "../../components/Layout/Layout";

function DestinationPage() {
  // const mainImgRef = useRef(null);
  // const [index, setIndex] = useState(0);

  // const [currentSlide, setCurrentSlide] = useState(data.destinations[index]);
  // const [width, setWidth] = useState(null);

  // useEffect(() => {
  //   const images = Array.from(mainImgRef.current.children);
  //   console.log(images)
  //   setCurrentImage(images[index])
  //   setWidth(images[index].getBoundingClientRect().width)
  //   console.log(currentImage)
  // }, [index]);

  // console.log(data.destinations[0]);

  // function handleSlide() {
  //   console.log("ds")
  // }

  return (
    <Wrapper className="destination">
      <Header />
      <main className="destination_main">
        <section>
          <Title page="01" title="pick your destination" />
          <Layout
            className="destination_container"
            src={data.destinations[0].images.png}
            nav={data.destinations.map((item) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a className="active" href="#">
                {item.name}
              </a>
            ))}
            content={
              <>
                <h2>moon</h2>
                <p>{data.destinations[0].description}</p>
                <div className="figures">
                  <div>
                    <h6>avg. distance</h6>
                    <h4 className="subheading">
                      {data.destinations[0].distance}
                    </h4>
                  </div>
                  <div>
                    <h6>est. travel time</h6>
                    <h4 className="subheading">
                      {data.destinations[0].travel}
                    </h4>
                  </div>
                </div>
              </>
            }
          ></Layout>
        </section>
      </main>
    </Wrapper>
  );
}

export default DestinationPage;
