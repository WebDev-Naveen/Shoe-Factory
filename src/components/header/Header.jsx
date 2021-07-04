import React from "react";
import Nav from "./Nav";
import "./header.css";
import shoelogo from "./shoelogo.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={shoelogo} alt="logo" width="20" height="20" />
          <button
            style={{
              outline: "none",
              backgroundColor: "inherit",
              border: "none",
            }}
          >
            <span>Shoe's Factory</span>
          </button>
        </div>
      </Link>
      <Nav />
    </header>
  );
}
export default Header;
