import React from "react";
import "./Title.scss";

function Title({ page, title }) {
  return (
    <h5>
      <span>{page}</span>
      {title}
    </h5>
  );
}

export default Title;
