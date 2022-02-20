import React from "react";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Wrapper from "../../components/Wrapper/Wrapper";
import "./Technology.scss";
import data from "../../data.json";

function Technology() {
  return (
    <Wrapper className="technology">
      <Header />
      <main className="technology_main">
        <section>
          <Title page="03" title="space launch 101" />
          <Layout
            className="technology_container"
            src={data.technology[0].images.portrait}
            nav={
              <ul>
                <li className="active">
                  <h4>1</h4>
                </li>
                <li className="active">
                  <h4>2</h4>
                </li>
                <li className="active">
                  <h4>3</h4>
                </li>
              </ul>
            }
            content={
              <>
                <h6>the terminology...</h6>
                <h3>{data.technology[0].name}</h3>
                <p>{data.technology[0].description}</p>
              </>
            }
          ></Layout>
        </section>
      </main>
    </Wrapper>
  );
}

export default Technology;
