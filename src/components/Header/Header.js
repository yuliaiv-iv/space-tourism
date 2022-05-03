import React, { useState } from "react";
import "./Header.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import NumberedTitle from "../NumberedTitle/NumberedTitle";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";

const navigationLinks = ["home", "destination", "crew", "technology"];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const windowSize = useWindowSize();
  const resolutionMobile = windowSize <= 600;

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  //add focus on logo

  return (
    <header className="flex">
      <div>
        <img src={logo} alt="company logo" className="logo" />
      </div>
      {resolutionMobile ? (
        <button onClick={handleMenuOpen} className="header-btn">
          <img src={menuOpen ? close : hamburger} alt="open menu" />
        </button>
      ) : null}
      <nav>
        <ul
          className={`flex underline header-nav ${menuOpen ? "show" : "close"}`}
        >
          {navigationLinks.map((link, index) => (
            <NavLink
              key={link}
              className="text-white"
              to={link === "home" ? "/" : `/${link}`}
            >
              <NumberedTitle
                navigationTitle={true}
                number={`0${index}`}
                styleClass="letter-spacing-2"
              >
                {link}
              </NumberedTitle>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
