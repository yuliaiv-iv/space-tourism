import React, { useRef } from "react";
import "./DestinationPage.css";
import data from "../../data.json";
import Layout from "../../components/Layout/Layout";
import { useInitialSlider } from "../../hooks/useSlider";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import NumberedTitle from "../../components/NumberedTitle/NumberedTitle";

function DestinationPage() {
  // const refMain = useRef();
  // const refNav = useRef();
  // const { index, handleImage } = useInitialSlider(
  //   refMain,
  //   refNav
  // );

  return (
    <Wrapper className="destination">
      <Header />
      <main className="grid-container grid-container--destination">
        <NumberedTitle title="title" spanClass="destanation-title" number="01">
          pick your destination
        </NumberedTitle>
        <img src={data.destinations[0].images.png} />
        <div class="underline flex tab-list">
          <button class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2 active">
            Moon
          </button>
          <button class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">
            Mars
          </button>
          <button class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">
            Europa
          </button>
          <button class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">
            Titan
          </button>
        </div>
        <article className="destination-info">
          <h2 className="fs-800 uppercase ff-serif">{data.destinations[0].name}</h2>
          <p className="text-accent">{data.destinations[0].description}</p>
          <div className="flex destination-meta">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="fs-500 ff-serif uppercase">384,400 km</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="fs-500 ff-serif uppercase">3 days</p>
            </div>
          </div>
        </article>
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
