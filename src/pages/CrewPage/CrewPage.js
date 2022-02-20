import React from "react";
import "./CrewPage.scss";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import Title from "../../components/Title/Title";
import Layout from "../../components/Layout/Layout";
import data from "../../data.json";

function CrewPage() {
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
                <li className="active"></li>
                <li className="active"></li>
                <li className="active"></li>
                <li className="active"></li>
              </ul>
            }
            src={data.crew[0].images.png}
          ></Layout>
        </section>
      </main>
    </Wrapper>
  );
}

export default CrewPage;
