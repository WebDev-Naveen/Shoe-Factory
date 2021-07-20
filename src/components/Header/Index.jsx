import React from "react";
import Nav from "./Nav";
import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { list } from "../../actions/myaction";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const [btnTrigger, setTrigger] = useState(false);
  function handleClick() {
    dispatch(list(btnTrigger));
    setTrigger(!btnTrigger);
  }

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img
            src="/images/Header/shoelogo.png"
            alt="logo"
            width="20"
            height="20"
          />
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
          src={
            btnTrigger
              ? "/images/Header/close.png"
              : "/images/Header/filter.png"
          }
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
