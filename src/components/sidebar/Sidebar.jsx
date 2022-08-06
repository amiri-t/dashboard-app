import React from "react";
import "./sidebar.css";
import { MdDashboard } from "react-icons/md";
import { BiStoreAlt, BiUserCircle } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { BsCreditCard } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <span>LogoExample</span>
        </div>
        <div className="res-logo">
          <span>LX</span>
        </div>
      </div>
      <div className="center">
        <NavLink to={"/"} className="nav-link">
          <div className="list-item">
            <MdDashboard className="icon" />
            <span>Dashboard</span>
          </div>
        </NavLink>
        <NavLink to={"/users"} className="nav-link">
          <div className="list-item">
            <FaRegUser className="icon" />
            <span>Users</span>
          </div>
        </NavLink>
        <NavLink to={"/products"} className="nav-link">
          <div className="list-item">
            <BiStoreAlt className="icon" />
            <span>Products</span>
          </div>
        </NavLink>
        <NavLink to={"/orders"} className="nav-link">
          <div className="list-item">
            <BsCreditCard className="icon" />
            <span>Orders</span>
          </div>
        </NavLink>
        <NavLink to={"/pricing"} className="nav-link">
          <div className="list-item">
            <IoMdPricetags className="icon" />
            <span>Pricing</span>
          </div>
        </NavLink>
        <NavLink to={"/account"} className="nav-link">
          <div className="list-item">
            <BiUserCircle className="icon" />
            <span>Account</span>
          </div>
        </NavLink>
        <NavLink to={"/settings"} className="nav-link">
          <div className="list-item">
            <FiSettings className="icon" />
            <span>Settings</span>
          </div>
        </NavLink>
      </div>
      <div className="bottom">
        <div className="ad">
          <p>Amazing features are waiting for you</p>
          <NavLink to={"/pricing"}>
            <button>Discover Pro</button>
          </NavLink>
        </div>
        <div className="list-item">
          <FiLogOut className="icon" />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
