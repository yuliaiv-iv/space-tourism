import React from "react";
import "./Layout.scss";

function Layout({ src, alt, nav, content, className }) {
  return (
    <div className={`layout ${className}`}>
      <div className="images">
        <img src={src} alt={alt} />
      </div>
      <nav className="slider">{nav}</nav>
      <div className="content">{content}</div>
    </div>
  );
}

export default Layout;
