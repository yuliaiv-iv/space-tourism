import React from "react";
import "./NumberedTitle.css";
import { useWindowSize } from "../../hooks/useWindowSize";

function NumberedTitle({
  number,
  children,
  styleClass,
  navigationTitle,
}) {
  const windowSize = useWindowSize();
  const resolution = windowSize <= 930 && windowSize >= 600;
  return (
    <p className={`uppercase ff-sans-cond ${styleClass}`}>
      {resolution && navigationTitle ? null : (
        <span aria-hidden="true">
          {number}
        </span>
      )}
      {children}
    </p>
  );
}

export default NumberedTitle;
