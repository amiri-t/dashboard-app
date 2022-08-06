import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./orders.css";
import creditCard from "../../components/images/card.gif";
import creditCard2 from "../../components/images/card2.gif";
import CashGif from "../../components/images/cash.gif";
import giftCard from "../../components/images/gift-card.webp";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <Sidebar />
      <div className="orders-container">
        <Navbar />
        <div className="header">
          <div className="left">
            <h1>No Orders Yet</h1>
            <img src={creditCard} alt="" />
          </div>
          <div className="right">
            <Link to={"/products"}>
              <button>Order Now</button>
            </Link>
          </div>
        </div>
        <div className="table-title">
          <h3>Your Orders will apear here</h3>
        </div>
        <table id="studentsTable">
          <tr>
            <th>Full Name</th>
            <th>Product</th>
            <th>Location</th>
            <th>Delivery</th>
          </tr>
          <tr className="tr2">
            <th>Full Name...</th>
            <th>Product Name</th>
            <th>Users Location</th>
            <th>Delivery Delay</th>
          </tr>
        </table>
        <div className="payment">
          <div className="card">
            <h1>Credit Card</h1>
            <img src={creditCard2} alt="" />
            <h1>Pay With Any Type Of Card</h1>
          </div>
          <div className="card">
            <h1>Cash</h1>
            <img src={CashGif} alt="" />
            <h1>Pay With Cash After Delivery</h1>
          </div>
          <div className="card">
            <h1>Gift Cards</h1>
            <img src={giftCard} alt="" />
            <h1>Pay With Gift Cards</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
