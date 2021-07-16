import React from "react";
import Nav from "./Nav";
import "./header.css";
import shoelogo from "./shoelogo.png";
import { Link } from "react-router-dom";
import listicon from "../filter.png";
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
      <button className="filter_btn">
        <img src={listicon} alt="list" title="Filter" width="40" height="45" />
      </button>
    </header>
  );
}
export default Header;
