import React from "react";
import "./CrewPage.scss";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import Title from "../../components/Title/Title";
import Layout from "../../components/Layout/Layout";
import data from "../../data.json";

function CrewPage() {

  let [index, setIndex] = React.useState(0);


  const [currentSlide, setCurrentSlide] = React.useState(data.crew[index]);
  console.log(currentSlide)
  return (
    <Wrapper className="crew">
      <Header />
      <main className="crew_main">
        <section>
          <Title page="02" title="meet your crew" />
          <Layout
            className="crew_container"
            content={
              <>
                <h4>{data.crew[0].role}</h4>
                <h3>{data.crew[1].name}</h3>
                <p>{data.crew[0].bio}</p>
              </>
            }
            nav={
              <ul>
                {data.crew.map((item, ind) => (
                  <li
                    className={item.name === currentSlide.name ? "active" : ""}
                    onClick={() => setCurrentSlide(data.crew[ind])}
                  >
                  </li>
                ))}
              </ul>
            }
            images={data.crew.map((image) => (
              <img
                className={image.name === currentSlide.name ? "current_image" : ""}
                src={image.images.png}
                alt={image.name}
              />
            ))}
          ></Layout>
        </section>
      </main>
    </Wrapper>
  );
}

export default CrewPage;
