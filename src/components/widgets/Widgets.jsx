import React from "react";
import "./widgets.css";
import { MdKeyboardArrowUp, MdMonetizationOn } from "react-icons/md";
import { FaUsers, FaShoppingCart, FaWallet } from "react-icons/fa";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widget widget1">
        <div className="top">
          <p>USERS</p>
          <span>
            <MdKeyboardArrowUp />
            30%
          </span>
        </div>
        <div className="center">
          <p>12.936</p>
        </div>
        <div className="bottom">
          <p>See All Users</p>
          <span>
            <FaUsers />
          </span>
        </div>
      </div>
      <div className="widget widget2">
        <div className="top">
          <p>ORDERS</p>
          <span>
            <MdKeyboardArrowUp />
            35%
          </span>
        </div>
        <div className="center">
          <p>765</p>
        </div>
        <div className="bottom">
          <p>See all orders</p>
          <span>
            <FaShoppingCart />
          </span>
        </div>
      </div>
      <div className="widget widget3">
        <div className="top">
          <p>EARNINGS</p>
          <span>
            <MdKeyboardArrowUp />
            37.2%
          </span>
        </div>
        <div className="center">
          <p>$78.1k</p>
        </div>
        <div className="bottom">
          <p>See Net Earnings</p>
          <span>
            <MdMonetizationOn />
          </span>
        </div>
      </div>
      <div className="widget widget4">
        <div className="top">
          <p>BALANCE</p>
          <span>
            <MdKeyboardArrowUp />
            43.7%
          </span>
        </div>
        <div className="center">
          <p>$128.4K</p>
        </div>
        <div className="bottom">
          <p>See Details</p>
          <span>
            <FaWallet />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
