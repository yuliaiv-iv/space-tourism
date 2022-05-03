import React from "react";
import "./Wrapper.css";

function Wrapper({ className, children }) {
  return (
    <section className={`wrapper wrapper-${className}`}>{children}</section>
  );
}

export default Wrapper;
