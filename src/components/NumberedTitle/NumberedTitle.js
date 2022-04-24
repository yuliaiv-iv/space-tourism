import React from "react";
import "./NumberedTitle.css";
import { useWindowSize } from "../../hooks/useWindowSize";

function NumberedTitle({ number, children, title, spanClass }) {
  const windowSize = useWindowSize();
  const resolution = windowSize <= 930 && windowSize >= 600;
  return (
    <p className={`uppercase letter-spacing-2 ff-sans-cond ${title}`}>
      {resolution ? null : <span className={spanClass} aria-hidden="true">{number}</span>}
      {children}
    </p>
  );
}

export default NumberedTitle;
