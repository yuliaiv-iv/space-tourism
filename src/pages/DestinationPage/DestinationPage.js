import React, { useRef, createRef } from "react";
import "./DestinationPage.css";
import data from "../../data.json";
import Layout from "../../components/Layout/Layout";
import { useInitialSlider } from "../../hooks/useSlider";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import NumberedTitle from "../../components/NumberedTitle/NumberedTitle";
import { Fragment } from "react/cjs/react.production.min";
import TabList from "../../components/TabList/TabList";

function DestinationPage() {
  // const refMain = createRef();
  const refNav = useRef();
  const { index, handleImage, nav, handleTab } = useInitialSlider(
    // refMain,
    refNav
  );

  // console.log(refMain.current)
  const { destinations } = data;
  // console.log(refNav.current.children);

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
          ></TabList>
          {destinations.map(
            ({ name, description, distance, travel, images }, index) => (
              // <div role="tabpanel" id={name}>
                <Fragment key={name}>
                  <img src={images.png} alt={name} />
                  <article className="destination-info">
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
              // </div>
            )
          )}
        </div>
      </main>
    </Wrapper>
    // <Layout
    //   className="destination"
    //   title="pick your destination"
    //   page="01"
    //   ref={refMain}
    //   nav={
    //     <ul ref={refNav}>
    //       {data.destinations.map((item, ind) => (
    //         <li
    //           key={ind}
    //           className={index === ind ? "active" : ""}
    //           onClick={handleImage}
    //           tabIndex="0"
    //           onKeyPress={handleImage}
    //         >
    //           {item.name}
    //         </li>
    //       ))}
    //     </ul>
    //   }
    //   content={data.destinations.map((item, ind) => (
    //     <div
    //       className={`container ${index === ind ? "current" : ""}`}
    //       key={ind}
    //     >
    //       <img src={item.images.png} alt={item.name} />
    //       <div className="content">
    //         <h2>{item.name}</h2>
    //         <p>{item.description}</p>
    //         <div className="figures">
    //           <div>
    //             <h6>avg. distance</h6>
    //             <h4 className="subheading">{item.distance}</h4>
    //           </div>
    //           <div>
    //             <h6>est. travel time</h6>
    //             <h4 className="subheading">{item.travel}</h4>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // ></Layout>
  );
}

export default DestinationPage;
