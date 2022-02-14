import React from "react";
import "./Header.scss";
import logo from "../../assets/shared/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { navigation } from "../../utils/data";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <hr></hr>
      <div className="header_nav">
        <nav>
          {navigation.map((page, index) => (
            <NavLink key={page.name} to={page.path}>
              <span>{`${"0" + index}`} </span>
              {page.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
