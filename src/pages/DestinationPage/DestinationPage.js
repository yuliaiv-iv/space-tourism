import React from "react";
import "./DestinationPage.scss";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import data from "../../data.json";
import image from "../../assets/destination/image-mars.png";
import { NavLink } from "react-router-dom";

function DestinationPage() {
  console.log(data.destinations);
  return (
    <Wrapper className="destination">
      <Header />
      <main className="destination_main">
        <div className="destination_container">
          <h5>
            <span>01</span>pick your destination
          </h5>
          <nav>
            {data.destinations.map((item) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <NavLink to="#">{item.name}</NavLink>
            ))}
          </nav>
          {data.destinations.map((item) => (
            <>
              <div>
                <img src={item.images.png} alt={item.name} />
              </div>
              <div>
                <div className="info">
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
            </>
          ))}
        </div>
      </main>
    </Wrapper>
  );
}

export default DestinationPage;
