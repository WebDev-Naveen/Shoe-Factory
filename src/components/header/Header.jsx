import React from "react";
import Nav from "./Nav";
import "./header.css";
import shoelogo from "./shoelogo.png";
import { Link } from "react-router-dom";
import listicon from "../filter.png";
import close from "../close.png";
import { useState } from "react";
import { list } from "C:/Users/Naveen Singh/Desktop/React-Projects/e-commerce/src/actions/myaction";
import { useDispatch } from "react-redux";
function Header(props) {
  const dispatch = useDispatch();
  const [btnTrigger, setTrigger] = useState(false);
  function handleClick() {
    setTrigger(!btnTrigger);
    dispatch(list(btnTrigger));
  }
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
      <button className="filter_btn" onClick={handleClick}>
        <img
          src={btnTrigger ? close : listicon}
          alt="list"
          title="Filter"
          width="40"
          height="45"
        />
      </button>
    </header>
  );
}
export default Header;
