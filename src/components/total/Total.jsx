import React from "react";
import "./total.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  MdMoreVert,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

const Total = () => {
  return (
    <div className="total">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MdMoreVert size={20} color={"gray"} cursor={"pointer"} />
      </div>
      <div className="center">
        <div className="total-chart">
          <CircularProgressbar value={84} text={"84%"} />
        </div>
        <h3 className="total-sales">Total Sales Made Today</h3>
        <h3 className="amount">$1873</h3>
        <p className="desc">
          Preious Transactions processing. Last Payments May Not Be Included
        </p>
      </div>
      <div className="bottom">
        <div className="item">
          <h4>Target</h4>
          <div className="item-result positive">
            <MdKeyboardArrowUp fontSize="small" />
            <span>18.7k</span>
          </div>
        </div>
        <div className="item">
          <h4>Last Week</h4>
          <div className="item-result positive">
            <MdKeyboardArrowUp fontSize="small" />
            <span>17.7k</span>
          </div>
        </div>
        <div className="item">
          <h4>Last Month</h4>
          <div className="item-result negative">
            <MdKeyboardArrowDown fontSize="small" />
            <span>15.2k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;
