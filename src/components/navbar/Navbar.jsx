import React from "react";
import "./navbar.css";
import { MdLanguage } from "react-icons/md";
import { BiUserCircle, BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <BiSearch className="icon" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="right">
        <div className="nav-link">
          <MdLanguage className="icon" />
          English
        </div>
        <div className="buttons">
          <button>Log In</button>
          <button>Sign In</button>
        </div>
        <div className="nav-link">
          <BiUserCircle className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
