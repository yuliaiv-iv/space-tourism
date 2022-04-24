import React from "react";
import "./Wrapper.scss";

function Wrapper({ className, children }) {
  return (
    <section className={`wrapper wrapper-${className}`}>{children}</section>
  );
}

export default Wrapper;
