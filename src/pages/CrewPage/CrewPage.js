import React from "react";
import "./CrewPage.scss";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import Title from "../../components/Title/Title";
import Layout from "../../components/Layout/Layout";
import data from "../../data.json";

function CrewPage() {
  console.log(data.crew[0]);
  return (
    <Wrapper className="crew">
      <Header />
      <main className="crew_main">
        <Title page="02" title="meet your crew" />
        <Layout
          className="crew_container"
          content={
            <>
              <h4>{data.crew[0].role}</h4>
              <h3>{data.crew[0].name}</h3>
              <p>{data.crew[0].bio}</p>
            </>
          }
          nav={<p>o</p>}
          src={data.crew[0].images.png}
        ></Layout>
      </main>
    </Wrapper>
  );
}

export default CrewPage;
